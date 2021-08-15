function solution(dirs) {
  const Operation = {
    U: { dx: 1, dy: 0 },
    D: { dx: -1, dy: 0 },
    R: { dx: 0, dy: -1 },
    L: { dx: 0, dy: 1 },
  };

  let curX = 0;
  let curY = 0;

  const routes = [];
  let answer = 0;

  for (let i = 0; i < dirs.length; i++) {
    const opStr = dirs[i];
    const { dx, dy } = Operation[opStr];

    // 좌표 조작
    let nextX = curX + dx;
    let nextY = curY + dy;

    // 좌표계를 벗어나는 동작이면 무시
    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) continue;

    // 가본길인지 확인
    const check = routes.find((prev) => {
      // 같은 길 확인 => 방향에 관계 없어야함
      if (
        prev.nextX === curX &&
        prev.curX === nextX &&
        prev.nextY === curY &&
        prev.curY === nextY
      )
        return true;

      if (
        prev.nextX === nextX &&
        prev.curX === curX &&
        prev.nextY === nextY &&
        prev.curY === curY
      )
        return true;

      return false;
    });

    // 처음 가는길
    if (!check) {
      answer++;
      // 경로 저장
      routes.push({ curX, curY, nextX, nextY });
    }

    curX = nextX;
    curY = nextY;
  }

  console.log(answer);
  return answer;
}

// 지나간길중 처음 걸어본 길이를 구하고싶다
// 지나간 Root를 기록?
// 길어도 400이다
// 좌표, Op를 동시에 기록

solution('ULURRDLLU');
solution('LULLLLLLU');

/**
 * 2021-07-03
 * 방향에 관계없이 길은 같다를 이용하면
 * 풀이는 큰 차이 없는듯
 * 다른분들은 키를 만들어서 맵에 저장하셨다
 */
