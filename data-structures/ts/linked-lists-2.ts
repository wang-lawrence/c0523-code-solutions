/* eslint-disable @typescript-eslint/no-empty-function */
import LinkedList from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 1;
  let node = list;
  while (node.next !== null) {
    count++;
    node = node.next;
  }
  return count;
}

export function append<T>(list: LinkedList<T>, value: T): void {
  while (list.next) {
    list = list.next;
  }
  list.next = new LinkedList(value);
}

export function getTail<T>(list: LinkedList<T>): T | null {
  while (list) {
    if (list.next) {
      list = list.next;
    } else {
      break;
    }
  }
  return list.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  while (list.data) {
    if (list.data === value) return true;
    if (!list.next) return false;
    list = list.next;
  }
  return false;
}
