export type DrawItemProps = "A" | "B" | "C" | "X" | "Y" | "Z";

export enum ResultType {
  LOOSE = 0,
  DRAW = 3,
  WIN = 6,
}

export enum DrawItem {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

export function getDrawScore(item: DrawItem): number {
  switch (item) {
    case DrawItem.ROCK:
      return 1;
    case DrawItem.PAPER:
      return 2;
    case DrawItem.SCISSORS:
      return 3;
    default:
      throw new Error("unreachable");
  }
}

export function getDrawItem(item: DrawItemProps) {
  if (item === "A" || item === "X") {
    return DrawItem.ROCK;
  } else if (item === "B" || item === "Y") {
    return DrawItem.PAPER;
  } else {
    return DrawItem.SCISSORS;
  }
}
