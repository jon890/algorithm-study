function solution(n, record) {
  /**
   * 게임서버 새 캐릭터 생성
   *
   * 서버에는 1 ~ n 번호가 붙어있다.
   *
   * 캐릭터가 이미 5개인 서버에 캐릭터 생성시,
   * 가장 오래된 캐릭터 삭제후 빈 자리에 캐릭터 생성
   *
   * 같은 서버에 같은 닉네임 불가능
   */

  const servers = [];
  for (let i = 0; i < n; i++) {
    servers.push([]); // 빈 배열 추가
  }

  record.forEach((r) => {
    const [serverNumber, nickname] = r.split(" ");
    const server = servers[serverNumber - 1];

    // 닉네임 체크 - 해당 닉네임이 존재? => 무시
    if (server.includes(nickname)) {
      // ignore
    } else {
      // 닉네임이 5개 이상입니까?
      if (server.length >= 5) {
        server.shift(); // 첫 번째 캐릭터 제거
      }

      server.push(nickname); // 마지막에 캐릭터 추가
    }
  });

  //   console.log(servers);

  const answer = [];
  servers.forEach((server) => {
    server.forEach((nickname) => {
      answer.push(nickname);
    });
  });
  return answer;
}

// console.log(
//   solution(1, [
//     "1 fracta",
//     "1 sina",
//     "1 hana",
//     "1 robel",
//     "1 abc",
//     "1 sina",
//     "1 lynn",
//   ])
// );

// console.log(
//   solution(4, [
//     "1 a",
//     "1 b",
//     "1 abc",
//     "3 b",
//     "3 a",
//     "1 abcd",
//     "1 abc",
//     "1 aaa",
//     "1 a",
//     "1 z",
//     "1 q",
//     "3 k",
//     "3 q",
//     "3 z",
//     "3 m",
//     "3 b",
//   ])
// );

/**
 * 정확성  테스트
테스트 1 〉	통과 (0.21ms, 30MB)
테스트 2 〉	통과 (0.19ms, 30.1MB)
테스트 3 〉	통과 (0.18ms, 30MB)
테스트 4 〉	통과 (0.20ms, 30.1MB)
테스트 5 〉	통과 (0.21ms, 30.1MB)
테스트 6 〉	통과 (0.23ms, 29.9MB)
테스트 7 〉	통과 (0.14ms, 29.9MB)
테스트 8 〉	통과 (0.21ms, 30MB)
테스트 9 〉	통과 (0.23ms, 30MB)
테스트 10 〉	통과 (0.22ms, 30MB)
테스트 11 〉	통과 (0.23ms, 30MB)
테스트 12 〉	통과 (0.26ms, 30.1MB)
테스트 13 〉	통과 (0.33ms, 30.2MB)
테스트 14 〉	통과 (0.36ms, 30MB)
테스트 15 〉	통과 (0.36ms, 30MB)
테스트 16 〉	통과 (0.81ms, 30.1MB)
테스트 17 〉	통과 (0.85ms, 30.2MB)
테스트 18 〉	통과 (0.57ms, 29.8MB)
테스트 19 〉	통과 (1.18ms, 30.2MB)
테스트 20 〉	통과 (1.22ms, 29.9MB)
테스트 21 〉	통과 (1.24ms, 30.2MB)
테스트 22 〉	통과 (1.17ms, 30.1MB)
테스트 23 〉	통과 (1.20ms, 30.1MB)
테스트 24 〉	통과 (1.22ms, 30.1MB)
테스트 25 〉	통과 (0.16ms, 30.2MB)
테스트 26 〉	통과 (0.11ms, 30MB)
테스트 27 〉	통과 (0.51ms, 30MB)
테스트 28 〉	통과 (0.57ms, 30.1MB)
채점 결과
정확성: 100.0
효율성: 0.0
합계: 100.0 / 100.0
 */

/**
 * 문제 설명
서버 n개가 있는 온라인 RPG 게임을 이용하는 한 유저가 각 서버에 새 캐릭터를 생성하려 합니다. 캐릭터 생성 규칙은 다음과 같습니다.

각 서버에는 1부터 n까지 번호가 하나씩 붙어 있습니다.
서버별로 캐릭터는 최대 5개까지 생성 가능합니다.
캐릭터가 이미 5개인 서버에 새 캐릭터를 생성하면, 해당 서버에서 가장 오래된 캐릭터 하나를 삭제하고 빈자리에 캐릭터가 생성됩니다.
해당 서버에 이미 같은 닉네임이 있는 경우 캐릭터가 생성되지 않습니다.
4-1. 서로 다른 서버에는 닉네임이 같은 캐릭터를 만들 수 있습니다.
단, 다른 유저가 생성한 캐릭터들의 닉네임은 고려하지 않는다고 가정합니다.

서버 개수 n, 유저가 새 캐릭터를 생성한 기록이 담긴 배열 record가 매개변수로 주어집니다. 이때, 각 서버별로 어떤 캐릭터들이 생성됐는지 닉네임을 문자열 배열 형태로 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 9 이하인 자연수입니다.
record는 캐릭터의 생성 기록이 시간 순서대로 담긴 문자열 배열입니다.
record의 길이(=캐릭터 생성 기록 개수)는 1 이상 1,000 이하입니다.
record의 각 원소는 캐릭터 생성 기록을 나타냅니다.
캐릭터 생성 기록은 N nickname 형태입니다.
N은 서버 번호를 나타내며 n(서버 개수) 이하인 한 자리 자연수입니다.
nickname은 해당 서버에 생성한 캐릭터의 닉네임을 나타냅니다.
N과 nickname은 공백(스페이스) 하나로 구분되어 있습니다.
닉네임의 길이는 1 이상 6 이하이며 알파벳 소문자로만 이루어져 있습니다.
return 하는 문자열 배열은 서버별 닉네임을 다음 기준에 따라 정렬해 return 해주세요.
번호가 더 작은 서버에 있는 닉네임이 더 앞에 옵니다.
서버 번호가 같을 경우 해당 서버에서 더 오래된 닉네임이 더 앞에 옵니다.
캐릭터가 하나도 생성되지 않은 서버는 무시해도 됩니다.
입출력 예
n	record	result
1	["1 fracta", "1 sina","1 hana","1 robel","1 abc", "1 sina", "1 lynn"]	["sina", "hana", "robel", "abc", "lynn"]
4	["1 a","1 b","1 abc","3 b","3 a","1 abcd","1 abc","1 aaa","1 a","1 z","1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]	["abc", "abcd", "aaa", "z", "q", "k", "q", "z", "m", "b"]
입출력 예 설명
입출력 예 #1

1번 서버에 다음과 같이 캐릭터가 생성됩니다.

record	1번 서버	설명
1 fracta	[fracta]	1번 서버에 fracta를 생성합니다.
1 sina	[fracta, sina]	1번 서버에 sina를 생성합니다.
1 hana	[fracta, sina, hana]	1번 서버에 hana를 생성합니다.
1 robel	[fracta, sina, hana, robel]	1번 서버에 robel을 생성합니다.
1 abc	[fracta, sina, hana, robel, abc]	1번 서버에 abc를 생성합니다.
1 sina	[fracta, sina, hana, robel, abc]	1번 서버에 이미 sina가 있으므로 무시합니다.
1 lynn	[sina, hana, robel, abc, lynn]	1번 서버에서 가장 오래된 닉네임 fracta를 삭제하고 새 닉네임 lynn을 생성합니다.
입출력 예 #2

캐릭터 생성 기록을 모두 처리한 후 각 서버별 닉네임 상태는 다음과 같습니다.

1번 서버	2번 서버	3번 서버	4번 서버
[abc, abcd, aaa, z, q]	없음	[k, q, z, m, b]	없음
2번과 4번 서버에는 캐릭터가 하나도 없습니다. 따라서, 1번, 3번 서버에 생성된 캐릭터만 조건에 맞게 배열에 담아 return 하면 됩니다.
 */
