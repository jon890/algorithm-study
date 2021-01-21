const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/**
 * 백준
 * 그리디
 * 거스름돈
 * @param {Number} money
 */
function solution(money) {
  const change_units = [500, 100, 50, 10, 5, 1];
  let change = 1000 - money;
  let count = 0;

  for (let i = 0; i < change_units.length; i++) {
    const add = parseInt(change / change_units[i]);
    count += add;
    change = change % change_units[i];
    if (change === 0) break;
  }

  return count;
}

const param = input();
const output = solution(param);
console.log(output);
