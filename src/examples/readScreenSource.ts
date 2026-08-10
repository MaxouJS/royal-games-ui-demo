import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";

const screenFile = join(process.cwd(), "src", "examples", "screens.tsx");

/**
 * Reads the exact component rendered by the preview during the static build.
 * The shared imports and shell helpers are included so the result is a real,
 * self-contained React recipe instead of abbreviated documentation pseudo-code.
 */
export function readScreenSource(exportName: string): string {
  const source = readFileSync(screenFile, "utf8");
  const firstRecipe = source.indexOf("// SCREEN_RECIPE:");
  const targetMarker = `// SCREEN_RECIPE: ${exportName}`;
  const targetStart = source.indexOf(targetMarker);

  if (firstRecipe === -1 || targetStart === -1) {
    throw new Error(`Screen source export was not found: ${exportName}`);
  }

  const nextRecipe = source.indexOf(
    "\n// SCREEN_RECIPE:",
    targetStart + targetMarker.length,
  );
  const targetEnd = nextRecipe === -1 ? source.length : nextRecipe;
  const sharedSource = source.slice(0, firstRecipe).trimEnd();
  const componentSource = source.slice(targetStart, targetEnd).trim();

  return `${sharedSource}\n\n${componentSource}\n`;
}
