const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/**
 * 백준
 * 그리디
 * 카드 정렬하기
 * https://www.acmicpc.net/problem/1715
 *
 * => js 에선 priority queue (heap) 이 기본 컬렉션에 없다!!!
 */
function solution(cardList) {
  // 카드를 한 묶음으로 만들려면
  // 카드 두 묶음을 골라 합쳐나가야한다
  // 두 카드의 묶음의 갯수만큼 시간이 소요된다

  let answer = 0;
  let sum = 0;

  if (cardList.length > 1) {
    while (cardList.length > 1) {
      // 내림 차순으로 정렬
      cardList.sort((c1, c2) => c2 - c1);

      // 제일 작은 원소 두개를 합친다
      sum = cardList.pop() + cardList.pop();
      cardList.push(sum);
      answer += sum;
    }
    return answer;
  } else {
    return cardList[0];
  }
}

const cardCount = input();
const cards = [];
for (let i = 0; i < cardCount; i++) {
  cards.push(parseInt(input()));
}
console.log(solution(cards));
