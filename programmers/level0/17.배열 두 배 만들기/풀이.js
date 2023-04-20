let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 100, -99, 1, 2, 3];

function solution(numbers) {
  /* map()은 배열 안의 값을 꺼내와 함수를 실행한 다음 새로운 배열을 반환함 */
  return numbers.map((value) => value * 2);
}

console.log(solution(arr));
console.log(solution(arr2));
