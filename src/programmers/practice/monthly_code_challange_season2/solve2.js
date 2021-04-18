function solution(s) {
  let answer = 0;

  // s를 회전시켜 올바른 괄호 문자열인지 판단
  for (let i = 0; i < s.length - 1; i++) {
    let str;
    if (i === 0) {
      str = s;
    } else {
      str = s.substring(i, s.length) + s.substring(0, i);
    }

    if (isRight(str)) {
      answer++;
    }
  }
  return answer;
}

function isRight(string) {
  // 시작 괄호 문자
  const start = ["(", "{", "["];

  // 종료 괄호 문자
  const end = [")", "}", "]"];

  // 짝을 이루는것
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const opened = [];
  for (let i = 0; i < string.length; i++) {
    const ch = string.charAt(i);

    // 시작 괄호 문자인지 종료 괄호 문자인지 판단
    const isStart = start.includes(ch);
    const isEnd = end.includes(ch);

    if (isStart) {
      opened.push(ch);
      continue;
    }

    if (isEnd) {
      const lastCh = opened[opened.length - 1];
      const lastPair = pair[lastCh];
      if (ch === lastPair) {
        // 제일 마지막에 열린 괄호가 닫혔는지 확인
        opened.pop();
      } else {
        return false;
      }
    }
  }

  // 괄호가 열린상태로 종료되면 false
  return opened.length > 0 ? false : true;
}

solution("}]()[{");
