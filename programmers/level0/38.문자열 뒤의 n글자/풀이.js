let my_string = "ProgrammerS123";
let n = 11;

let my_string2 = "He110W0r1d";
let n2 = 5;

let my_string3 = "닌텐도 스위치 사고 싶어";
let n3 = 9;

function solution(my_string, n) {
  return my_string.slice(-n);
}

console.log(solution(my_string, n));
console.log(solution(my_string2, n2));
console.log(solution(my_string3, n3));
