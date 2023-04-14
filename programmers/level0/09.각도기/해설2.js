function solution(angle) {
  /* 
    삼항조건문을 사용한 풀이
  */
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
