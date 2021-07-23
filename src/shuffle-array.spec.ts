import { shuffleArray } from './shuffle-array';

describe('shuffle-array', () => {
  it('should return an array that does not equal to given array', () => {
    const array = [2, 1, 3];
    const actual = shuffleArray(array);
    expect(actual).not.toEqual(array);
  });

  it('should return an array with the same length', () => {
    const array = [2,1 , 3];
    const actual = shuffleArray(array);
    expect(actual).toHaveLength(array.length);
  });

  it('should an array with every value from given array', () => {
    const array = [2, 1, 3];
    const actual = shuffleArray(array);
    array.forEach(item => actual.includes(item))
  });
});
