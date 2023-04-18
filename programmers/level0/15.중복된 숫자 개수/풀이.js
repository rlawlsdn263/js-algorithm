const array = [1, 1, 2, 3, 4, 5];
const n = 1;

const array2 = [0, 2, 3, 4];
const n2 = 1;

function solution(array, n) {
  let count = 0;
  array.forEach((value) => {
    if (value === n) {
      count++;
    }
  });
  return count;
}

console.log(solution(array, n));
console.log(solution(array2, n2));
