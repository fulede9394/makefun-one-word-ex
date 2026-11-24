import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Your Ex: exactly one word an ex would use to describe you.
// "HighMaintenance" beats "Exhausting": it is a specific verdict an ex
// would actually deliver, and it stings in a very particular way.
const WORD = "HighMaintenance";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
