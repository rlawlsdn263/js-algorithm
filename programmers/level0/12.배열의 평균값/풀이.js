let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

function solution(numbers) {
  let length = numbers.length;
  /* toFixed()를 사용하면  */
  return (numbers.reduce((acc, cur) => acc + cur, 0) / length).toFixed(1);
}

console.log(solution(arr));
console.log(solution(arr2));
