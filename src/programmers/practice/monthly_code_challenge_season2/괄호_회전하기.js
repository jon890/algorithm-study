function solution(s) {
  let answer = 0;

  for (let rotate = 0; rotate < s.length; rotate++) {
    const rotatedString = s.substring(rotate) + s.substring(0, rotate);
    if (isValidBracketString(rotatedString)) answer++;
  }

  return answer;
}

function isValidBracketString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && isValidBracket(stack[stack.length - 1], s[i])) {
      stack.pop(stack.length - 1);
    } else {
      stack.push(s[i]);
    }
  }

  function isValidBracket(char1, char2) {
    const pair = {
      '[': ']',
      '{': '}',
      '(': ')',
    };

    return pair[char1] === char2;
  }

  return !Boolean(stack.length);
}

solution('[](){}');
