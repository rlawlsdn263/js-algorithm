//map의 콜백함수 안에서 조건문을 작성할 수 있음
const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));
