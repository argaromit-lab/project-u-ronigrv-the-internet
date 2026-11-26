import { mkdirSync, writeFileSync } from "node:fs";

const word = "Blabyrinth";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
