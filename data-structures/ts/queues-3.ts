import Queue from './lib/queue';

export function take2nd<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() === undefined) return;
  const head = queue.dequeue();
  queue.enqueue(head as T);
  return queue.dequeue();
}

export function takeSmaller(queue: Queue<number>): number | undefined {
  const head1 = queue.dequeue();
  const head2 = queue.dequeue();
  if (head1 === undefined) return;
  if (head2 === undefined) return head1;
  if (head1 <= head2) {
    queue.enqueue(head2);
    return head1;
  }
  queue.enqueue(head1);
  return head2;
}

export function takeNextSmallest(
  numberQueue: Queue<number>
): number | undefined {
  let head1 = numberQueue.dequeue();
  let head2 = numberQueue.peek();
  if (head1 === undefined) return;
  if (head2 === undefined) return head1;
  while (head1 !== undefined && head2 !== undefined && head1 >= head2) {
    numberQueue.enqueue(head1);
    head1 = numberQueue.dequeue();
    head2 = numberQueue.peek();
  }
  return head1;
}
