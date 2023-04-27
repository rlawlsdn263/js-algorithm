let number = 55;
let n = 10;
let m = 5;

function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) return 1;
  else return 0;
}

console.log(solution(number, n, m));
