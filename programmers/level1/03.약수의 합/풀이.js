let n = 12;
let n2 = 5;

function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    /* 
      약수는 나누어 떨어지는 수이기 때문에 나머지 연산자로
      나머지가 0이 되는 수를 찾으면 된다 
    */
    if (num % i === 0) sum += i;
  }
  return sum;
}

console.log(solution(n));
console.log(solution(n2));
