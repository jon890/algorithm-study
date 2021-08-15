function solution(food_times, k) {
  const foods = food_times
    .map((time, index) => ({
      id: index + 1,
      time,
    }))
    .sort(({ time: t1 }, { time: t2 }) => t1 - t2);

  let already_eat_time = 0; // 다 먹은 음식 시간의 최댓값
  for (let i = 0; i < foods.length; i++) {
    const foodCount = foods.length - i;
    const food = foods[i];
    const remainTime = food.time - already_eat_time;

    // 이 음식을 모두 먹을수 있는지 체크
    if (foodCount * remainTime <= k) {
      k -= foodCount * remainTime;
      already_eat_time = food.time;
    } else {
      // 모두 먹을 수 없다면
      const foodIndex = k === 0 ? 0 : k % foodCount;
      const sorted = foods.slice(i).sort((a, b) => a.id - b.id);
      return sorted[foodIndex].id;
    }
  }

  return -1;
}

solution([3, 1, 2], 5);
