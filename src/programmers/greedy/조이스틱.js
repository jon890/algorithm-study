function solution(name) {
  const changeCharacter = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 12,
    P: 11,
    Q: 10,
    R: 9,
    S: 8,
    T: 7,
    U: 6,
    V: 5,
    W: 4,
    X: 3,
    Y: 2,
    Z: 1,
  };
  const target = name.split('');
  const source = new Array(target.length).fill('A');
  if (equalsArray(target, source)) return 0; // target 문자가 모두 A인경우 처리

  let answer = 0;
  let index = 0;
  let turn = false;

  while (true) {
    const char = target[index];
    source[index] = char;
    answer += changeCharacter[char];

    // 뒤로 돌아야 이득인 경우
    // 앞으로 나가는 것보다 뒤로 도는게 낫다
    if (!turn && target[index + 1] === 'A') {
      // 연속된 A의 갯수를 찾는다
      let countA = 0;
      for (let i = index + 1; i < target.length; i++) {
        if (target[i] === 'A') countA++;
        else break;
      }

      // 뒤로 돌아가는수와 연속된 A의 갯수(앞으로 나아가기)를 비교
      if (countA > index) {
        turn = true;
        answer += index;
        index = target.length;
      }
    }

    index += turn ? -1 : +1;
    if (equalsArray(source, target)) break;
    answer++;
  }

  console.log(answer);
  return answer;
}

function equalsArray(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// solution('JEROEN');
// solution('JAN');
// solution('ABABAAAAAAABA');
// solution('AAZ');

// solution('BBABA');
// solution('BBBAAB');
// solution('BBAABAA');
// solution('BBAABBB');
// solution('BBAABAAAA');
// solution('BBAABAAAAB');

/**
 * 2021-07-03
 * TC가 불완전한 문제.
 * 일단 보류.
 */
