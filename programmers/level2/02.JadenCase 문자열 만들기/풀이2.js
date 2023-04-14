let s1 = "3people unFollowed me";
let s2 = "for the last week";
let s3 = "for  the last week";

function solution(s) {
  /* 
    1. s.toLowerCase()로 모든 문자를 소문자로 바꿈
    2. split(" ")을 사용해 띄어쓰기를 기준으로 배열을 만듦
    3. map()으로 배열의 요소들을 하나씩 꺼내오고
    4. chatAt(0).toUppercase()로 첫 문자를 대문자로 만들고
    5. slice(1)로 첫 글자 이외의 문자열을 가져와 둘을 합쳐줌
    6. join(" ")로 나뉘어졌던 배열을 다시 문자열로 되돌림
  */
  return s
    .toLowerCase()
    .split(" ")
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(" ");
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
