function solution(n, k) {
  // 양의 정수 n을 k 진수로 변환
  const str = n.toString(k);

  // 변환한 문자열에서 0의 인덱스를 찾음
  const zeroIndexList = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') zeroIndexList.push(i);
  }

  // 찾아낸 인덱스로 해당하는 숫자들을 찾음
  const splitList = [];
  if (zeroIndexList.length) {
    splitList.push(str.substring(0, zeroIndexList[0]));
    for (let i = 0; i < zeroIndexList.length - 1; i++) {
      const start = zeroIndexList[i] + 1;
      const end = zeroIndexList[i + 1];
      const split = str.substring(start, end);
      if (split !== '') splitList.push(split);
    }
    const lastSplit = str.substring(
      zeroIndexList[zeroIndexList.length - 1] + 1,
    );
    if (lastSplit !== '') splitList.push(lastSplit);
  } else {
    splitList.push(str);
  }
  console.log(splitList);

  return splitList.reduce(
    (acc, cur) => (isPrime(parseInt(cur)) ? acc + 1 : acc),
    0,
  );
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//solution(437674, 3);
//solution(1000000, 10);
// solution(3, 10);

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (10.04ms, 32.7MB)
테스트 2 〉	통과 (0.13ms, 30.1MB)
테스트 3 〉	통과 (0.15ms, 30.1MB)
테스트 4 〉	통과 (0.13ms, 29.7MB)
테스트 5 〉	통과 (0.12ms, 30.1MB)
테스트 6 〉	통과 (0.12ms, 30MB)
테스트 7 〉	통과 (0.15ms, 30.1MB)
테스트 8 〉	통과 (0.14ms, 30.1MB)
테스트 9 〉	통과 (0.13ms, 30.3MB)
테스트 10 〉	통과 (0.15ms, 30.2MB)
테스트 11 〉	통과 (0.16ms, 30MB)
테스트 12 〉	통과 (0.11ms, 30.1MB)
테스트 13 〉	통과 (0.15ms, 30.1MB)
테스트 14 〉	통과 (0.12ms, 30MB)
테스트 15 〉	통과 (0.12ms, 30.1MB)
테스트 16 〉	통과 (0.12ms, 30MB)
채점 완료
 */
