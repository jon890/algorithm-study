const NO_MORE_FOOD = -1;

function solution(food_times, k) {
  let time = 0;
  let index = 0;
  while (time < k) {
    food_times[index]--;
    index = getNextIndex(index, food_times);
    if (index === NO_MORE_FOOD) return NO_MORE_FOOD;

    time++;
  }
  // 다음 먹어야할 음식 인덱스 계산
  return index === NO_MORE_FOOD ? NO_MORE_FOOD : index + 1;
}

function getNextIndex(index, foodTimes) {
  let nextIndex = index;
  let count = 0;
  while (count < foodTimes.length) {
    nextIndex++;

    if (nextIndex === foodTimes.length) {
      nextIndex = 0;
    }

    if (foodTimes[nextIndex] > 0) {
      break;
    }

    count++;
  }

  if (count === foodTimes.length) {
    return NO_MORE_FOOD;
  } else {
    return nextIndex;
  }
}

console.log(solution([3, 1, 2], 5));
console.log(solution([4, 2, 3, 6, 7, 1, 5, 8], 16));
console.log(solution([4, 2, 3, 6, 7, 1, 5, 8], 27));
