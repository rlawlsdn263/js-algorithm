let arr = [1, 2, 3, 100, 99, 98];
let k = 3;

let arr2 = [1, 2, 3, 100, 99, 98];
let k2 = 2;

function solution(arr, k) {
  if (k % 2) {
    return arr.map((item) => item * k);
  } else {
    return arr.map((item) => item + k);
  }
}

console.log(solution(arr, k));
console.log(solution(arr2, k2));
