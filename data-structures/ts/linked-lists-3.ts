/* eslint-disable @typescript-eslint/no-empty-function */
import LinkedList from './lib/linked-list';

export function removeTail<T>(list: LinkedList<T>): void {
  if (list.next === null) return;
  while (list.next) {
    if (list.next.next !== null) {
      list = list.next;
    } else {
      list.next = null;
    }
  }
}

export function updateNext<T>(list: LinkedList<T>, value: T): void {
  if (list.next === null) return;
  list.next.data = value;
}

export function insertNext<T>(list: LinkedList<T>, value: T): void {
  const tail = list.next;
  list.next = new LinkedList(value);
  list.next.next = tail;
}

export function removeNext<T>(list: LinkedList<T>): void {
  if (list.next === null) return;
  const tail = list.next.next;
  list.next = tail;
}

export function swapFront<T>(list: LinkedList<T>): LinkedList<T> | null {
  if (list.next === null) return list;
  const head = list;
  const second = list.next;
  const tail = second.next;
  second.next = head;
  second.next.next = tail;
  return second;
}
