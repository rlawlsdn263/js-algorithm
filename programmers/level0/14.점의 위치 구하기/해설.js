function solution(dot) {
  // 구조분해할당으로 배열을 나눠줌
  const [num, num2] = dot;
  //check는 true 혹은 false를 갖음
  const check = num * num2 > 0;
  //중복되는 경우의 수를 최소화해서 값을 구함
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
