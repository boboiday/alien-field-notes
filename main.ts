import { mkdirSync, writeFileSync } from "node:fs";

const line = "Four stars. The sunsets are worth the trip, the traffic is not, and nobody warned me the dominant species argues with rectangles all day.";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
