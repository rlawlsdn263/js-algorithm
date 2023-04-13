const num1 = 11;
const num2 = 11;

function solution(num1, num2) {
  // 변수에 조건부로 값을 할당할 수 있음
  let answer = num1 === num2 ? 1 : -1;
  return answer;
}

console.log(solution(num1, num2));
