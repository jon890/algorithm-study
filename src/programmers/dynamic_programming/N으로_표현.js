function solution(N, number) {
  /**
   * N으로 number를 최소로 사용해서 표현하는법
   * 8개가 넘어가면 -1을 리턴
   *
   * 1개를 사용해서 만들 수 있는 수
   * => 5
   *
   * 2개를 사용해서 만들 수 있는 수
   * => 55 (나열)
   * => 5 + 5 = 10, 5 - 5 = 0, 5 * 5 = 25, 5 / 5
   * => 10 , 0, 25, 1
   * => 55 (나열) U ((1개를 사용해서 만든 수) 사칙연산 (1개를 사용해서 만든 수)
   *
   * 3개를 사용해서 만들 수 있는 수
   * => 555 (나열)
   * => 1개 사칙 2개
   * => 2개 사칙 1개 => 순서에 따라 결과가 다름
   *
   * 4개를 사용해서 만들 수 있는 수
   * => 5555 (나열)
   * => 1 사칙 3
   * => 2 사칙 2
   * => 3 사칙 1
   *
   * n개를 사용해서 만들 수 있는 수
   * => NNNN...N (나열)
   * => 1 사칙 n - 1
   * => 2 사칙 n - 2
   * ...
   * => n -1 사칙 1
   */

  if (N === number) {
    return 1;
  }

  let answer = -1;

  // set list 초기화
  const setList = [];
  for (let i = 0; i < 8; i++) {
    setList.push(new Set());
  }

  // NNNNN..N 을 넣기
  setList.forEach((set, index) => {
    let stringN = N + '';
    let result = '';
    for (let i = 0; i <= index; i++) {
      result += stringN;
    }
    set.add(parseInt(result));
  });

  // 연산을 해서 나온 결과를 추가하기
  for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      // K 번째와 N - K - 1번째를 연산해서 결과를 추가
      setList[j].forEach((op1) => {
        setList[i - j - 1].forEach((op2) => {
          setList[i].add(op1 + op2);
          setList[i].add(op1 - op2);
          setList[i].add(op1 * op2);

          if (op2 != 0) {
            setList[i].add(parseInt(op1 / op2));
          }
        });
      });
    }

    if (setList[i].has(number)) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

solution(5, 12);

/**
 * 2021-05-18
 * 최대 가능한 행위 수에 맞춰서
 * 그 전 결과를 활용해 다음결과를 만들어 내는 dp 문제였다.
 * 아이디어가 떠오르지 않아서
 * 풀이를 참조했는데 풀이가 참 신박하다.
 * 
 * a1을 1이라는 수를 만드는 방법의 수로 생각을 접근했었지만
 * a1을 N이라는 수를 1번 사용해서 만들 수 있는 수로 접근을 하는것이었다.
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.38ms, 30.4MB)
테스트 2 〉	통과 (0.25ms, 30MB)
테스트 3 〉	통과 (0.26ms, 30MB)
테스트 4 〉	통과 (14.94ms, 34.5MB)
테스트 5 〉	통과 (12.47ms, 33.7MB)
테스트 6 〉	통과 (0.69ms, 30.4MB)
테스트 7 〉	통과 (0.51ms, 30.4MB)
테스트 8 〉	통과 (14.73ms, 34.7MB)
테스트 9 〉	통과 (0.13ms, 29.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
