function solution(array, height) {
  let result = 0;
  /* 
   논리 AND연산자는 첫 번째 피연산자가 falsy면 첫 연산자를 반환한다
   첫 번째 피연산자가 truthy면 두 번째 피연산자를 반환하다 
  */
  array.map((arr) => height < arr && result++);

  return result;
}
