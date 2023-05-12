let my_string = "abcdef";
let letter = "f";

let my_string2 = "BCBdbe";
let letter2 = "B";

function solution(my_string, letter) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === letter) answer += "";
    else answer += my_string[i];
  }
  return answer;
}

console.log(solution(my_string, letter));
console.log(solution(my_string2, letter2));
