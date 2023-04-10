let s1 = "1 2 3 4";
let s2 = "-1 -2 -3 -4";
let s3 = "-1 -1";

function solution(s) {
  let answer = "";
  //문자열을 배열로 변환함
  let arr = s.split(" ");
  //전개 연산자로 배열을 풀어준 사람 Math.min과 Math.max로 최솟값과 최댓값을 찾음
  answer = `${Math.min(...arr)} ${Math.max(...arr)}`;
  return answer;
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
