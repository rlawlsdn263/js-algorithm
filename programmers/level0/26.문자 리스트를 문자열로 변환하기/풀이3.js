let arr = ["a", "b", "c"];

function solution(arr) {
  return arr.reduce((pre, cur) => pre + cur, "");
}

console.log(solution(arr));
