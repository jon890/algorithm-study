const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/**
 * 백준
 * 그리디
 * 캠핑
 * 4796번
 */
function solution(l, p, v) {
  let answer = 0;

  answer += parseInt(v / p) * l;
  answer += Math.min(v % p, l);

  return answer;
}

let test = 1;
while (true) {
  const param = input();
  if (param === "0 0 0") {
    break;
  }

  const [l, p, v] = param.split(" ");
  console.log(
    `Case ${test}: ${solution(parseInt(l), parseInt(p), parseInt(v))}`
  );
  test++;
}
