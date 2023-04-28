let a = 2;
let b = 4;

function solution(a, b) {
  if (a % 2 && b % 2) {
    return a ** 2 + b ** 2;
  } else if (a % 2 || b % 2) {
    return 2 * (a + b);
  } else if (!(a % 2) && !(b % 2)) {
    return Math.abs(a - b);
  }
}

console.log(solution(a, b));
