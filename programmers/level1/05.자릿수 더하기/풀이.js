let n = 123;
let n2 = 987;

function solution(n) {
  let s = String(n);

  let a = 0;
  for (let i = 0; i < s.length; i++) {
    a += parseInt(s[i]);
  }
  return a;
}

// console.log(solution(n));
// console.log(solution(n2));
console.log(123 % 10);
console.log((n = Math.floor(n / 10)));
console.log(123 / 10);
