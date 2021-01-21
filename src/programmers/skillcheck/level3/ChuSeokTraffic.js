const KR_HOUR_DIFF = 9;

function solution(lines) {
  const logs = lines.map((line) => {
    const temp = line.split(" ");

    // 응답 완료시간
    const responseComplete = new Date(temp[0] + " " + temp[1]);
    responseComplete.setHours(responseComplete.getHours() + KR_HOUR_DIFF); // GMT+0900 보정

    // 처리시간
    const processing = parseInt(temp[2].substring(0, temp[2].length - 1)); // s 제거,

    const log = {
      startTime: subtractSeconds(responseComplete, processing - 0.001),
      endTime: responseComplete,
    };
    return log;
  });
  //   console.log(logs);

  // 시간이 제일 빠른것과 시간이 제일 끝나는 것을 찾은 다음 이분검색을 해보자
  logs.sort((l1, l2) => l1.startTime.getTime() - l2.startTime.getTime());
  const fast = logs[0];

  logs.sort((l1, l2) => l1.endTime.getTime() - l2.endTime.getTime());
  const last = logs[logs.length - 1];

  //   console.log(fast, last);

  var answer = 0;
  return answer;
}

function subtractSeconds(date, sec) {
  return new Date(date - sec * 1000);
}

solution([
  "2016-09-15 20:59:58.233 1.181s",
  "2016-09-15 20:59:57.421 0.351s",
  "2016-09-15 20:59:58.299 0.8s",
  "2016-09-15 20:59:58.688 1.041s",
  "2016-09-15 20:59:59.591 1.412s",
  "2016-09-15 21:00:00.464 1.466s",
  "2016-09-15 21:00:00.741 1.581s",
  "2016-09-15 21:00:00.748 2.31s",
  "2016-09-15 21:00:00.966 0.381s",
  "2016-09-15 21:00:02.066 2.62s",
]);
