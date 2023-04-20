function solution(numbers, num1, num2) {
  var answer = [];

  // for반복문에서 num1을 시작점으로 잡고, num2를 끝지점으로 잡은 다음
  //push()를 사용해 배열에 값을 추가해주는 방법을 사용함
  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}
