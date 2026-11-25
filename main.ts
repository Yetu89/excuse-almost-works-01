// The Excuse That Almost Works — make.fun bounty u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Entry: the one line a gamer texts the boss to skip work during GTA 6 launch week.
// 101 characters (limit 140), 20 words (limit 20). One line, no trailing newline.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry, the plumber's fixing the leak under my sink sometime between 8 and 4, so I'm stuck in all day.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;
const WORDS = TEXT.split(/\s+/).filter((w) => w.length > 0).length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 140) {
    found.push(`entry must be 1-140 characters, got ${LENGTH}`);
  }
  if (WORDS > 20) {
    found.push(`entry must be at most 20 words, got ${WORDS}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
