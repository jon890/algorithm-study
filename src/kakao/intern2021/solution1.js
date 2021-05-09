function solution(s) {
  const WORD_NUMBER_MAP = new Map();
  WORD_NUMBER_MAP.set('zero', '0');
  WORD_NUMBER_MAP.set('one', '1');
  WORD_NUMBER_MAP.set('two', '2');
  WORD_NUMBER_MAP.set('three', '3');
  WORD_NUMBER_MAP.set('four', '4');
  WORD_NUMBER_MAP.set('five', '5');
  WORD_NUMBER_MAP.set('six', '6');
  WORD_NUMBER_MAP.set('seven', '7');
  WORD_NUMBER_MAP.set('eight', '8');
  WORD_NUMBER_MAP.set('nine', '9');

  const splits = [];
  let word = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 문자가 숫자인 경우
    if (char >= 0 && char <= 9) {
      splits.push(char);
    } else {
      // 문자를 모아 단어를 만든다
      word += char;
    }

    if (WORD_NUMBER_MAP.has(word)) {
      splits.push(WORD_NUMBER_MAP.get(word));
      word = '';
    }
  }

  return parseInt(splits.join(''));
}

console.log(solution('one4seveneight'));
