function solution(relation) {
  const attributesCount = relation[0].length; // 속성 갯수
  const keys = [];

  for (let keyCount = 1; keyCount <= attributesCount; keyCount++) {
    // 키의 조합을 만들어 낸다
    const source = getArray(attributesCount);
    const keyCombinationList = combinationArray(source, keyCount);

    // 조합으로 검사한다
    keyCombinationList
      .filter((values) => {
        // 최소성을 만족하는 키만 검사
        // 1, 2 라는 후보키가 있다면 1, 2를 동시에 갖는 키는 후보키가 아님
        // 1, 3, 4나 2, 3, 4는 후보키가 될수 있음!!
        for (const key of keys) {
          if (containsAll(key, values)) {
            return false;
          }
        }
        return true;
      })
      .forEach((values) => {
        // 유일성 검사
        // js의 set은 객체로써 동등성을 검사할수 없으므로
        // 원시값으로 만들어서 검사해야한다
        const tupleSet = new Set();

        // value에 해당하는 값만 추출
        relation.forEach((tuple) => {
          let newTuple = '';
          for (let column of values) {
            newTuple += tuple[column] + '_';
          }
          tupleSet.add(newTuple);
        });

        if (tupleSet.size === relation.length) {
          keys.push(values);
        }
      });
  }

  console.log(keys);
  return keys.length;
}

function getArray(count) {
  const array = Array(count);
  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }
  return array;
}

function containsAll(compareArray, targetArray) {
  let flag = true;

  // c array의 모든값을
  // t array가 포함하는가?
  for (const v of compareArray) {
    if (!targetArray.includes(v)) {
      flag = false;
      break;
    }
  }

  return flag;
}

function combinationArray(array, count) {
  if (!Array.isArray(array)) return;
  if (array.length === 0) return;
  if (count <= 0) return;

  const result = [];

  function combination(source, target, n, r, index) {
    if (r === 0) result.push(target);
    else if (n === 0 || n < r) return;
    else {
      target.push(source[index]);
      combination(source, Object.assign([], target), n - 1, r - 1, index + 1);
      target.pop();
      combination(source, Object.assign([], target), n - 1, r, index + 1);
    }
  }

  combination(array, [], array.length, count, 0);
  return result;
}

solution([
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
]);

/**
 * 2021-06-26
 * 
 * 조합, 비트마스킹(공부해야할 것)
 * 최소키, js에서 object를 set의 원소로 활용하기
 * 2단계인데도 정말 많은 기법이 사용되는듯 하다
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.55ms, 30.1MB)
테스트 2 〉	통과 (0.48ms, 30.1MB)
테스트 3 〉	통과 (0.49ms, 29.9MB)
테스트 4 〉	통과 (0.50ms, 30MB)
테스트 5 〉	통과 (0.32ms, 30.3MB)
테스트 6 〉	통과 (0.31ms, 30.2MB)
테스트 7 〉	통과 (0.25ms, 29.8MB)
테스트 8 〉	통과 (0.34ms, 30.1MB)
테스트 9 〉	통과 (0.57ms, 30.1MB)
테스트 10 〉	통과 (0.58ms, 30MB)
테스트 11 〉	통과 (0.72ms, 30.1MB)
테스트 12 〉	통과 (2.35ms, 30.3MB)
테스트 13 〉	통과 (0.88ms, 30.2MB)
테스트 14 〉	통과 (0.49ms, 30.1MB)
테스트 15 〉	통과 (0.53ms, 30.1MB)
테스트 16 〉	통과 (0.34ms, 29.8MB)
테스트 17 〉	통과 (0.49ms, 30.1MB)
테스트 18 〉	통과 (1.85ms, 30.2MB)
테스트 19 〉	통과 (2.10ms, 29.9MB)
테스트 20 〉	통과 (2.41ms, 30.5MB)
테스트 21 〉	통과 (6.40ms, 33.4MB)
테스트 22 〉	통과 (6.72ms, 33MB)
테스트 23 〉	통과 (0.51ms, 30MB)
테스트 24 〉	통과 (1.90ms, 30MB)
테스트 25 〉	통과 (1.94ms, 30.3MB)
테스트 26 〉	통과 (4.28ms, 33.3MB)
테스트 27 〉	통과 (0.84ms, 30.1MB)
테스트 28 〉	통과 (1.17ms, 30MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
