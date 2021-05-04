function solution(expression) {
  const operators = ['+', '-', '*'];
  const usedOperators = new Set();
  const parsingList = [];
  let number = '';

  // 파싱
  for (let i = 0; i < expression.length; i++) {
    const character = expression[i];

    // 연산자 확인
    if (operators.includes(character)) {
      parsingList.push(number); // 파싱 배열에 숫자를 넣음
      number = ''; // 기록하고 있는 숫자 초기화
      parsingList.push(character); // 파싱 배열에 연산자를 넣음
      usedOperators.add(character); // 사용된 연산자 기록
    } else {
      // 숫자 확인
      number += character;
    }
  }
  parsingList.push(number); // 마지막 숫자도 넣어준다

  //   console.log(used_operators, parsed);
  // 사용된 연산자에 따라서 연산을 해보기
  // 연산자 우선순위 정하기
  const priorityOperatorList = permutator([...usedOperators]).map((array) =>
    array.map((operator, index) => ({ operator, priority: index })),
  );

  // 연산자에 우선순위를 부여한 배열들을 모두 돌면서 값을 구해본다
  const values = priorityOperatorList.map((operatorList) => {
    const newParsingList = [...parsingList];

    // 해당하는 연산자를 우선 계산 한다
    for (let i = 0; i < operatorList.length; i++) {
      const { operator } = operatorList[i];

      while (true) {
        const index = newParsingList.findIndex((v) => v === operator);

        // 해당 연산자가 있다면
        if (index > -1) {
          // 피연산자 값을 가져와서 계산한다
          const left = newParsingList[index - 1] * 1;
          const right = newParsingList[index + 1] * 1;
          const result = calculate(left, right, operator);

          // 리스트의 원소를 지우고, 결과값을 추가한다
          newParsingList.splice(index - 1, 3, result);
        } else {
          break;
        }
      }
    }

    return Math.abs(newParsingList);
  });

  return Math.max(...values);
}

const calculate = (left, right, op) => {
  switch (op) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
  }
};

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

solution('100-200*300-500+20');

/**
 * 2020-05-04 (37분)
 * 시간 초과과 되지 않을까 걱정 했는데 통과!
 * 순열 알고리즘은 인터넷을 참고했으니
 * 공부하기!!
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.42ms, 30.1MB)
테스트 2 〉	통과 (0.44ms, 30MB)
테스트 3 〉	통과 (0.51ms, 29.9MB)
테스트 4 〉	통과 (0.60ms, 29.9MB)
테스트 5 〉	통과 (0.68ms, 30.4MB)
테스트 6 〉	통과 (0.52ms, 30.2MB)
테스트 7 〉	통과 (0.57ms, 30MB)
테스트 8 〉	통과 (0.57ms, 30.2MB)
테스트 9 〉	통과 (0.50ms, 30.1MB)
테스트 10 〉	통과 (0.60ms, 30.2MB)
테스트 11 〉	통과 (0.59ms, 30.3MB)
테스트 12 〉	통과 (0.61ms, 30.5MB)
테스트 13 〉	통과 (0.66ms, 30.3MB)
테스트 14 〉	통과 (0.62ms, 29.9MB)
테스트 15 〉	통과 (0.63ms, 30.1MB)
테스트 16 〉	통과 (0.48ms, 30.4MB)
테스트 17 〉	통과 (0.48ms, 30.2MB)
테스트 18 〉	통과 (0.41ms, 30.2MB)
테스트 19 〉	통과 (0.45ms, 30MB)
테스트 20 〉	통과 (0.43ms, 30.2MB)
테스트 21 〉	통과 (0.44ms, 30MB)
테스트 22 〉	통과 (0.41ms, 29.8MB)
테스트 23 〉	통과 (0.38ms, 29.7MB)
테스트 24 〉	통과 (0.65ms, 30.1MB)
테스트 25 〉	통과 (0.65ms, 30.1MB)
테스트 26 〉	통과 (0.39ms, 30.2MB)
테스트 27 〉	통과 (0.57ms, 29.9MB)
테스트 28 〉	통과 (0.51ms, 30.1MB)
테스트 29 〉	통과 (0.49ms, 30MB)
테스트 30 〉	통과 (0.51ms, 30MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
