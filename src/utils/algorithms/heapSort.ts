export const getHeapSortAnims = (items: number[]) => {
  const pq = new MaxHeap(items);
  pq.heapSort();
  return { heapSorted: pq.heap, heapSortAnims: pq.animArr };
};

class MaxHeap {
  N = 0;
  heap: number[] = [];
  animArr: number[][] = [];

  constructor(arr?: number[]) {
    if (!arr) return;
    const newArr = [...arr];
    this.N = newArr.length;
    this.heap = newArr;
    for (let i = Math.floor(this.N / 2); i >= 0; i--) {
      this.sink(i);
    }
  }

  sink(i: number) {
    while (i * 2 < this.N && this.N > 1) {
      let j = i * 2;
      if (i === 0) j = 1;
      if (j + 1 < this.N && this.heap[j] < this.heap[j + 1]) j++;
      if (this.heap[j] < this.heap[i]) break;
      this.exch(i, j);
      i = j;
    }
  }

  exch(a: number, b: number) {
    this.animArr.push([a, b]);
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  heapSort() {
    while (this.N > 1) {
      this.exch(--this.N, 0);
      this.sink(0);
    }
    return this.heap;
  }
}
