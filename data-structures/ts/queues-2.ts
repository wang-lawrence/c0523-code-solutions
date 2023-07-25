/* eslint-disable @typescript-eslint/no-empty-function */
import Queue from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  if (queue.peek() !== undefined) {
    const head = queue.dequeue();
    queue.enqueue(head as T);
  }
}

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) return;
  for (let i = 0; i < index; i++) {
    const head = queue.dequeue();
    queue.enqueue(head as T);
  }
  return queue.dequeue();
}
