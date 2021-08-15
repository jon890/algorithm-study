function solution2(k, room_number) {
  // i번째 방을 요청하면 값을 돌려줄 배열
  const requestRoom = new Array(k).fill().map((_, index) => index + 1);
  // 실제 배정된 방
  const answer = [];

  for (let i = 0; i < room_number.length; i++) {
    const wanted = room_number[i];
    const assigned = requestRoom[wanted - 1];
    answer.push(assigned);

    const currentIndex = requestRoom.findIndex(
      (compare) => compare === assigned,
    );
    const nextIndex = requestRoom.findIndex((compare) => compare > assigned);
    for (let j = currentIndex; j < nextIndex; j++) {
      requestRoom[j] = requestRoom[nextIndex];
    }
  }
  return answer;
}

function solution3(k, room_number) {
  const rooms = new Map();
  return room_number.map((number) => find(number, rooms));
}

function find(number, rooms) {
  // 처음 방을 배정 받는 경우
  if (!rooms.has(number)) {
    // 방을 배정받고
    // 그 방을 원하는 사람에게 다음 방을 알려줌
    rooms.set(number, number + 1);
    return number;
  }

  // 방이 이미 배정되었다면
  // 다음 방을 재귀적으로 찾음
  let next = find(rooms.get(number), rooms);
  // 재귀적으로 찾은 다음 방으로 업데이트
  rooms.set(number, next + 1);
  return next;
}

/**
 * 2021-06-29
 * 내가 생각한 방식이 union-find와 진짜 유사하네..
 * 아 이런식으로 구현하면 효율성이 충족되는구나..
 * 더 읽어보고 공부하자! union-find
 */

console.log(solution3(10, [1, 3, 4, 1, 3, 1]));
