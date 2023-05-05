let my_string = "string";
let k = 3;

let my_string2 = "love";
let k2 = 10;

function solution(my_string, k) {
  let answer = "";
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}

console.log(solution(my_string, k));
console.log(solution(my_string2, k2));
