let num_list = [2, 1, 6];
let n = 3;

let num_list2 = [5, 2, 1, 7, 5];
let n2 = 2;

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

console.log(solution(num_list, n));
console.log(solution(num_list2, n2));
