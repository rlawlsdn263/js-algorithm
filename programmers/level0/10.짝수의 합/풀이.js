let n1 = 10;
let n2 = 4;

function solution(n) {
  let sum = 0;
  // 조건문의 3번째는 반복실행되는 코드인 점을 활용함
  for (let i = 2; i <= n; i = i + 2) {
    sum += i;
  }
  return sum;
}

console.log(solution(n1));
console.log(solution(n2));
