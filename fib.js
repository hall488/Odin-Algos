function fibI(n) {
  if (n == 1) return [0];

  let array = [0, 1];

  if (n == 2) return array;

  for (let i = 2; i < n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }

  return array;
}

//prettier-ignore
const fibR = (n, array = [0, 1]) => n === array.length ? array : fibR(n, [...array, array[array.length - 1] + array[array.length - 2]]);
