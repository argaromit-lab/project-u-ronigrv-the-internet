import { mkdirSync, writeFileSync } from "node:fs";

const word = "Clownopedia";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
