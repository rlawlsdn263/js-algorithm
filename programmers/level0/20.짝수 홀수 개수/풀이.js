let num_list1 = [1, 2, 3, 4, 5];
let num_list2 = [1, 3, 5, 7];

function solution(num_list) {
  let answer = [];
  let even = num_list.filter((value) => value % 2 === 0).length;
  let odd = num_list.filter((value) => value % 2 !== 0).length;
  answer = [even, odd];
  return answer;
}

console.log(solution(num_list1));
console.log(solution(num_list2));
