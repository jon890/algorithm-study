function solution(k, rates) {
    let money = k; // 현재 가진 원화
    let hasDollar = false; // 달러를 가졌는지 체크 => 달러는 1달러만 소유 가능
    
    for (let i = 0; i < rates.length; i++) {
        const curr = rates[i];
        // 마지막날은 rates[i + 1] => undefined 이다
        // 마지막날에 달러를 들고있다면 팔아서 원화로 가져가야한다.
        // 따라서 0처리를해서 무조건 팔게한다
        const next = rates[i + 1] || 0; 

        if (!hasDollar && money >= curr) {
            // 어떤 경우에 사야하는가?
            // 환율이 점점 올라가기 전에
            if (curr < next) {
                hasDollar = true;
                money -= curr;
                continue;
            }
        }

        if (hasDollar) {
            // 어떤 경우에 팔아야 하는가?
            // 나 다음에 환율이 떨어질 때
            if (curr > next) {
                hasDollar = false;
                money += curr;
                continue;
            }
        }
    }

    console.log(money);
    return money;
}

// 내 알고리즘이 항상 최댓값을 내는가?
// 반례를 찾아봐

// solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100]);
// solution(1500, [1500, 1400, 1300, 1200]);
solution(1000, [1000, 1100, 1200, 1000]);
