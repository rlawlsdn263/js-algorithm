function solution(array, n) {
  var answer = 0;
  // filter()로 새로운 배열을 만들고 값만 반환해도 됨
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
