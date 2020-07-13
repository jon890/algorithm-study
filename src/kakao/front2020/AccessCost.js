function solution(N, facility) {

    // 각 칸의 접근비용 = 칸으로부터 시설까지의 거리 x 중요도
    // 거리 = 가로방향차이 + 세로방향차이

    // 시설이 두개이상인경우 각 칸의 접근 비용은 해당칸에서 모든 시설에 대한 접근비용중 최댓값
    // 접근비용이 최소인 칸에 집을 지어야함

    // 위 규칙대로 집을 지었을 때, 집을 지을 칸의 접근 비용

    // n^2 * facility.length 칸에 대해서 모두 계산
    // 얼마 안걸릴거 같은데..?

    const costs = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (costs[i] == null) costs[i] = [];

            const this_cost = facility.map(([_x, _y, priority]) => {
                const x = _x - 1;
                const y = _y - 1;

                // 접근 비용 : 거리차이 * 중요도
                const distance_difference = Math.abs(x - i) + Math.abs(y - j);
                return distance_difference * priority;
            });

            // console.log(this_cost);
            // 접근 비용중 최댓값으로 결정
            costs[i][j] = Math.max.apply(null, this_cost);
        }
    }

    // 2차워 배열에서 최솟값 찾기
    const answer = [];
    costs.forEach((value, index) => {
        answer[index] = Math.min.apply(null, value);
    });
    return Math.min.apply(null, answer);
}

const n_1 = 3;
const facility_1 = [[1,3,1],[3,1,1]];
console.log(solution(n_1, facility_1));