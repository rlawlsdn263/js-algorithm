/* process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(a);
  console.log(b);
});
 */

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
