// Lowercase: a-z => 1-26
// Uppercase A-Z => 27-52
export function getPriority(letter: string) {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase().charCodeAt(0) - 96 + 26;
  }

  return letter.charCodeAt(0) - 96;
}
