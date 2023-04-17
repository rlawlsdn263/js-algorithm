function solution(dot) {
  // dot[0]이 true면 dot[1]을 확인해 비교함
  // dot[0]이 false면 dot[1]과 확인해 비교함
  //결과적으로는 네 가지 경우의 수를 전부 파악함
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}
