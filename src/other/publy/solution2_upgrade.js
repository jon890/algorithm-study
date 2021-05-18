function solution(estimates, k) {
  let windowSum = 0;
  let maxSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < estimates.length; windowEnd++) {
    windowSum += estimates[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= estimates[windowStart];
      windowStart++;
    }
  }

  console.log(maxSum);
  return maxSum;
}

solution([5, 1, 9, 8, 10, 5], 3);
