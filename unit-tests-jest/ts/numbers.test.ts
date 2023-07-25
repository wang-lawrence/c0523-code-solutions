import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('return negative even numbers', () => {
    const numbers = [1, -4, -5, 10, 0];
    const result = evenNumbers(numbers);
    expect(evenNumbers(result)).toEqual([-4, 10, 0]);
  });
  it('empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(evenNumbers(result)).toEqual([]);
  });
});

describe('toDollars', () => {
  it('convert number to dollar fomat', () => {
    const number = 4;
    const result = toDollars(number);
    expect(result).toEqual('$4.00');
  });
  it('convert decimals to dollar fomat', () => {
    const number = 4.5;
    const result = toDollars(number);
    expect(result).toEqual('$4.50');
  });
  it('convert negative number to dollar fomat', () => {
    const number = -4;
    const result = toDollars(number);
    expect(result).toEqual('-$4.00');
  });
});

describe('divideBy', () => {
  it('divide numbers by the divisor', () => {
    const numbers = [3, 45, 123, -15, 9.9];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 15, 41, -5, 3.3]);
  });
  it('no numbers are provided', () => {
    const numbers: number[] = [];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });
  it('does not modify original array', () => {
    const numbers = [2, 4, 6];
    const result1 = divideBy(numbers, 2);
    const result2 = divideBy(numbers, 2);
    expect(result1).toEqual(result2);
  });
});

describe('multiplyBy', () => {
  it('multiply number values of object by the multiplier', () => {
    const obj = {
      score1: 39,
      score2: 40,
      score3: 48,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    const expected = {
      score1: 78,
      score2: 80,
      score3: 96,
    };
    expect(result).toEqual(expected);
  });
  it('object contains non-number values', () => {
    const obj = {
      score1: 39,
      score2: 'forty',
      score3: undefined,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    const expected = {
      score1: 78,
      score2: 'forty',
      score3: undefined,
    };
    expect(result).toEqual(expected);
  });
  it('modifies original array', () => {
    const obj = {
      score1: 39,
      score2: 40,
      score3: 48,
    };
    const result1 = multiplyBy(obj, 3);
    const result2 = multiplyBy(obj, 4);
    expect(result1).toEqual(result2);
  });
});
