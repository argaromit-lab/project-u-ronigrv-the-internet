import { mkdirSync, writeFileSync } from "node:fs";

const word = "Hullabaloo";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
