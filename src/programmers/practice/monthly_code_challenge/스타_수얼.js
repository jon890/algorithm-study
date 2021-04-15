function solution(a) {
  // 숫자들의 갯수를 카운트할 맵 선언
  const map = new Map();

  // 숫자들을 맵에 담기
  a.forEach((v) => {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  });

  // 값에 따라 map을 sort하고 array로 변환
  const sorted = [...map.entries()].sort((e1, e2) => e2[1] - e1[1]);
  //   console.log(sorted);

  // 제일 많은 원소를 사용할때가 제일 크다..
  const [_, mostAmountElements] = sorted.shift();
  const remainElements = sorted.reduce((acc, cur) => acc + cur[1], 0);

  //   console.log(mostAmountElement, remainElements);

  return remainElements > mostAmountElements
    ? mostAmountElements * 2
    : remainElements * 2;
}

solution([0, 3, 3, 0, 7, 2, 0, 2, 2, 0]);
