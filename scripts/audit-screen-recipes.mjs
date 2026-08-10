import { readFileSync } from "node:fs";
import { join } from "node:path";

const screenNames = [
  "LobbyScreen",
  "ShopScreen",
  "SettingsScreen",
  "MapScreen",
  "VictoryScreen",
  "RanksScreen",
];

const projectRoot = process.cwd();
const recipesPath = join(projectRoot, "src", "examples", "screens.tsx");
const recipes = readFileSync(recipesPath, "utf8");
const pseudoSourcePatterns = [
  /\{tabs\}/,
  /\{packs\}/,
  /\{leaders\}/,
  /\{\/\*[^*]+\*\/\}/,
];

for (const screenName of screenNames) {
  const marker = `// SCREEN_RECIPE: ${screenName}`;
  const markerCount = recipes.split(marker).length - 1;

  if (markerCount !== 1) {
    throw new Error(
      `${screenName} must have exactly one source marker; found ${markerCount}.`,
    );
  }

  const route = screenName.replace("Screen", "").toLowerCase();
  const pagePath = join(
    projectRoot,
    "src",
    "app",
    "screens",
    route,
    "page.tsx",
  );
  const page = readFileSync(pagePath, "utf8");

  if (!page.includes(`readScreenSource("${screenName}")`)) {
    throw new Error(
      `${screenName} documentation does not read its rendered recipe source.`,
    );
  }

  for (const pattern of pseudoSourcePatterns) {
    if (pattern.test(page)) {
      throw new Error(
        `${screenName} documentation contains abbreviated pseudo-source: ${pattern}.`,
      );
    }
  }
}

console.log(
  `Screen recipe audit passed for ${screenNames.length} copy-ready compositions.`,
);
