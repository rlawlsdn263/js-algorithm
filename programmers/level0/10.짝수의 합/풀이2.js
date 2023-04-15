function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    // i가 2로 나뉘어지면 짝수이니 더해준다
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}
