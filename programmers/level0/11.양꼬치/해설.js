function solution(n, k) {
  // 틸트(~~)를 사용하면 Math.floor처럼 소수점을 제거해줌
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
