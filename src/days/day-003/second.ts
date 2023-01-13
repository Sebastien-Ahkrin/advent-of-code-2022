import { getPriority } from "./utils";

export function exec(lines: string[]) {
  const elvesRucksacks = getRucksacksByElves(lines);
  let result = 0;

  for (const elves of elvesRucksacks) {
    const threeRucksacks = getThreeRucksacks(elves as [string, string, string]);

    result += threeRucksacks
      .split("")
      .map((element) => getPriority(element))
      .reduce((a, b) => a + b);
  }

  return result;
}

function getRucksacksByElves(lines: string[]) {
  const sacks: Array<Array<string>> = [];

  let additionnal = [];
  for (const line of lines) {
    additionnal.push(line);

    if (additionnal.length === 3) {
      sacks.push(additionnal);
      additionnal = [];
    }
  }

  return sacks;
}

function getThreeRucksacks(rucksacks: [string, string, string]): string {
  const [first, second, third] = rucksacks.map((e) => e.split(""));
  let both: Array<string> = [];

  for (const letter of first) {
    if (
      second.includes(letter) &&
      third.includes(letter) &&
      !both.includes(letter)
    ) {
      both.push(letter);
    }
  }

  return both.join("");
}
