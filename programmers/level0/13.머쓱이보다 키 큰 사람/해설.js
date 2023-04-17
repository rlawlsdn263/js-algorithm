function solution(array, height) {
  // filter()를 사용해 조건에 맞는 새로운 배열을 만듦
  var answer = array.filter((item) => item > height);
  //새로 만든 배열의 길이를 반환함
  return answer.length;
}
