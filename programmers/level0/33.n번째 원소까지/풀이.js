let num_list = [2, 1, 6];
let n = 1;

let num_list2 = [5, 2, 1, 7, 5];
let n2 = 3;

function solution(num_list, n) {
  // Array.slice()를 사용하면 a부터 b까지의 값을 반환할 수 있음
  return num_list.slice(0, n);
}

console.log(solution(num_list, n));
console.log(solution(num_list2, n2));
