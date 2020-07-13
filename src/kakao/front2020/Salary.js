const LOWEST_SALARY = 2000;
const HIGHEST_DEADLINE = "1231";

function solution(offers) {

    let current_salary = LOWEST_SALARY;
    let current_deadline = HIGHEST_DEADLINE;

    while (true) {
        const considering_offers = [];
        let current_arrival = "INIT";

        offers.some(o => {
            const [_arrival, _deadline, _salary] = o.split(" ");
            const arrival = _arrival.replace("/", "");
            const deadline = _deadline.replace("/", "");
            const salary = parseInt(_salary);

            // 전체 제안의 첫 번째 도착일을 가져온다
            if (current_arrival === "INIT") current_arrival = arrival;

            // 현재 내가 고려중인 제안과 도착일이 같고
            // 내가 받은 제안의 마감일보다, 도착일이 이전인 제안을
            // 고려할만한 제안 배열에 담는다
            if (current_arrival === arrival && current_deadline >= arrival) {
                considering_offers.push([arrival, deadline, salary]);
            } else {
                return false; // break
            }
        });


        // 종료조건 - 더 이상 고려할만한 제안이 없으면 종료한다
        if (considering_offers.length === 0) break;


        // 전체 제안에서 고려중인 제안으로 이동된 아이템들을 제거한다
        offers.splice(0, considering_offers.length);


        // 고려중인 제안중 다음과 같은 조건으로 제안을 수락한다.
        // 1. 연봉이 가장 높음
        // 2. 연봉이 가장 높다면 마감일이 제일 늦음
        // 3. 조건이 같다면 아무거나
        let max_offer_index = [];
        let max_salary, max_deadline;


        // 초기 비교값 셋팅
        if (current_salary === LOWEST_SALARY && current_deadline === HIGHEST_DEADLINE) {
            // FIXME KBT 나은 방법이 있는지 고려해볼것..
            max_salary = LOWEST_SALARY - 1; // 비교 횟수를 줄이기 위해서 연봉의 최솟값보다 작게 설정
            max_deadline = "0100"; // 비교 횟수를 줄이기 위해서 마감일의 최솟값보다 작게 설정
        } else {
            // 한번 진행 됬다면, 현재 선택을 저장한다
            max_salary = current_salary;
            max_deadline = current_deadline;
        }


        // 고려중인 제안중, 연봉이 제일 높은것 찾기
        considering_offers.forEach(o => {
            const salary = o[2];
            if (max_salary < salary) max_salary = salary;
        });


        // 고려중인 제안 중,
        // 더 나은 조건이 없다면,
        // 현재 조건을 무시하고,
        // 전체 다음 제안을 검사한다.
        if (max_salary === current_salary) continue;


        // 고려중인 제안 중, 연봉이 제일 높은 제안이 몇개 인지 찾기
        considering_offers.forEach((o, index) => {
            const salary = o[2];
            if (max_salary === salary) max_offer_index.push(index);
        });


        // 고려중인 제안 중, 제일 높은 연봉을 수락
        current_salary = max_salary;


        // 고려중인 제안 중, 제일 늦은 마감일 수락
        if (max_offer_index.length === 1) {
            const index = max_offer_index[0];
            current_deadline = considering_offers[index][1];
        } else {
            for (let i = 0; i < max_offer_index.length; i++) {
                const index = max_offer_index[i];
                const deadline = considering_offers[index][1];

                if (max_deadline < deadline) max_deadline = deadline;
            }
            current_deadline = max_deadline;
        }
    }

    return current_salary;
}

const offers_1 = ["10/05 10/12 2400", "10/05 10/10 2500", "10/07 10/15 2300", "10/08 10/30 3000", "10/15 11/03 3000", "10/20 11/01 3500", "11/02 11/11 4000"];
const offers_2 = ["07/01 07/30 2000", "07/01 07/15 2000", "07/01 07/30 2000", "07/01 07/30 1500", "07/05 07/30 2100", "07/20 08/01 2400", "07/20 07/31 2400", "07/31 09/01 2900", "08/01 08/15 3000", "08/14 08/19 2000","08/17 08/30 4000"];
solution(offers_2);