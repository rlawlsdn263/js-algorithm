function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    // 나머지 연산자를 하면 0 혹은 1이 나온다
    // 연산을 인덱스에 바로 활용함으로 바로 짝수, 홀수를 증가시킴
    answer[a % 2] += 1;
  }

  return answer;
}
