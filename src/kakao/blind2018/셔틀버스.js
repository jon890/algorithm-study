/**
 * 2021-08-23
 * 3단계 문제 3개를 풀지 못하고
 * 다음으로 넘어와서 겨우하나를 풀었다!
 * 역시 구현쪽이 그나마 좀 도전해볼만하고 재밌는듯
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.58ms, 30MB)
테스트 2 〉	통과 (0.40ms, 29.9MB)
테스트 3 〉	통과 (0.42ms, 29.9MB)
테스트 4 〉	통과 (0.38ms, 29.9MB)
테스트 5 〉	통과 (0.49ms, 30.1MB)
테스트 6 〉	통과 (0.22ms, 29.9MB)
테스트 7 〉	통과 (0.99ms, 30.1MB)
테스트 8 〉	통과 (0.61ms, 30.1MB)
테스트 9 〉	통과 (0.34ms, 30.1MB)
테스트 10 〉	통과 (0.42ms, 30.1MB)
테스트 11 〉	통과 (0.66ms, 30.1MB)
테스트 12 〉	통과 (0.92ms, 30.1MB)
테스트 13 〉	통과 (0.93ms, 30MB)
테스트 14 〉	통과 (0.50ms, 30.2MB)
테스트 15 〉	통과 (0.62ms, 30.1MB)
테스트 16 〉	통과 (0.52ms, 30.2MB)
테스트 17 〉	통과 (0.92ms, 30.2MB)
테스트 18 〉	통과 (0.91ms, 29.7MB)
테스트 19 〉	통과 (0.96ms, 30.2MB)
테스트 20 〉	통과 (0.97ms, 30.2MB)
테스트 21 〉	통과 (2.89ms, 31.8MB)
테스트 22 〉	통과 (2.02ms, 29.7MB)
테스트 23 〉	통과 (0.97ms, 29.9MB)
테스트 24 〉	통과 (3.11ms, 31.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(n, t, m, timetable) {
  const result = []; // 내가 탈 수 있는 시각 후보

  const newTimeTable = timetable
    .map((time) => {
      let [hour, minute] = time.split(':');
      return { hour: parseInt(hour), minute: parseInt(minute), toWork: false };
    })
    .sort(sortTime);

  // 셔틀 운행 간격마다 탈 수 있는지 검사
  // 초기시간
  let currentTime = { hour: 9, minute: 0 };
  for (let i = 0; i < n; i++) {
    if (i != 0) currentTime = getNextTime(currentTime, t);
    let count = 0; // 현재 탑승한 크루수
    let lastCrew = null; // 마지막으로 탑승한 크루

    // 버스 도착시간에 타야할 사람을 태운다
    // 버스보다 전에 도착했고, 인원이 수용가능하면 태운다
    for (const crew of newTimeTable) {
      if (crew.toWork) continue; // 이미 출근했다
      if (count >= m) break; // 탑승인원이 꽉참

      // 탑승 가능한지 확인후 탑승
      if (checkTakable(currentTime, crew)) {
        lastCrew = crew;
        count++;
        crew.toWork = true;
        crew.takeTime = currentTime;
      }
    }

    // 내가 이 버스에 타려면?
    // 자리가 없다 => 이 버스를 제일 먼저 탄 사람보다 빨리 와야함
    // 자리가 있다 => 해당 버스의 시간에 맞춰서
    if (count < m) {
      result.push(currentTime);
    } else {
      result.push(minusTime(lastCrew, 1));
    }
  }

  const answer = result.sort(sortTime)[result.length - 1];
  return formatTime(answer);
}

function formatTime(currentTime) {
  let { hour, minute } = currentTime;

  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;

  return `${hour}:${minute}`;
}

function sortTime(a, b) {
  if (b.hour !== a.hour) {
    return a.hour - b.hour;
  } else {
    return a.minute - b.minute;
  }
}

function getNextTime(currentTime, t) {
  let { hour, minute } = currentTime;

  minute += t;

  if (minute >= 60) {
    minute -= 60;
    hour++;
  }

  return { hour, minute };
}

function checkTakable(currentTime, arriveTime) {
  if (currentTime.hour < arriveTime.hour) return false;
  if (currentTime.hour > arriveTime.hour) return true;
  return currentTime.minute >= arriveTime.minute;
}

function minusTime(currentTime, minuteValue) {
  let { hour, minute } = currentTime;

  minute -= minuteValue;
  if (minute < 0) {
    hour--;
    minute += 60;
  }

  return { hour, minute };
}

//solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']);
solution(2, 10, 2, ['09:10', '09:09', '08:00']);
//solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00']);
//solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01']);
// solution(10, 60, 45, [
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
//   '23:59',
// ]);
