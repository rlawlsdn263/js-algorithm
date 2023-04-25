let strlist1 = ["We", "are", "the", "world!"];
let strlist2 = ["I", "Love", "Programmers."];

function solution(strlist) {
  return strlist.map((value) => value.length);
}

console.log(solution(strlist1));
console.log(solution(strlist2));
