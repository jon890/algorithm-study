function solution(jobs) {
  // 짧은 작업을 우선시 하면 됨
  // 큐에서 제일 짧은 작업을 꺼내서 작업을 처리하자
  let scheduler_timer = 0; // 스케쥴러의 내부 시간
  const scheduler_queue = []; // 스케쥴러 job queue
  const total_jobs = jobs.length; // 총 작업의 갯수
  let total_time = 0; // 총 걸린시간 = 대기시간 + 처리시간
  let processed_count = 0; // 처리된 job 갯수

  while (processed_count < total_jobs) {
    // adding scheduler
    // fixme kbt : 예상 되는 대기시간 + 처리시간이 제일 짧은 job을 찾자..?
    const moved_jobs = [];
    jobs.forEach((item, index) => {
      const arrival_time = item[0];

      if (scheduler_timer >= arrival_time) {
        scheduler_queue.push(item);
        moved_jobs.push(index);
      }
    });

    // 스케쥴러로 옮겨간 잡은 뺀다
    jobs = deleteItems(moved_jobs, jobs);

    // find minimum processing job
    const minimum_index = findMinimumIndex(scheduler_queue, 1);
    if (minimum_index === -1) {
      scheduler_timer++;
      continue;
    }
    console.log(scheduler_queue);
    console.log(
      `min value = ${scheduler_queue[minimum_index]} , min index = ${minimum_index}`,
    );

    // running
    const item = scheduler_queue[minimum_index];
    const waiting_time = scheduler_timer - item[0];
    const processing_time = waiting_time + item[1]; // 기다린 시간 + 처리 시간
    console.log(`item = ${item}`);
    console.log(`waiting_time = ${waiting_time}`);
    console.log(`processing_time= ${processing_time}`);
    scheduler_timer += item[1];

    total_time += processing_time;
    scheduler_queue.splice(minimum_index, 1);
    processed_count++;
    console.log(`total time = ${total_time}`);
    console.log(`####################\n\n`);
  }
  return total_time / processed_count;
}

function findMinimumIndex(arr, column_index) {
  if (!Array.isArray(arr)) return -1;
  if (arr.length === 0) return -1;

  let index = -1;
  let current_value = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][column_index] < current_value) {
      index = i;
      current_value = arr[i][column_index];
    }
  }
  return index;
}

function deleteItems(index_array, target_array) {
  const new_array = [];
  target_array.forEach((item, index) => {
    if (!~index_array.indexOf(index)) {
      new_jobs.push(item);
    }
  });
  return new_array;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ]),
);

/*
20-09-20
오랜만에 다시도전..
80분동안 풀었는데 ㅡ.ㅡ 이런..

채점을 시작합니다.
정확성  테스트
테스트 1 〉	실패 (4.74ms, 32MB)
테스트 2 〉	실패 (3.88ms, 32.4MB)
테스트 3 〉	실패 (5.14ms, 32.8MB)
테스트 4 〉	실패 (3.97ms, 32.6MB)
테스트 5 〉	실패 (4.78ms, 32.9MB)
테스트 6 〉	실패 (0.46ms, 30MB)
테스트 7 〉	실패 (4.93ms, 31.9MB)
테스트 8 〉	실패 (3.38ms, 32.9MB)
테스트 9 〉	실패 (1.01ms, 30.3MB)
테스트 10 〉	실패 (5.08ms, 33.1MB)
테스트 11 〉	통과 (0.23ms, 29.9MB)
테스트 12 〉	실패 (0.26ms, 30.2MB)
테스트 13 〉	실패 (0.27ms, 30MB)
테스트 14 〉	통과 (0.26ms, 30.1MB)
테스트 15 〉	실패 (0.17ms, 30MB)
테스트 16 〉	실패 (0.20ms, 30.1MB)
테스트 17 〉	실패 (0.21ms, 30MB)
테스트 18 〉	통과 (0.20ms, 30.1MB)
테스트 19 〉	실패 (0.20ms, 30.1MB)
테스트 20 〉	통과 (0.18ms, 30MB)
채점 결과
정확성: 20.0
합계: 20.0 / 100.0
 */
