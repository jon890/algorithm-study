function solution(n, words) {
  let failedIndex = 0;

  for (let i = 1; i < words.length; i++) {
    const current = words[i];
    const prev = words[i - 1];

    // 이미 말한 단어인지 확인
    if (words.indexOf(current) != i) {
      failedIndex = i;
      break;
    }

    // 이전 사람이 말한 단어의 끝과 첫 단어가 일치하는지 확인
    if (current[0] !== prev[prev.length - 1]) {
      failedIndex = i;
      break;
    }
  }

  return Boolean(failedIndex)
    ? [(failedIndex % n) + 1, Math.floor(failedIndex / n) + 1]
    : [0, 0];
}

solution(3, [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
]);

solution(5, [
  'hello',
  'observe',
  'effect',
  'take',
  'either',
  'recognize',
  'encourage',
  'ensure',
  'establish',
  'hang',
  'gather',
  'refer',
  'reference',
  'estimate',
  'executive',
]);

solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);
