let n = 64;
let k = 6;

function solution(n, k) {
  return 12000 * n + 2000 * k - Math.floor(n / 10) * 2000;
}

console.log(solution(n, k));
