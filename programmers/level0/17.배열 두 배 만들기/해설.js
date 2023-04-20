let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 100, -99, 1, 2, 3];

function solution(numbers) {
  // reduce()는 1번 인자는 총합이고, 2번 인자는 현재의 값이다
  //콜백함수 뒤에는 초깃값을 []로 지정해줬다
  //배열에 값을 더하게 하기 위해 1번 인자를 전개 연산자로 풀어서 넣어준느 방식으로 했다.
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

console.log(solution(arr));
console.log(solution(arr2));
