let dot1 = [2, 4];
let dot2 = [-7, 9];

function solution(dot) {
  let x = dot[0];
  let y = dot[1];

  switch (true) {
    case x > 0 && y > 0:
      return 1;
    case x < 0 && y > 0:
      return 2;
    case x < 0 && y < 0:
      return 3;
    case x > 0 && y < 0:
      return 4;
    default:
      break;
  }
}

console.log(solution(dot1));
console.log(solution(dot2));
