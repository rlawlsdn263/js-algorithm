let arr1 = [1, 2, 3, 4];
let arr2 = [5, 5];

function solution(arr) {
  let count = 0;
  let length = arr.length;

  // forEach로 배열의 요소를 가져오면 count에 값을 더해주게 함
  arr.forEach((item) => {
    count += item;
  });

  //더해준 값을 배열의 길이를 담은 length로 나눠줌
  return count / length;
}

console.log(solution(arr1));
console.log(solution(arr2));
