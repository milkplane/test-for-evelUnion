const createRangeArray = (max: number) => {
  return Array.from(Array(max).keys())
}

const suffle = (sample: Array<number>) => {
  for (let i = sample.length - 1; i >= 0; i--) {
    const swapIndex = Math.floor(Math.random() * i);
    const temp = sample[swapIndex];
    sample[swapIndex] = sample[i];
    sample[i] = temp;
  }
}

export const getRandomRange = (max: number) => {
  const sample = createRangeArray(max);
  suffle(sample);

  return sample;
}