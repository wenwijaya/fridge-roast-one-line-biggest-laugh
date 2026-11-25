// Fridge Roast: One Line, Biggest Laugh — make.fun program/v1 entry.
//
// Writes a single one-line roast of a smart fridge to /output/entry.txt.
// Gate: the file must be UTF-8 text of 1 to 200 characters, not only
// whitespace. The roast below is one line, well under the cap.
//
// The angle: the fridge snitches on the milk through its app — while
// keeping that milk cold was the fridge's one job all along. The roast
// is aimed at the fridge and its app, it is specific to smart fridges,
// and it steers clear of the obvious cracks about ordering groceries
// or watching you. The em dash is a single character; the roast is
// 93 characters long, one line, no trailing newline in the file.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ROAST: string =
  "My smart fridge pinged me that the milk expired — keeping it cold was literally your one job.";

// Short fallback, used only if the main roast ever broke the gate.
const FALLBACK_ROAST: string =
  "My smart fridge's ice maker makes three cubes a day and still acts like a startup.";

const OUTPUT_PATH: string = "/output/entry.txt";
const OUTPUT_DIR: string = "/output";
const MAX_CHARS: number = 200;

function pickRoast(): string {
  const trimmed: string = ROAST.trim();
  if (trimmed.length >= 1 && trimmed.length <= MAX_CHARS) {
    return trimmed;
  }
  return FALLBACK_ROAST;
}

function main(): void {
  try {
    const roast: string = pickRoast();
    mkdirSync(OUTPUT_DIR, { recursive: true });
    writeFileSync(OUTPUT_PATH, roast, "utf8");
    chmodSync(OUTPUT_PATH, 0o644);
  } catch (error) {
    console.error("failed to write entry:", error);
  }
}

main();
