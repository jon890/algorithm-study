function solution(numbers) {
  const answer = [];
  numbers.forEach((x) => {
    let y = x + 1;

    while (true) {
      if (check(x, y)) break;
      y++;
    }
    answer.push(y);
  });
  return answer;
}

function check(x, y) {
  let xBinaryString = x.toString(2);
  const yBinaryString = y.toString(2);
  const length = yBinaryString.length;

  // string 길이 보정
  // 길이가 안맞다면 xBinaryString의 앞에 0을 채워넣는다
  if (xBinaryString.length !== length) {
    for (let i = 0; i < length - xBinaryString.length; i++) {
      xBinaryString = '0' + xBinaryString;
    }
  }

  let count = 0;
  for (let i = length - 1; i >= 0; i--) {
    if (xBinaryString[i] !== yBinaryString[i]) {
      count++;
    }

    if (count > 2) {
      break;
    }
  }

  return count <= 2;
}

console.log(solution([2, 7]));

/**
 * 2020-06-26
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (6.76ms, 32.9MB)
테스트 2 〉	통과 (370.35ms, 50.1MB)
테스트 3 〉	통과 (0.91ms, 30.4MB)
테스트 4 〉	통과 (6.61ms, 33MB)
테스트 5 〉	통과 (14.67ms, 33.8MB)
테스트 6 〉	통과 (15.76ms, 32.9MB)
테스트 7 〉	통과 (1444.04ms, 53.7MB)
테스트 8 〉	통과 (891.35ms, 53.4MB)
테스트 9 〉	통과 (1183.11ms, 53.1MB)
테스트 10 〉	실패 (시간 초과)
테스트 11 〉	실패 (시간 초과)
채점 결과
정확성: 81.8
합계: 81.8 / 100.
 */
