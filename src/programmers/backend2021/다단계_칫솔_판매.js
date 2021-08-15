const sellerMap = new Map();

function solution(enroll, referral, seller, amount) {
  // 판매원은 추천인에게 다단계로 이익을 10%씩 준다
  // 최상위 referral 까지

  const NONE_REFER = '-';
  const ROOT_SELLER_NAME = 'center';
  const PROFIT_UNIT = 100;

  // root seller added
  sellerMap.set(ROOT_SELLER_NAME, {
    name: ROOT_SELLER_NAME,
    referName: null,
    profit: 0,
  });

  // normal seller added
  for (let i = 0; i < enroll.length; i++) {
    const name = enroll[i];
    const referName = referral[i]; // 추천인 이름

    const sellerObj = {
      name,
      referName: referName === NONE_REFER ? ROOT_SELLER_NAME : referName,
      profit: 0,
    };

    sellerMap.set(name, sellerObj);
  }

  // calculate profits
  for (let i = 0; i < seller.length; i++) {
    const sellerObj = sellerMap.get(seller[i]);
    const profit = amount[i] * PROFIT_UNIT;
    calculateProfit(sellerObj, profit);
  }

  const result = [];
  for (let i = 0; i < enroll.length; i++) {
    result.push(sellerMap.get(enroll[i]).profit);
  }

  console.log(result);

  return result;
}

function calculateProfit(sellerObj, profit) {
  const PARENT_PROFIT_RATIO = 0.1;

  // 추천인 seller obj를 찾는다
  const parentSellerName = sellerObj.referName;
  if (!parentSellerName) {
    // 추천인이 없다
    // 내가 이익금을 다 갖는다
    sellerObj.profit += profit;
    return;
  } else {
    const parentSellerObj = sellerMap.get(parentSellerName);
    const parentProfit = parseInt(profit * PARENT_PROFIT_RATIO);
    sellerObj.profit += profit - parentProfit;

    if (parentProfit === 0) {
      // 종료조건 추가
      // 재귀가 더 깊어지지 않도록
      // 10000 -> 1000 -> 100 -> 10 -> 1 최대 5단계를 넘어가지 않도록 조정한다
      return;
    }

    // 재귀를 이용하여 상위 추천인에게 계속해서 이익금을 분배한다
    calculateProfit(parentSellerObj, parentProfit);
  }
}

solution(
  ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
  ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
  ['young', 'john', 'tod', 'emily', 'mary'],
  [12, 4, 2, 5, 10],
);

/**
 * 2021-06-21
 * 재귀의 깊이가 너무 깊어지는듯 하다
 * 오류 발생!!
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.21ms, 29.8MB)
테스트 2 〉	통과 (0.47ms, 30.3MB)
테스트 3 〉	통과 (0.47ms, 30.3MB)
테스트 4 〉	통과 (0.56ms, 30.5MB)
테스트 5 〉	통과 (1.44ms, 30.4MB)
테스트 6 〉	통과 (6.49ms, 35.4MB)
테스트 7 〉	통과 (6.55ms, 35.2MB)
테스트 8 〉	통과 (8.97ms, 35.8MB)
테스트 9 〉	통과 (18.40ms, 36.8MB)
테스트 10 〉	통과 (85.18ms, 45.5MB)
테스트 11 〉	실패 (런타임 에러)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (런타임 에러)
채점 결과
정확성: 76.9
합계: 76.9 / 100.0
 */
