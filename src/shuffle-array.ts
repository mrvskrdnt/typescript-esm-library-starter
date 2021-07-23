export const shuffleArray = (arr: unknown[]): unknown[] => {
  const result = Array.from(arr);
  let i = result.length;
  let rdm;

  while (i !== 0) {
    rdm = Math.floor(Math.random() * i);
    i -= 1;
    [result[i], result[rdm]] = [result[rdm], result[i]];
  }

  return result;
};
