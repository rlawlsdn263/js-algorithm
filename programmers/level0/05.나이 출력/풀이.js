function solution(age) {
  /* 
    태어난 해에 +1이 되기 떄문에
    올해 - 나이를 하면 태어난 해에 -1의 값을 받는다 
    그래서 올해 - 나이를 한 다음 +1을 해야한다
  */
  return 2022 - age + 1;
}

console.log(solution(40));
console.log(solution(23));
