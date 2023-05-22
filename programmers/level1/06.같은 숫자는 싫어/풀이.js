let arr = [1, 1, 3, 3, 0, 1, 1];
let arr2 = [4, 4, 4, 3, 3];

function solution(arr) {
  //1. 배열에서 첫 번째 숫자를 뽑아내서 변수에 담는다.
  //2. 뽑아낸 수를 배열의 값들과 비교한다.
  //3. 일치하지 않는 수가 나오면 변수에 새로운 값을 부여한다.
  //4. 같은 값이면 배열에 추가하고, 다른 값이면 변수에 할당하는 로직을 구현해야 한다.

  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution(arr));
console.log(solution(arr2));
