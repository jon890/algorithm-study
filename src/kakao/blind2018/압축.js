/**
 * 2021-08-19
 * 처음에는 뭔말인가 했는데
 * 하라는데로 구현하면 되는듯..
 * 너무짜다 1점이라니 ㅠ
 */

function solution(msg) {
  let [maxValue, dictionary] = initDictionary();
  const result = [];

  while (msg.length) {
    // 메시지의 앞부분부터 잘라서 해당 단어가 있는지 확인
    let existWord; // 사전에 존재하는 단어
    let lastIndex = 0;
    for (let i = 1; i <= msg.length; i++) {
      const tempWord = msg.substring(0, i);

      if (dictionary.has(tempWord)) {
        existWord = tempWord;
        lastIndex = i;
      } else {
        break;
      }
    }

    // 사전에 추가
    dictionary.set(existWord + msg[lastIndex], maxValue++);

    // 출력
    result.push(dictionary.get(existWord));

    msg = msg.substring(lastIndex);
  }

  console.log(result);
  return result;
}

function initDictionary() {
  const dictionary = new Map();
  const A = 'A';
  const Z = 'Z';
  let maxValue = 1;

  for (let i = A.charCodeAt(0); i <= Z.charCodeAt(0); i++) {
    dictionary.set(String.fromCharCode(i), maxValue);
    maxValue++;
  }

  return [maxValue, dictionary];
}

// 카카오톡 전송 메시지 압축 => 전송 효율 높이기
// 압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘
// LZW

// 길이가 1인 모든 단어를 포함시키도록 사전 초기화

solution('KAKAO');
solution('TOBEORNOTTOBEORTOBEORNOT');
solution('ABABABABABABABAB');
