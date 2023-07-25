import Stack from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  while (stack.peek() !== undefined) {
    count++;
    stack.pop();
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  let max = -Infinity;
  if (stack.peek() === undefined) return -Infinity;
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop() as number);
  }
  return max;
}
