let angle1 = 70;
let angle2 = 91;
let angle3 = 180;

function solution(angle) {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}

console.log(solution(angle1));
console.log(solution(angle2));
console.log(solution(angle3));
