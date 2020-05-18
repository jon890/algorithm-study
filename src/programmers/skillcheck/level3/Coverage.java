package programmers.skillcheck.level3;

/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Coverage
 * chanllenge_id=486
 *
 * 아파트 전체에 전파를 전달하기
 */
public class Coverage {

    public int solution(int n, int[] stations, int w) {
        // 하나의 기지국은 최대 2w + 1 만큼을 커버한다
        int maxCoverage = 2 * w + 1;

        int start = 1;
        int total = 0;

        for (int i = 0; i < stations.length; i++) {
            // start ~ stations[i] 까지의 기지국 수를 구한다
            int interval = stations[i] - w - start;
            total += (int) Math.ceil((double) interval / maxCoverage);

            start = stations[i] + w;
        }

        // 마지막 계산
        int interval = n - start;
        total += (int) Math.ceil((double) interval / maxCoverage);

        return total;
    }

    public static void main(String[] args) {
        Coverage obj = new Coverage();

        int n_ex1 = 11;
        int[] stations_ex1 = {4, 11};
        int w_ex1 = 1;
        obj.solution(n_ex1, stations_ex1, w_ex1);

        int n_ex2 = 16;
        int[] stations_ex2 = {9};
        int w_ex2 = 2;
        obj.solution(n_ex2, stations_ex2, w_ex2);
    }
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.06ms, 52.7MB)
테스트 2 〉	통과 (1.05ms, 50.2MB)
테스트 3 〉	통과 (0.98ms, 53MB)
테스트 4 〉	실패 (1.88ms, 51.8MB)
테스트 5 〉	통과 (1.02ms, 50.3MB)
테스트 6 〉	통과 (1.04ms, 50.6MB)
테스트 7 〉	통과 (1.11ms, 50.5MB)
테스트 8 〉	실패 (1.61ms, 50.2MB)
테스트 9 〉	통과 (1.06ms, 52.4MB)
테스트 10 〉	통과 (1.08ms, 50.4MB)
테스트 11 〉	통과 (1.03ms, 50.8MB)
테스트 12 〉	통과 (0.91ms, 50.3MB)
테스트 13 〉	통과 (1.02ms, 52.4MB)
테스트 14 〉	통과 (1.11ms, 52MB)
테스트 15 〉	통과 (1.05ms, 50.6MB)
테스트 16 〉	통과 (1.06ms, 50MB)
테스트 17 〉	실패 (1.95ms, 50.4MB)
테스트 18 〉	통과 (1.10ms, 52.1MB)
테스트 19 〉	실패 (1.98ms, 52.2MB)
테스트 20 〉	통과 (1.09ms, 52.4MB)
테스트 21 〉	실패 (2.09ms, 52.3MB)
효율성  테스트
테스트 1 〉	통과 (4.98ms, 53.8MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	통과 (2.96ms, 55.2MB)
테스트 4 〉	실패 (시간 초과)
채점 결과
정확성: 26.8
효율성: 7.4
합계: 34.2 / 50
 */