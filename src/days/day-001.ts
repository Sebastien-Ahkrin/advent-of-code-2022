const LINE_SEPARATOR = "";
const NEW_LINE = "\n";

type Elves = Array<Array<number>>;

export async function run(input: string) {
  const elves = getElves(input.split(NEW_LINE));
  const calories = getCalories(elves);

  const sorted = calories.sort((a, b) => b - a);
  const first = sorted[0];
  const top = sorted.slice(0, 3);

  return {
    first,
    top: top.reduce((prev, curr) => prev + curr),
  };
}

function getElves(inputs: Array<string>) {
  const result: Elves = [[]];

  for (const input of inputs) {
    if (input !== LINE_SEPARATOR) {
      result[result.length - 1].push(Number(input));
    } else {
      result.push([]);
    }
  }

  return result.slice(0, result.length - 1);
}

function getCalories(elves: Elves) {
  const result = [];

  for (const element of elves) {
    result.push(element.reduce((prev, curr) => prev + curr));
  }

  return result;
}
