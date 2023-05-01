function solution(m, n) {
  var answer = "";
  //반복문을 사용해 새로운 문자를 만들었다
  for (let i = 0; i < n; i++) {
    answer += m[i];
  }
  return answer;
}
