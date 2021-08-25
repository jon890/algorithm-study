/**
 * 2021-08-24
 * 카카오 인턴 3단계도 맵다..
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.19ms, 30MB)
테스트 2 〉	통과 (0.16ms, 30.1MB)
테스트 3 〉	통과 (0.22ms, 30MB)
테스트 4 〉	통과 (0.17ms, 30.1MB)
테스트 5 〉	실패 (0.23ms, 30.1MB)
테스트 6 〉	실패 (0.26ms, 30.2MB)
테스트 7 〉	실패 (0.25ms, 30MB)
테스트 8 〉	실패 (0.22ms, 29.5MB)
테스트 9 〉	실패 (0.24ms, 30MB)
테스트 10 〉	통과 (0.21ms, 30.1MB)
테스트 11 〉	실패 (0.51ms, 30.1MB)
테스트 12 〉	실패 (0.41ms, 30.1MB)
테스트 13 〉	실패 (0.56ms, 29.8MB)
테스트 14 〉	실패 (0.48ms, 29.9MB)
테스트 15 〉	실패 (0.52ms, 29.8MB)
테스트 16 〉	실패 (0.38ms, 30.1MB)
테스트 17 〉	실패 (0.68ms, 30MB)
테스트 18 〉	실패 (0.88ms, 30.1MB)
테스트 19 〉	실패 (0.86ms, 30.1MB)
테스트 20 〉	실패 (1.76ms, 30.4MB)
테스트 21 〉	실패 (2.07ms, 30.7MB)
테스트 22 〉	실패 (런타임 에러)
테스트 23 〉	통과 (0.15ms, 30.1MB)
테스트 24 〉	통과 (0.19ms, 30MB)
테스트 25 〉	통과 (0.15ms, 30.2MB)
테스트 26 〉	통과 (0.18ms, 29.8MB)
테스트 27 〉	통과 (0.19ms, 30.1MB)
테스트 28 〉	통과 (0.26ms, 29.9MB)
테스트 29 〉	실패 (0.18ms, 30.1MB)
테스트 30 〉	실패 (0.18ms, 30.2MB)
효율성  테스트
테스트 1 〉	실패 (시간 초과)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (런타임 에러)
테스트 8 〉	실패 (런타임 에러)
테스트 9 〉	실패 (시간 초과)
테스트 10 〉	실패 (시간 초과)
채점 결과
정확성: 11.0
효율성: 0.0
합계: 11.0 / 100.0
 */

function solution(n, k, cmd) {
  const deleteList = [];
  const connected = [];
  let currentCursor = k;

  // 해당 노드와 연결된 노드 기록
  for (let i = 0; i < n; i++) {
    connected[i] = [];
    connected[i][0] = i - 1; // 이전
    connected[i][1] = i + 1; // 이후
  }

  connected[0][0] = null; // 이전 노드가 없음
  connected[n - 1][1] = null; // 다음 노드가 없음

  for (let i = 0; i < cmd.length; i++) {
    const operation = cmd[i][0];
    const param = cmd[i][2];
    let prevNodeIndex;
    let nextNodeIndex;

    switch (operation) {
      case 'U': // 커서를 위로
        for (let i = 0; i < param; i++) {
          currentCursor = connected[currentCursor][0];
        }
        break;
      case 'D': // 커서를 아래로
        for (let i = 0; i < param; i++) {
          currentCursor = connected[currentCursor][1];
        }
        break;
      case 'C': // 삭제
        // 현재 커서의 노드가 삭제됨
        deleteList.push(currentCursor);

        // 현재 커서와 연결된 이전, 이후 노드가 바로 연결됨
        prevNodeIndex = connected[currentCursor][0];
        nextNodeIndex = connected[currentCursor][1];

        // 맨 마지막행을 삭제했을경우 => 바라보는 커서는 그 이전행이다
        if (!nextNodeIndex) {
          currentCursor = prevNodeIndex;
        } else {
          // 보통의 경우는 다음 노드를 바라본다
          currentCursor = nextNodeIndex;
        }

        if (prevNodeIndex != null) connected[prevNodeIndex][1] = nextNodeIndex;
        if (nextNodeIndex != null) connected[nextNodeIndex][0] = prevNodeIndex;
        break;
      case 'Z': // 복구
        const revertIndex = deleteList.pop();

        while (true) {
          // 내가 이전에 바라보던 행을 찾는다 => 삭제 되지 않은것을 찾을때까지 한다
          prevNodeIndex = connected[revertIndex][0];
          if (!deleteList.includes(prevNodeIndex)) break;
        }

        while (true) {
          // 내가 다음으로 바라보던 행을 찾는다 => 삭제 되지 않은것을 찾을때까지 한다
          nextNodeIndex = connected[revertIndex][1];
          if (!deleteList.includes(nextNodeIndex)) break;
        }

        if (prevNodeIndex != null) connected[prevNodeIndex][1] = revertIndex;
        if (nextNodeIndex != null) connected[nextNodeIndex][0] = revertIndex;

        connected[revertIndex][0] = prevNodeIndex;
        connected[revertIndex][1] = nextNodeIndex;
        break;
    }
  }

  //   console.log(deleteList);
  // 답 만들기
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += 'O';
  }
  for (let i = 0; i < deleteList.length; i++) {
    answer = answer.split('');
    answer[deleteList[i]] = 'X';
    answer = answer.join('');
  }

  console.log(answer);
  return answer;
}

// 표의 행을 선택, 삭제, 복구하는 프로그램 작성
// 한 번에 한행, 표의 범위를 벗어날 수 없음
// 연결 리스트? => 삭제 삽입이 O(logN)임

solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']);
solution(8, 2, [
  'D 2',
  'C',
  'U 3',
  'C',
  'D 4',
  'C',
  'U 2',
  'Z',
  'Z',
  'U 1',
  'C',
]);
