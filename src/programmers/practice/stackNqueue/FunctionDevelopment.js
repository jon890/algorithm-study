function solution(progresses, speeds) {

    // 기능은 진도가 100%일 떄 서비스에 반영할 수 있다
    // 각 기능의 개발속도는 모두 다르다
    // 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있다
    // 이 떄 뒤에 있는 기능은 앞에 있는 기능이 배포될 떄 함께 배포된다

    // 남은 날짜를 담은 배열
    const remains = [];
    progresses.forEach((p, index) => {
        const s = speeds[index];
        remains.push(Math.ceil((100 - p) / s));
    });

    // 각 배포마다 몇 개의 기능이 배포되는지를 return 하기
    const answer = [];
    let deploy_day = 0;
    let count = 1;

    remains.forEach((value, index) => {
        let curr = value;
        const next = remains[index + 1];

        if (deploy_day !== 0)
            curr = deploy_day;

        // 현재 기능을 배포할 때 다음 기능을 같이 배포할 것인가
        if (curr >= next) {
            // 함께 배포할 날짜 기록
            if (deploy_day === 0) deploy_day = curr;

            count++;

            // 다음 것을 같이 배포할 수 없다면
            // 여기 까지 배포
        } else {
            if (count > 1) {
                answer.push(count);
                count = 1;
                deploy_day = 0;
            } else {
                answer.push(1);
            }
        }
    });
    return answer;
}

const progresses = [93, 30, 55, 93, 30, 55];
const speeds = [1, 30, 5, 1, 30, 5];
const answer = solution(progresses, speeds);
console.log(`답은 : ${answer}`);
