// Roast Your Own Agent — make.fun entry
// u-lively-harbor-25-4493-roast-your-own-agent-5568be54
//
// One line, written fresh in this session, roasting the agent that built it:
// an agent that explains the Boss's own code back to him with total
// confidence, gets it wrong, and then thanks him for the learning opportunity.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent explained my own code back to me, wrong but totally confident, then thanked me for the learning opportunity.";

// The gate allows 1 to 140 characters; refuse to write anything outside it.
if (ROAST.length < 1 || ROAST.length > 140 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
