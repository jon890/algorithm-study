const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numArray) {
  // 음수가 존재하는지 확인 -> 음수끼리는 음수끼리 곱해야 크게 나온다
  const positiveArray = numArray.filter((num) => num > 0);
  const negaitveArray = numArray.filter((num) => num < 0);

  // 0이라는 존재가 있을경우 예외가 생긴다
  // 0과 음수가 홀수개일 경우 음수두개씩 묶고 제일 작은 음수를 무시할수 있음
  // 0과 음수가 짝수개일 경우 음수두개씩 묶어서 더해주는게 이득
  const hasZero = numArray.includes(0);

  let sum = 0;

  // 내림차순으로 정렬
  positiveArray.sort((a, b) => b - a);
  let i = 0;
  while (i < positiveArray.length) {
    const a = positiveArray[i];
    const b = positiveArray[++i];

    if (b) {
      if (a === 1 || b === 1) {
        // a 혹은 b 가 1이라면 묶으면 더 작아짐
        sum += a + b;
      } else {
        sum += a * b;
      }
    } else {
      sum += a;
    }

    i++;
  }

  // 오름차순으로 정렬
  negaitveArray.sort((a, b) => a - b);
  let j = 0;
  while (j < negaitveArray.length) {
    const a = negaitveArray[j];
    const b = negaitveArray[++j];

    if (b) {
      sum += a * b;
    } else {
      if (hasZero) {
        // 0이 존재할 경우 0과 음수하나를 곱해서 제거 시킬수 있음
      } else {
        sum += a;
      }
    }

    j++;
  }

  return sum;
}

const count = input();
const array = [];
for (let i = 0; i < count; i++) {
  array.push(parseInt(input()));
}
console.log(solution(array));
