let numbers = [1, 2, 3, 4, 5];
let num1 = 1;
let num2 = 3;

let numbers2 = [1, 3, 5];
let num3 = 1;
let num4 = 2;

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution(numbers, num1, num2));
console.log(solution(numbers2, num3, num4));
