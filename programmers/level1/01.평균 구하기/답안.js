function average(array) {
  // reduce()로 배열의 값을 전부 더 한 다음 길이로 나눴음
  return array.reduce((a, b) => a + b) / array.length;
}
