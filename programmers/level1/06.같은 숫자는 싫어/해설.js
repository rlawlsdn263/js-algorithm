function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    //모든 값을 하나만 넣어야하기 때문에 불일치할 때 배열에 값을 추가한다
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
