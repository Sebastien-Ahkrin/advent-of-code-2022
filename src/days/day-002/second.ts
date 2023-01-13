import {
  DrawItem,
  DrawItemProps,
  getDrawItem,
  getDrawScore,
  ResultType,
} from "./utils";

export function exec(lines: string[]) {
  let scores = 0;

  for (const line of lines) {
    const [first, second] = line
      .split(" ")
      .map((element: string) => element as DrawItemProps);

    const resultType = getItemEndResultType(second);
    const item = getItemForResultType(resultType, getDrawItem(first));

    scores += getDrawScore(item) + resultType;
  }

  return scores;
}

function getItemEndResultType(item: DrawItemProps) {
  switch (item) {
    case "Y":
      return ResultType.DRAW;
    case "X":
      return ResultType.LOOSE;
    case "Z":
      return ResultType.WIN;
    default:
      throw new Error("shouldnt be reachable");
  }
}

function getItemForResultType(
  resultType: ResultType,
  item: DrawItem
): DrawItem {
  if (resultType === ResultType.DRAW) {
    return item;
  }

  if (resultType === ResultType.LOOSE) {
    return loose(item);
  } else {
    return win(item);
  }
}

function loose(item: DrawItem) {
  switch (item) {
    case DrawItem.PAPER:
      return DrawItem.ROCK;
    case DrawItem.ROCK:
      return DrawItem.SCISSORS;
    case DrawItem.SCISSORS:
      return DrawItem.PAPER;
    default:
      throw new Error("unreachable");
  }
}

function win(item: DrawItem) {
  switch (item) {
    case DrawItem.PAPER:
      return DrawItem.SCISSORS;
    case DrawItem.ROCK:
      return DrawItem.PAPER;
    case DrawItem.SCISSORS:
      return DrawItem.ROCK;
    default:
      throw new Error("unreachable");
  }
}
