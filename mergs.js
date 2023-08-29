//prettier-ignore
const merge = (one, two) => {
    let array = [];
    
    for(;;) {

        array.push(one[0] < two[0] ? one.shift() : two.shift());

        if(!one.length || !two.length) break;
    }

    return [...array, ...one, ...two];
}

const mergeSort = (array) => {
  if (array.length == 1) return array;

  let cut = Math.ceil(array.length / 2);
  let one = mergeSort(array.slice(0, cut));
  let two = mergeSort(array.slice(cut));

  return merge(one, two);
};

const randArray = (n) => {
  let count = [];
  let array = [];

  for (let i = 0; i < n; i++) {
    count.push(i + 1);
  }

  for (let i = 0; i < n; i++) {
    let rand = Math.floor(Math.random() * count.length);
    array.push(count.splice(rand, 1)[0]);
  }

  return array;
};

let ra = randArray(50);
console.log(ra);
console.log(mergeSort(ra));
