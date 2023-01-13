import { getPriority } from "./utils";

export function exec(lines: string[]) {
  let result = 0;
  for (const line of lines) {
    const rucksacks = getRucksacks(line);
    const bothRucksacks = getBothRucksacks(rucksacks);

    result += bothRucksacks
      .split("")
      .map((element) => getPriority(element))
      .reduce((a, b) => a + b);
  }

  return result;
}

function getRucksacks(line: string): [string, string] {
  const first = line.slice(0, line.length / 2);
  const second = line.slice(line.length / 2, line.length);

  return [first, second];
}

function getBothRucksacks(rucksacks: [string, string]): string {
  const [first, second] = rucksacks.map((element) => element.split(""));
  let both: Array<string> = [];

  for (const letter of first) {
    if (second.includes(letter) && !both.includes(letter)) {
      both.push(letter);
    }
  }

  return both.join("");
}
