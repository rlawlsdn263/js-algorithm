let arr = [1, 1, 3, 3, 0, 1, 1];
let arr2 = [4, 4, 4, 3, 3];

function solution(arr) {
  //filter의 두 번째 파라미터인 index를 활용해
  //현재 값과 index + 1의 값이 일치하지 않을 경우에만 true를 반환한다
  return arr.filter((val, index) => val !== arr[index + 1]);
}

console.log(solution(arr));
console.log(solution(arr2));
