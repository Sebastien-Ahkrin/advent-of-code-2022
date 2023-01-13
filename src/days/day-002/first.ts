import {
  DrawItem,
  DrawItemProps,
  getDrawItem,
  getDrawScore,
  ResultType,
} from "./utils";

export function exec(lines: string[]) {
  const scores = {
    opponent: 0,
    you: 0,
  };

  for (const line of lines) {
    const [first, second] = line
      .split(" ")
      .map((element: string) => getDrawItem(element as DrawItemProps));

    scores.opponent =
      getDrawScore(first) + getResultType(second, first) + scores.opponent;

    scores.you =
      getDrawScore(second) + getResultType(first, second) + scores.you;
  }

  return {
    scores,
    winner: scores.opponent > scores.you ? scores.opponent : scores.you,
  };
}

// if b won against a
function getResultType(a: DrawItem, b: DrawItem): ResultType {
  if (a === b) {
    return ResultType.DRAW;
  }

  if (b === DrawItem.ROCK && a === DrawItem.PAPER) {
    return ResultType.LOOSE;
  }

  if (b === DrawItem.PAPER && a === DrawItem.SCISSORS) {
    return ResultType.LOOSE;
  }

  if (b === DrawItem.SCISSORS && a === DrawItem.ROCK) {
    return ResultType.LOOSE;
  }

  return ResultType.WIN;
}
