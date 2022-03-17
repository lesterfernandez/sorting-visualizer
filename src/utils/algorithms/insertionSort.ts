export const getInsertionSortAnims = (items: number[]) => {
  const newArr = [...items];
  const animArr: number[][] = [];
  for (let i = 1; i < newArr.length; i++) {
    let j = i;
    while (j > 0 && newArr[j] < newArr[j - 1]) {
      animArr.push([j - 1, j]);
      const tmp = newArr[j - 1];
      newArr[j - 1] = newArr[j];
      newArr[j] = tmp;
      j--;
    }
  }
  return { newArr, animArr };
};
