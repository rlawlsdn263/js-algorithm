const num_list = [1, 2, 3, 4, 5];

function solution(num_list) {
  // reduce()에서 초깃값을 배열로 산정하고 전개연산자로 추가하는 방법
  return num_list.reduce((a, b) => [b, ...a], []);
}

console.log(solution(num_list));
