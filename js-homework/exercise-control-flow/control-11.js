// 삼각형 출력하기 - pattern 1

for (let i = 0; i < 5; i++) {
  let asterisk = '';
  for (let j = 0; j < i + 1; j++) {
    asterisk += '*';
  }
  console.log(asterisk);
}
