function solution(numbers) {
  let answer = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      // 짝수인경우 _______0 으로 끝나기 때문에
      // +1을 해주면 된다
      answer.push(number + 1);
    } else {
      // 홀수인경우
      // 가장 마지막에 나타나는 0을 1로 바꾸고
      // 그다음을 0으로 바꾼다
      const binaryString = '0' + number.toString(2);
      const lastZeroIndex = binaryString.lastIndexOf('0');
      const convert =
        binaryString.substring(0, lastZeroIndex) +
        '10' +
        binaryString.substring(lastZeroIndex + 2);
      answer.push(parseInt(convert, 2));
    }
  });

  return answer;
}

console.log(solution([2, 7]));

/**
 * 2021-06-28
 * 규칙성 찾는 연습이 더 필요!!
 * 못 찾아서 인터넷을 참고했당..
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.48ms, 30.6MB)
테스트 2 〉	통과 (47.27ms, 45.4MB)
테스트 3 〉	통과 (0.19ms, 30.2MB)
테스트 4 〉	통과 (0.64ms, 30.4MB)
테스트 5 〉	통과 (0.81ms, 30.4MB)
테스트 6 〉	통과 (0.77ms, 30.5MB)
테스트 7 〉	통과 (117.67ms, 51.2MB)
테스트 8 〉	통과 (114.30ms, 51.2MB)
테스트 9 〉	통과 (102.14ms, 51.7MB)
테스트 10 〉	통과 (195.83ms, 54.2MB)
테스트 11 〉	통과 (166.89ms, 55.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
