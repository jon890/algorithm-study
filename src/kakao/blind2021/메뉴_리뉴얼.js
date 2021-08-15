function solution(orders, course) {
  const foodMap = new Map(); // 코스메뉴와 몇번 주문된 카운트 기록
  const courseLengthMaxOrderCountMap = new Map();
  const answer = [];

  orders.forEach((order) => {
    const orderArray = order.split('');

    course.forEach((number) => {
      // 이 주문으로 만들 수 있는 조합을 찾는다
      const combinationList = combinationArray(orderArray, number);

      combinationList.forEach((combination) => {
        // 해당 조합을 사전순으로 정렬한다
        // 그리고 합친다
        const key = combination.sort().join('');

        // 코스메뉴 후보에 등록한다
        let value = !foodMap.has(key) ? 1 : foodMap.get(key) + 1;
        foodMap.set(key, value);

        // 코스메뉴의 길이와 최대주문횟수를 기록한다
        let maxValue = Math.max(
          courseLengthMaxOrderCountMap.get(key.length) || 0,
          value,
        );
        courseLengthMaxOrderCountMap.set(key.length, maxValue);
      });
    });
  });

  return Array.from(foodMap.entries())
    .filter(([key, value]) => {
      if (value < 2) return false;
      if (value === courseLengthMaxOrderCountMap.get(key.length)) return true;
    })
    .map(([key]) => key)
    .sort();
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

// console.log(
//   solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]),
// );

console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));

/**
 * 2021-06-30
 * 1시간 => 55점
 * +15분 => 85점
 */
