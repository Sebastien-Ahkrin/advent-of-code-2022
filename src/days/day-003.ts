import { exec as execFirst } from "./day-003/first";
import { exec as execSecond } from "./day-003/second";

const NEW_LINE = "\n";

export async function run(input: string) {
  const inputs = input.split(NEW_LINE);
  const lines = inputs.slice(0, inputs.length - 1);

  return {
    firstAnswer: execFirst(lines),
    secondAnswer: execSecond(lines),
  };
}
