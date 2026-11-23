// make.fun entry: One Word, First Thought
// Writes exactly one word to the output file, then verifies it byte-for-byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "serendipity";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate: UTF-8 text, 1 to 24 characters, exactly one word, no whitespace,
// no control characters. "Exactly one word" means a single token: no spaces,
// tabs, or newlines anywhere in the string, and nothing but the word itself.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 24) {
  console.error(`Invalid entry: length ${charCount} is outside 1-24 characters.`);
  process.exit(1);
}
if (/[\u0000-\u001f\u007f]/.test(ENTRY)) {
  console.error("Invalid entry: must not contain control characters.");
  process.exit(1);
}
if (ENTRY.trim() !== ENTRY || ENTRY.split(/\s+/).length !== 1) {
  console.error("Invalid entry: must be exactly one word with no surrounding or internal whitespace.");
  process.exit(1);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");

const roundTrip = readFileSync(outputPath, "utf8");
if (roundTrip !== ENTRY) {
  console.error("Verification failed: file contents do not match the entry.");
  process.exit(1);
}

console.log(ENTRY);
console.log(`Characters: ${charCount}`);
