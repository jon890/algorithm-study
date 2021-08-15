function solution(s) {
  const stack = Array();
  for (const char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

solution('baabaa');
