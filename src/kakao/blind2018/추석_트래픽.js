function solution(lines) {
  const newLines = lines.map((line) => {
    let [date, completeTime, processingTime] = line.split(' ');

    // 숫자에서 s를 제거 해줌
    processingTime = processingTime.slice(0, processingTime.length - 1);
    // 숫자로 변환
    processingTime = parseFloat(processingTime);

    // 응답 완료 시간 parse
    const [endHours, endMinutes, endSeconds] = completeTime.split(':');

    // 응답 시작 시간 계산
    // 처리시간과 완료시간을 통해서 시작시간을 계산한다
    let startHours = endHours;
    let startMinutes = endMinutes;
    let startSeconds = endSeconds - processingTime + 0.001;

    if (startSeconds < 0) {
      startMinutes--;
      startSeconds += 60;

      if (startMinutes < 0) {
        startHours--;
        startMinutes += 60;
      }
    }

    return {
      date,
      start: {
        hour: parseInt(startHours),
        minute: parseInt(startMinutes),
        second: parseFloat(startSeconds).toFixed(3),
      },
      end: {
        hour: parseInt(endHours),
        minute: parseInt(endMinutes),
        second: parseFloat(endSeconds).toFixed(3),
      },
      processingTime,
    };
  });

  let currentTime;
  let maxCount = 0;

  for (let i = 0; i < newLines.length; i++) {
    const { start, end } = newLines[i];
    let count = 0;

    // 해당 아이템의 시작시간을 현재 시간으로 설정하고
    // 몇개가 커버링되는지 확인한다
    currentTime = start;
    count = check(currentTime, newLines);
    console.log(currentTime, count);

    if (count > maxCount) {
      maxCount = count;
    }

    currentTime = end;
    count = check(currentTime, newLines);
    console.log(currentTime, count);

    if (count > maxCount) {
      maxCount = count;
    }
  }

  // 지정 시간 ~ 지정 시간 + 1초에서 구간에 걸치는 아이템이 몇 개 인지 반환한다
  function check(intervalStart, array) {
    let count = 0;

    // intervalStart ~ intervalStart + 1 초의 구간을 생성
    const intervalEnd = Object.assign({}, intervalStart);
    intervalEnd.second = parseFloat(intervalEnd.second) + 1;
    intervalEnd.second = intervalEnd.second.toFixed(3);
    if (intervalEnd.second > 60) {
      intervalEnd.second = intervalEnd.second - 60;
      intervalEnd.minute = intervalEnd.minute + 1;

      if (intervalEnd.minute > 60) {
        intervalEnd.minute = intervalEnd.minute - 60;
        intervalEnd.hour = intervalEnd.hour + 1;
      }
    }

    for (let j = 0; j < array.length; j++) {
      const { start: targetStart, end: targetEnd } = array[j];

      if (isAfter(targetStart, intervalEnd)) {
        continue;
      }

      if (isBefore(targetEnd, intervalStart)) {
        continue;
      }

      count++;
    }
    return count;
  }

  console.log(maxCount);
  return maxCount;
}

function isBefore(t1, t2) {
  const { hour: hour1, minute: minute1, second: second1 } = t1;
  const { hour: hour2, minute: minute2, second: second2 } = t2;

  if (hour1 > hour2) {
    return false;
  }

  if (hour1 < hour2) {
    return true;
  }

  // hour1 === hour2
  if (minute1 > minute2) {
    return false;
  }

  if (minute1 < minute2) {
    return true;
  }

  // minute1 === minute2
  if (second1 > second2) {
    return false;
  }

  if (second1 < second2) {
    return true;
  }

  // second2 === second2
  return false;
}

function isAfter(t1, t2) {
  const { hour: hour1, minute: minute1, second: second1 } = t1;
  const { hour: hour2, minute: minute2, second: second2 } = t2;

  if (hour1 > hour2) {
    return true;
  }

  if (hour1 < hour2) {
    return false;
  }

  // hour1 === hour2
  if (minute1 > minute2) {
    return true;
  }

  if (minute1 < minute2) {
    return false;
  }

  // minute1 === minute2
  if (second1 > second2) {
    return true;
  }

  if (second1 < second2) {
    return false;
  }

  // second2 === second2
  return false;
}

solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']);
// solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s']);
// solution([
//   '2016-09-15 20:59:57.421 0.351s',
//   '2016-09-15 20:59:58.233 1.181s',
//   '2016-09-15 20:59:58.299 0.8s',
//   '2016-09-15 20:59:58.688 1.041s',
//   '2016-09-15 20:59:59.591 1.412s',
//   '2016-09-15 21:00:00.464 1.466s',
//   '2016-09-15 21:00:00.741 1.581s',
//   '2016-09-15 21:00:00.748 2.31s',
//   '2016-09-15 21:00:00.966 0.381s',
//   '2016-09-15 21:00:02.066 2.62s',
// ]);
