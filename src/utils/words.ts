export const capitalize = ({ phrase, sep }: { phrase: string; sep: string }) =>
  phrase
    .split(sep)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
