function solution(fees, records) {
  // declare const variable
  const ACTION_CAR_IN = 'IN';
  const ACTION_CAR_OUT = 'OUT';
  const LAST_TIME = '23:59';

  let [baseParkingTime, baseCost, perTime, perCost] = fees;
  const BASE_PARKING_TIME = parseInt(baseParkingTime);
  const BASE_COST = parseInt(baseCost);
  const PER_TIME = parseInt(perTime);
  const PER_COST = parseInt(perCost);

  const carInMap = new Map();
  const carTimeMap = new Map();

  records.forEach((record) => {
    const [time, carId, action] = record.split(' ');

    if (action === ACTION_CAR_IN) {
      carInMap.set(carId, time);
    } else if (action === ACTION_CAR_OUT) {
      const carInTime = carInMap.get(carId);
      const parkingTime = diffMinute(carInTime, time);

      carTimeMap.set(
        carId,
        carTimeMap.has(carId)
          ? carTimeMap.get(carId) + parkingTime
          : parkingTime,
      );

      // 해당 차를 들어온 기록에서 지운다
      // 남은 마지막까지 처리되지 않은 기록은 23:50분에 출차됨
      carInMap.delete(carId);
    }
  });

  carInMap.forEach((carInTime, carId) => {
    const parkingTime = diffMinute(carInTime, LAST_TIME);
    carTimeMap.set(
      carId,
      carTimeMap.has(carId) ? carTimeMap.get(carId) + parkingTime : parkingTime,
    );
  });

  const result = Array.from(carTimeMap, ([carId, parkingTime]) => {
    const cost =
      parkingTime < BASE_PARKING_TIME
        ? BASE_COST
        : BASE_COST +
          Math.ceil((parkingTime - BASE_PARKING_TIME) / PER_TIME) * PER_COST;
    return { carId, cost };
  });
  return result.sort((a, b) => a.carId - b.carId).map(({ cost }) => cost);
}

function diffMinute(time1, time2) {
  const [h1, m1] = time1.split(':');
  const [h2, m2] = time2.split(':');

  return h2 * 60 + parseInt(m2) - (h1 * 60 + parseInt(m1));
}

solution(
  [180, 5000, 10, 600],
  [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ],
);

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.46ms, 29.8MB)
테스트 2 〉	통과 (0.42ms, 30.1MB)
테스트 3 〉	통과 (0.53ms, 30MB)
테스트 4 〉	통과 (0.62ms, 30.1MB)
테스트 5 〉	통과 (0.82ms, 30.2MB)
테스트 6 〉	통과 (0.77ms, 30MB)
테스트 7 〉	통과 (2.90ms, 30.6MB)
테스트 8 〉	통과 (2.24ms, 30.1MB)
테스트 9 〉	통과 (0.78ms, 30MB)
테스트 10 〉	통과 (2.62ms, 30.1MB)
테스트 11 〉	통과 (3.52ms, 30.4MB)
테스트 12 〉	통과 (3.42ms, 30.6MB)
테스트 13 〉	통과 (0.46ms, 30MB)
테스트 14 〉	통과 (0.47ms, 30.1MB)
테스트 15 〉	통과 (0.50ms, 29.8MB)
테스트 16 〉	통과 (0.38ms, 30MB)
채점 완료
 */
