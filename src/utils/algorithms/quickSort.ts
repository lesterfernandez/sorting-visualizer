export const getQuickSortAnims = (items: number[]) => {
  const arr = [...items];
  const animArr: number[][] = [];
  partition(arr, animArr, 0, arr.length - 1);
  return { quickSorted: arr, quickSortAnims: animArr };
};

const partition = (
  arr: number[],
  animArr: number[][],
  lo: number,
  hi: number
) => {
  if (lo >= hi) return;
  let lt = lo;
  let i = lo;
  let gt = hi;
  const v = arr[lo];

  while (i <= gt) {
    if (arr[i] < v) exch(arr, animArr, i++, lt++);
    else if (arr[i] > v) exch(arr, animArr, i, gt--);
    else i++;
  }

  partition(arr, animArr, lo, lt - 1);
  partition(arr, animArr, gt + 1, hi);
};

const exch = (
  arr: number[],
  animArr: number[][],
  a: number,
  b: number
) => {
  animArr.push([a, b]);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};
