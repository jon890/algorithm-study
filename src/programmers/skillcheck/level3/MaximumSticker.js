function solution(sticker) {
  var answer = 36;

  // 뜯어낸 스티커의 최댓 값 구하기
  // 최대.. greedy?

  // 총 뜯어낼 수 있는 최대 스티커의 수
  const maximumSticker = parseInt(sticker.length / 2);
  //   console.log(maximumSticker);

  const indexIsEven = sticker.filter((_, index) => index % 2 === 0); // 인덱스가 짝수인 것 분리
  const indexIsOdd = sticker.filter((_, index) => index % 2 === 1); // 인덱스가 홀수인 것 분리

  // 경우 분리
  // 스티커의 총 갯수가 홀 수 이면
  if (sticker.length % 2 !== 0) {
    let exceedArray;
    if (indexIsEven.length > maximumSticker) {
      exceedArray = indexIsEven;
    }

    if (indexIsOdd.length > maximumSticker) {
      exceedArray = indexIsOdd;
    }

    if (exceedArray) {
      exceedArray.sort((a, b) => b - a);
      exceedArray.pop();
    }
  }

  const evenSum = indexIsEven.reduce((acc, cur) => acc + cur, 0);
  const oddSum = indexIsOdd.reduce((acc, cur) => acc + cur, 0);
  console.log(evenSum, oddSum);
  return Math.max(evenSum, oddSum);
}

solution([14, 6, 5, 11, 3, 9, 2, 10]);
solution([1, 3, 2, 5, 4]);
