function solution(cacheSize, cities) {
  const cacheQueue = new Array(cacheSize); // LRU - Queue로 구현
  let answer = 0;

  // 예외 => 캐시사이즈 0
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const index = cacheQueue.findIndex((c) => c === city);
    if (~index) {
      // cache hit
      answer++;
      // cache 제거
      cacheQueue.splice(index, 1);
    } else {
      // cache miss
      answer += 5;
    }

    // 캐시가 꽉찼다
    if (cacheQueue.length === cacheSize) {
      // 제일 사용되지 않은것을 뺌
      cacheQueue.shift();
    }

    // 캐시에 추가
    cacheQueue.push(city);
  }

  console.log(answer);
  return answer;
}

// 도시 검색 => 도시와, 맛집을 보여줌
// 성능 측정 => DB에서 오래걸렸다
// DB 캐시를 적용하여 개선 시도중
// 캐시 크기를 얼마로..?
// 캐시 hit => 1 , 캐시 miss => 5
// LRU

// solution(3, [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
// ]);

solution(3, [
  'Jeju',
  'Pangyo',
  'Seoul',
  'Jeju',
  'Pangyo',
  'Seoul',
  'Jeju',
  'Pangyo',
  'Seoul',
]);

/**
 * 2021-07-03
 * 예외 찾는 연습!
 * 근데 이렇게 찌잡하게 캐시 사이즈 0을 넣어놓다니
 * 문제도 잘읽는 사람을 원하는거야..?
 */
