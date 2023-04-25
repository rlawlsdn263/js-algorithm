function solution(num_list) {
  return [
    //배열에 곧바로 filter()의 길이를 반환함
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
