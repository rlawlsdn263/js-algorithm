let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution(numbers) {
  let length = arr.length;
  return numbers.reduce((acc, cur) => acc + cur, 0) / length;
}

console.log(solution(arr));
