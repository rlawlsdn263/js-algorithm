let n = 12;
let n2 = 5;

function solution(n) {
  let sum = 0;
  // 이중배열로 두 값을 곱해 n이 되는 값들을 구했음
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j === n) {
        sum += i;
      }
    }
  }
  return sum;
}

console.log(solution(n));
console.log(solution(n2));
