let arr = ["a", "b", "c"];

function solution(arr) {
  let answer = "";
  arr.forEach((value) => (answer += value));
  return answer;
}

console.log(solution(arr));
