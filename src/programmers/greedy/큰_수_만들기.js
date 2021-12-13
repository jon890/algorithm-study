function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(parseInt(num));
  }

  return stack.join('').substring(0, stack.length - k);
}

// 10, 12 시간초과
// function solution(number, k) {
//   let i = 0;

//   while (k) {
//     // 나보다 더 큰수가 몇번쨰 다음으로 나타나는지 확인
//     const cur = parseInt(number[i]);

//     let j = i + 1;
//     let check = false;
//     for (; j - i <= k; j++) {
//       const next = parseInt(number[j]);
//       if (cur < next) {
//         check = true; // 제거 가능
//         break;
//       }
//     }

//     if (check) {
//       // i ~ j - 1 구간을 삭제
//       number = number.substring(0, i) + number.substring(j);
//       k -= j - i;
//     } else {
//       i++;
//     }
//   }

//   return number;
// }

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));

/**
 * 2021-07-03
 * 자료 구조를 잘 선택하면
 * 쉽게 풀수 있다!
 * 기본기 더 공부!!
 */
