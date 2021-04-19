function solution(lines) {
  /**
   * 초당 최대 처리량
   * 응답 완료 여부에 관계 없이
   * 임의 시간 부터 1초간 처리하는 요청의 최대 갯수
   */

  const newLines = lines.map((l) => {
    const [date, responseCompleteTime, processingTime] = l.split(' ');

    let newProcessingTime = Number(
      processingTime.substring(0, processingTime.length - 1),
    );

    const [
      completeHourStr,
      completeMinuteStr,
      completeSecondStr,
    ] = responseCompleteTime.split(':');

    const completeHour = Number(completeHourStr);
    const completeMinute = Number(completeMinuteStr);
    const completeSecond = Number(completeSecondStr);

    let startHour = completeHour;
    let startMinute = completeMinute;
    let startSecond = completeSecond - newProcessingTime + 0.001;

    if (startSecond < 0) {
      startMinute--;
      startSecond += 60;

      if (startMinute < 0) {
        startHour--;
        startMinute += 60;
      }
    }

    // 4번째 자리에서 반올림 하여 3번째 자리까지 표시
    startSecond = Number(startSecond.toFixed(3));

    return {
      start: {
        hour: startHour,
        minute: startMinute,
        second: startSecond,
      },
      complete: {
        hour: completeHour,
        minute: completeMinute,
        seconds: completeSecond,
      },
    };
  });

  //   console.log(newLines);
  const { start: firstStart } = newLines[0];
  const { complete: lastComplete } = newLines[newLines.length - 1];
  
  
  var answer = 0;
  return answer;
}

// solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']);
// solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s']);
solution([
  '2016-09-15 20:59:57.421 0.351s',
  '2016-09-15 20:59:58.233 1.181s',
  '2016-09-15 20:59:58.299 0.8s',
  '2016-09-15 20:59:58.688 1.041s',
  '2016-09-15 20:59:59.591 1.412s',
  '2016-09-15 21:00:00.464 1.466s',
  '2016-09-15 21:00:00.741 1.581s',
  '2016-09-15 21:00:00.748 2.31s',
  '2016-09-15 21:00:00.966 0.381s',
  '2016-09-15 21:00:02.066 2.62s',
]);
