let num_list1 = [1, 2, 3, 4, 5];
let num_list2 = [1, 3, 5, 7];

function solution(num_list) {
  let answer = [0, 0];
  num_list.forEach((value) => {
    if (value % 2 === 0) answer[0]++;
    else answer[1]++;
  });
  return answer;
}

console.log(solution(num_list1));
console.log(solution(num_list2));
