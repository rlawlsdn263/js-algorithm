function solution(angle) {
  /* 
    filter()가 조건이 참인 값만 담긴 배열을 반환한다는 점에 착안해
    x의 값이 angle보다 작거나 같은 것만 반환한 배열의 길이로 답을 구함
  */
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
