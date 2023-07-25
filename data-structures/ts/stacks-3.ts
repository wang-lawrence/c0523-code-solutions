/* eslint-disable @typescript-eslint/no-empty-function */
import Stack from './lib/stack';

export function get2ndFromTop<T>(stack: Stack<T>): T | undefined {
  if (stack.peek() === undefined) return;
  const top = stack.pop() as T;
  const second = stack.peek();
  stack.push(top);
  return second;
}

export function insertUnderTop<T>(stack: Stack<T>, value: T): void {
  if (stack.peek() === undefined) return;
  const top = stack.pop() as T;
  stack.push(value);
  stack.push(top);
}
