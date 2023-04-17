let arr = [149, 180, 192, 170];
let height = 167;

let arr2 = [180, 120, 140];
let height2 = 190;

function solution(array, height) {
  let count = 0;
  array.forEach((v) => {
    if (v > height) count++;
  });
  return count;
}

console.log(solution(arr2, height2));
