let angle1 = 70;
let angle2 = 91;
let angle3 = 180;

function solution(angle) {
  switch (true) {
    case 0 < angle && angle < 90:
      return 1;
    case angle === 90:
      return 2;
    case 90 < angle && angle < 180:
      return 3;
    case angle === 180:
      return 4;
    default:
      break;
  }
}

console.log(solution(angle1));
console.log(solution(angle2));
console.log(solution(angle3));
