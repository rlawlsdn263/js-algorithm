/* 정확도 문제로 탈락 */

let s1 = "3people unFollowed me";
let s2 = "for the last week";

function solution(s) {
  let answer = "";
  //split으로 문자를 배열로 나눔
  let arr = s.split(" ").map((item) => {
    //각 요소를 toLowerCase()로 소문자로 만듦
    let lower = item.toLowerCase();
    //문자열은 불변하기 때문에 문자열 요소를 배열로 만듦
    let arr = lower.split("");
    //배열로 만든 문자열의 0번 인덱스값을 toUpperCase()로 대문자로 만듦
    arr[0] = arr[0].toUpperCase();
    //join()으로 배열을 합쳐줌으로써 JadenCase를 만듦
    return arr.join("");
  });
  //배열을 join()으로 문자열로 만듦
  answer = arr.join(" ");

  return answer;
}

console.log(solution(s1));
console.log(solution(s2));
