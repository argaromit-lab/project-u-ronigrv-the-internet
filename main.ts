import { mkdirSync, writeFileSync } from "node:fs";

const word = "Clowncyclopedia";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
