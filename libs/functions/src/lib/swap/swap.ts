export const swap = (array: number[], i: number, j: number) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
