const num_list = [1, 2, 3, 4, 5];
const num_list2 = [5, 3, 1, 1, 1, 0, 1];

function solution(num_list) {
  //sort()에서 -1을 반환하면 모든 요소가 역순으로 정렬된다
  //콜백함수에서 -1을 반환하면 1번 인수 a가 2번 인수 b보다 작다고 판단되기 때문이다.
  return num_list.sort((a, b) => -1);
}

console.log(solution(num_list2));
