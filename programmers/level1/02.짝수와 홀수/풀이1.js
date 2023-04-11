const num1 = 3;
const num2 = 4;

function solution(num) {
  var answer = "";
  // num이 0으로 나뉘어지면 짝수, 아니라면 홀수를 반환함
  if (num % 2 === 0) answer = "Even";
  else answer = "Odd";
  return answer;
}

console.log(solution(num1));
console.log(solution(num2));
