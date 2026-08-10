import { createServer } from "node:http";
import { access, mkdir, readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { chromium } from "@playwright/test";

const outputRoot = resolve(process.cwd(), "out");
const screenshotRoot = process.env.RG_SCREENSHOT_DIR;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

function assertLayout(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function centerX(bounds) {
  return (bounds.left ?? bounds.x) + bounds.width / 2;
}

function centerY(bounds) {
  return (bounds.top ?? bounds.y) + bounds.height / 2;
}

function closeTo(first, second, tolerance = 1) {
  return Math.abs(first - second) <= tolerance;
}

function outputPath(pathname) {
  const relativePath = decodeURIComponent(pathname).replace(/^\/+/, "");
  const requested = resolve(outputRoot, relativePath || "index.html");
  const candidate = pathname.endsWith("/")
    ? join(requested, "index.html")
    : requested;

  if (!candidate.startsWith(outputRoot)) {
    throw new Error(`Refusing path outside static output: ${pathname}`);
  }

  return candidate;
}

async function serveStaticOutput() {
  await access(join(outputRoot, "index.html"));

  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", "http://127.0.0.1");
      const file = outputPath(url.pathname);
      const body = await readFile(file);
      response.writeHead(200, {
        "Content-Type":
          contentTypes[extname(file)] ?? "application/octet-stream",
      });
      response.end(body);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });

  await new Promise((resolveListening) => {
    server.listen(0, "127.0.0.1", resolveListening);
  });

  const address = server.address();
  if (address === null || typeof address === "string") {
    server.close();
    throw new Error("Static audit server did not expose a TCP port.");
  }

  return { server, origin: `http://127.0.0.1:${address.port}` };
}

async function bounds(page, selector) {
  return page.locator(selector).evaluate((element) => {
    const rectangle = element.getBoundingClientRect();
    return {
      top: rectangle.top,
      right: rectangle.right,
      bottom: rectangle.bottom,
      left: rectangle.left,
      width: rectangle.width,
      height: rectangle.height,
    };
  });
}

async function auditLobby(page, skin) {
  const phone = await bounds(page, ".phone-screen");
  const title = await bounds(page, ".rg-chrome-row--balanced .rg-screen-name");
  assertLayout(
    closeTo(centerX(phone), centerX(title)),
    `${skin} lobby title is not centered in the screen chrome.`,
  );

  const panel = await bounds(page, ".rg-panel--paper .rg-panel__content");
  const panelActions = await bounds(page, ".rg-panel--paper .rg-action-group");
  assertLayout(
    closeTo(centerX(panel), centerX(panelActions)),
    `${skin} lobby action axis is not centered in the quest panel.`,
  );

  const giftCenters = await page
    .locator(
      ".rg-bottom-stack .rg-dock .rg-settings-row > .rg-settings-row__icon, " +
        ".rg-bottom-stack .rg-dock .rg-settings-row > .rg-settings-row__copy, " +
        ".rg-bottom-stack .rg-dock .rg-settings-row > .rg-settings-row__control",
    )
    .evaluateAll((elements) =>
      elements.map((element) => {
        const rectangle = element.getBoundingClientRect();
        return rectangle.top + rectangle.height / 2;
      }),
    );
  assertLayout(
    Math.max(...giftCenters) - Math.min(...giftCenters) <= 2,
    `${skin} daily gift row does not share one vertical axis.`,
  );

  const giftWrap = await page
    .locator(".rg-bottom-stack .rg-counters--inline")
    .evaluate((element) => getComputedStyle(element).flexWrap);
  assertLayout(
    giftWrap === "nowrap",
    `${skin} daily gift actions are allowed to wrap.`,
  );
}

async function auditMap(page, skin) {
  const icon = await bounds(page, ".rg-bottom-stack .rg-settings-row__icon");
  const copy = await bounds(page, ".rg-bottom-stack .rg-settings-row__copy");
  const control = await bounds(
    page,
    ".rg-bottom-stack .rg-settings-row__control",
  );

  assertLayout(
    icon.right <= copy.left,
    `${skin} map badge overlaps the objective copy.`,
  );
  assertLayout(
    copy.right <= control.left,
    `${skin} map copy overlaps the action column.`,
  );
  assertLayout(
    closeTo(centerY(icon), centerY(control), 2),
    `${skin} map badge and action do not share a vertical axis.`,
  );
}

async function auditRanks(page, skin) {
  const columns = page.locator(".rg-podium-column");
  const count = await columns.count();
  assertLayout(
    count === 3,
    `${skin} podium does not contain exactly three columns.`,
  );

  for (let index = 0; index < count; index += 1) {
    const column = columns.nth(index);
    const avatar = await column.locator(".rg-avatar").boundingBox();
    const plinth = await column
      .locator(".rg-podium-column__plinth")
      .boundingBox();
    assertLayout(
      avatar !== null && plinth !== null,
      `${skin} podium column is incomplete.`,
    );
    assertLayout(
      closeTo(centerX(avatar), centerX(plinth)),
      `${skin} podium avatar ${index + 1} is not centered over its plinth.`,
    );
  }
}

async function auditVictory(page, skin) {
  const continueAction = await bounds(
    page,
    ".rg-dock__face > .rg-action-group > .rg-button",
  );
  const secondaryActions = page.locator(
    ".rg-dock__face > .rg-action-group > .rg-action-group .rg-button",
  );
  const replay = await secondaryActions.nth(0).boundingBox();
  const share = await secondaryActions.nth(1).boundingBox();

  assertLayout(
    replay !== null && share !== null,
    `${skin} result action row is incomplete.`,
  );
  assertLayout(
    closeTo(continueAction.left, replay.x) &&
      closeTo(continueAction.right, share.x + share.width),
    `${skin} result actions do not share the same outer axis.`,
  );
}

const audits = {
  lobby: auditLobby,
  map: auditMap,
  ranks: auditRanks,
  victory: auditVictory,
};

const { server, origin } = await serveStaticOutput();
const browser = await chromium.launch();

try {
  if (screenshotRoot !== undefined) {
    await mkdir(screenshotRoot, { recursive: true });
  }

  for (const skin of ["enamel", "gloss"]) {
    for (const [screenName, audit] of Object.entries(audits)) {
      const page = await browser.newPage({
        viewport: { width: 1200, height: 1100 },
        deviceScaleFactor: 1,
      });
      await page.addInitScript((activeSkin) => {
        localStorage.setItem("rg-demo-skin", activeSkin);
      }, skin);
      await page.goto(`${origin}/screens/${screenName}/`, {
        waitUntil: "networkidle",
      });
      await page.addStyleTag({
        content: `
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }
        `,
      });
      await audit(page, skin);

      if (screenshotRoot !== undefined) {
        await page.locator(".phone").screenshot({
          path: join(screenshotRoot, `${screenName}-${skin}.png`),
        });
      }

      await page.close();
    }
  }

  console.log(
    "Screen layout audit passed for 8 Enamel and Gloss compositions.",
  );
} finally {
  await browser.close();
  server.close();
}
