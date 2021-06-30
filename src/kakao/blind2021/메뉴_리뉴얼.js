function solution(orders, course) {
  const foodSet = new Set();
  const foodList = [];
  const answer = [];

  // 주문을 확인하여 음식 종류 집합에 담는다
  orders.forEach((order) => {
    for (const food of order) foodSet.add(food);
  });

  // 조합을 하기 위해서 Array로 변환한다
  foodList.push(...foodSet);

  course.forEach((number) => {
    // 중복된 메뉴가 number 개인 조합을 찾는다
    const combinationList = combinationArray(foodList, number);
    // 후보 코스메뉴를 담을 배열
    let candidate = [];

    combinationList.forEach((combination) => {
      // 해당 원소가 모두 포함된 주문이 2개 이상인지 확인
      let count = 0;
      for (const order of orders) {
        if (check(combination, order)) count++;
      }

      if (count >= 2) {
        candidate.push({ key: combination.sort().join(''), value: count });
      }
    });

    if (candidate.length > 1) {
      candidate.sort((a, b) => b.value - a.value);
      const maxValue = candidate[0].value;
      for (const item of candidate) {
        if (item.value === maxValue) answer.push(item.key);
        else break;
      }
    } else if (candidate.length === 1) {
      answer.push(candidate[0].key);
    }
  });

  answer.sort();
  return answer;
}

function check(combination, order) {
  let count = 0;
  for (const food of combination) {
    if (~order.indexOf(food)) {
      count++;
    }
  }
  return count === combination.length;
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

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);

/**
 * 2021-06-30
 * 1시간 => 55점
 * +15분 => 85점
 */
