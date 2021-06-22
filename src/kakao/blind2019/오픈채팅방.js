function solution(recordList) {
  const Operation = {
    Enter: { key: 'Enter', message: '들어왔습니다' },
    Leave: { key: 'Leave', message: '나갔습니다' },
    Change: { key: 'Change', message: '' },
  };

  const processedRecordList = recordList.map((record) => {
    const divided = record.split(' ');
    return {
      uid: divided[1],
      operation: divided[0],
      ...(divided[2] && { newNickname: divided[2] }),
    };
  });

  const uidNicknameMap = new Map();
  processedRecordList.forEach((record) => {
    if (Operation.Leave.key !== record.operation) {
      uidNicknameMap.set(record.uid, record.newNickname);
    }
  });

  const result = [];
  for (let record of processedRecordList) {
    const { uid, operation } = record;

    if (Operation.Change.key === operation) {
      continue;
    }

    result.push(
      `${uidNicknameMap.get(uid)}님이 ${Operation[operation].message}.`,
    );
  }
  return result;
}

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);
