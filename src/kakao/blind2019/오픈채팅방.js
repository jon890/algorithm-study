function solution(recordList) {
  // Operation const object 선언
  const Operation = {
    Enter: { name: 'Enter', message: '들어왔습니다' },
    Leave: { name: 'Leave', message: '나갔습니다' },
    Change: { name: 'Change', message: null },
  };

  const uidNicknameMap = new Map(); // uid - nickname을 연관지을 객체
  const result = []; // 채팅 결과를 담을 객체

  recordList
    // record를 의미가 담긴 객체 형태로 변환한다
    .map((record) => {
      const [operation, uid, nickname] = record.split(' ');

      // 닉네임이 있다면 uid - nickname 맵에 넣어준다
      if (nickname) {
        uidNicknameMap.set(uid, nickname);
      }

      return {
        operation: Operation[operation],
        uid,
        ...(nickname && { nickname }),
      };
    })
    .forEach(({ uid, operation }) => {
      if (operation === Operation.Change) return;
      result.push(`${uidNicknameMap.get(uid)}님이 ${operation.message}.`);
    });

  return result;
}

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);
