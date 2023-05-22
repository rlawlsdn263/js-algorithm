process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  //repeat을 사용하면 문자를 원하는 만큼 반복할 수 있다
  const row = "*".repeat(a);
  //반복문을 사용해 세로의 길이만큼 값을 반복한다
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
