const num1 = 3;
const num2 = 4;

function solution(num) {
  var answer = "";
  // 삼항연산식을 활용해 num이 0으로 나뉘어지면 짝수, 아니라면 홀수를 반환함
  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  return answer;
}

console.log(solution(num1));
console.log(solution(num2));
