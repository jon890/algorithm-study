function solution(n, t, m, timetable) {
  // js 에서 date 객체를 다루는게 별로 안좋아보여서 객체로 변환해서 생각
  const new_time_table = [];
  timetable.forEach((time) => {
    const hour = time.substring(0, 2);
    const minute = time.substring(3, 5);

    new_time_table.push({
      hour,
      minute,
      notArrivaled: true,
    });
  });
  //   console.log(new_time_table);

  // 정답 배열 초기화
  const answers = [];

  // 버스가 도착하는 수 만큼 모든 경우를 고려해보자 => 최대 10경우 밖에 안됨
  const init_arrival_hour = 9;
  for (let i = 0; i < n; i++) {
    // 버스 도착 시간
    const add_time = i * t;
    const arrival_hour = init_arrival_hour + add_time / 60;
    const arrival_minute = add_time % 60;

    // 도착시간에 나를 포함해서 크루들을 태우려면??
    // 그전 버스에 탑승했는지 기록해야하네..
    // 첫 버스에 순서대로 태워보자.
    let current_crew_count = 0;
    new_time_table.some(({ hour, minute, notArrivaled }, index) => {
      if (current_crew_count > m) {
        // 한 명을 버스에 덜 태우고 내가 탄 다고 가정하자
        return true; // break
      }

      if (notArrivaled) {
        // 버스가 더 나중의 시간에 도착한다
        if (compareTime(arrival_hour, arrival_minute, hour, minute) === 1) {
          new_time_table[index].notArrivaled = true; // 탑승으로 상태 전환
          current_crew_count++; // 버스의 승객으로 카운트
        }
      }
    });

    console.log(new_time_table);
  }
}

function compareTime(h1, m1, h2, m2) {
  if (h1 < h2) {
    return -1;
  }

  if (h1 > h2) {
    return 1;
  }

  if (h1 == h2) {
    if (m1 > m2) {
      return 1;
    } else if (m1 == m2) {
      return 0;
    } else {
      return -1;
    }
  }
}

console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));
