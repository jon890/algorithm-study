function solution(money, cost) {
    let start = 0; // start index
    let end = 0; // end index
    let sum = 0; // 구간 합
    let max = 0; // 가장 긴 연속된 층을 기록

    // 투 포인터 알고리즘을 활용
    // O(n) 시간에 처리되도록 한다
    // end index가 끝에 닿을때까지 계속한다
    while (end <= cost.length) {
        if (sum >= money) {
            // end의 값을 넣어서 예산을 초과했다
            // 넘기전 end값을 찾는다

            // end를 더하고 end + 1을 하므로
            // 더해서 초과된 end index는 end - 1이고
            // 그 이전의 index는 end - 2이다
            const prevEnd = end - 2;
            const interval = prevEnd - start + 1;
            if (interval > max) max = interval;

            // start 값을 빼고 인덱스를 늘린다
            sum -= cost[start++];
        } else {
            sum += cost[end++];
        }
     }

     console.log(max);
    return max;
}

solution(420, [0, 900, 0, 200, 150, 0, 30, 50]);
solution(100, [245, 317, 151, 192]);