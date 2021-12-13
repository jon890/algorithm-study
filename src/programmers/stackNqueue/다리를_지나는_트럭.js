function solution(bridge_length, limitWeight, truck_weights) {
  let time = 1;
  let truckStack = truck_weights.reverse();
  let currentWeight = 0;
  let bridgeTrucksQueue = [];

  while (truckStack.length) {
    // 트럭이 다리에 올라갈수 있는지 검사
    const truckWeight = truckStack[truckStack.length - 1];
    if (currentWeight + truckWeight <= limitWeight) {
      currentWeight += truckWeight;
      truckStack.pop();

      // 해당 트럭을 다리의 끝에 추가한다
      bridgeTrucksQueue.push({
        weight: truckWeight,
        remainDistance: bridge_length,
      });
    }

    bridgeTrucksQueue = bridgeTrucksQueue.filter((bridgeTruck) => {
      bridgeTruck.remainDistance--;

      if (bridgeTruck.remainDistance === 0) {
        currentWeight -= bridgeTruck.weight;
        return false;
      }

      return true;
    });
    time++;
  }

  if (bridgeTrucksQueue.length) {
    bridgeTrucksQueue.sort((a, b) => b.remainDistance - a.remainDistance);
    time += bridgeTrucksQueue[0].remainDistance;
  }
  console.log(time);
  return time;
}

solution(2, 10, [7, 4, 5, 6]);
solution(100, 100, [10]);
solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

/**
 * 2021-07-01
 * 파라미터의 길이를 생각해보고
 * 효율성이 필요하지 않다고 하면
 * 일단 깔끔하게 풀어내는 것이 좋은것 같다
 * 
 * 효율성도 고려해볼수 있다
 * 중간에 트럭이 더이상 올라올수 없는 경우
 * 첫 트럭의 남은시간 만큼 시간을 점프 할 수 있을 것
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.70ms, 30.1MB)
테스트 2 〉	통과 (7.79ms, 33.9MB)
테스트 3 〉	통과 (0.26ms, 30MB)
테스트 4 〉	통과 (13.41ms, 34.5MB)
테스트 5 〉	통과 (31.32ms, 34.2MB)
테스트 6 〉	통과 (23.38ms, 34.2MB)
테스트 7 〉	통과 (0.66ms, 30MB)
테스트 8 〉	통과 (0.33ms, 30.2MB)
테스트 9 〉	통과 (5.76ms, 33.2MB)
테스트 10 〉	통과 (0.35ms, 30MB)
테스트 11 〉	통과 (0.17ms, 30MB)
테스트 12 〉	통과 (0.45ms, 29.9MB)
테스트 13 〉	통과 (0.97ms, 30.3MB)
테스트 14 〉	통과 (0.15ms, 30.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
