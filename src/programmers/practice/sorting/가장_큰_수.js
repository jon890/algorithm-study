// function solution(numbers) {
//   numbers.sort((a, b) => {
//     const aStr = '' + a;
//     const bStr = '' + b;

//     // 앞 자리수가 제일 크면 제일 앞으로 위치하게 정렬한다
//     if (bStr[0] !== aStr[0]) {
//       return bStr[0] - aStr[0];
//     } else {
//       if (aStr.length === bStr.length) {
//         // 자릿수가 같은 경우 비교 => 큰수가 더크게 30 < 34
//         return b - a;
//       } else {
//         // 자릿수가 다른 경우 비교 30 < 3 < 34 순으로 정렬되게
//         // 3을 33이라고 생각한다 30 < 33 < 34
//         let big = '' + Math.max(a, b);
//         let small = '' + Math.min(a, b);
//         for (let i = small.length; i < big.length; i++) {
//           small += small[parseInt(i % small.length)];
//         }

//         console.log(big, small);
//         return small - big;
//       }
//     }
//   });

//   const answer = numbers.join('');
//   console.log(answer);
//   return answer;
// }

function solution(numbers) {
  const answer = numbers
    .map((e) => e + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer.startsWith('0') ? '0' : answer;
}

// solution([6, 10, 2]);
// solution([3, 30, 34, 5, 9]);
// solution([121, 12]);
// solution([0, 0, 0]);
