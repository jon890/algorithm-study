const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(weights) {
  // 오름차순으로 정렬
  weights.sort((a, b) => a - b);

  // 잴수 없는 무게를 어떻게 확인할까..?
  let i = 1;
  let check = false;
  while (true) {
    // 배열에 해당 양의 정수가 있는지 확인
    check = weights.includes(i);

    if (!check) {
      // 배열의 원소를 잘 빼서 0을 만들 수 있는지 확인 => 0 이면 무게를 잴 수 있다는 의미
      // 제일 근사한 값을 찾아서 계속 빼주자
      let temp = i;
      let temp2 = temp - 1;
      while (temp > 0) {
        let exist = weights.includes(temp2);

        if (exist) {
          temp -= temp2;
        }
        temp2--;
      }

      if (temp === 0) check = true;
    }

    if (check) {
      console.log(`${i}를 잴 수 있다`);
      i++;
      continue;
    } else {
      break;
    }
  }

  return i;
}

const count = input();
const units = [];
for (let i = 0; i < count; i++) {
  units.push(parseInt(input()));
}
console.log(solution(units));
