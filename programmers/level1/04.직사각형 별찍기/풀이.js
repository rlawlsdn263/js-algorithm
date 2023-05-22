function solution(n, m) {
  let s = "";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      s += "*";
    }
    s += "\n";
  }
  return s;
}

console.log(solution(5, 3));
