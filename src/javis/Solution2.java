package javis;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


/**
 * 반장 투표
 * <p>
 * N명  => 0 ~ N-1 출석번호
 * 모두 반장 후보
 * 각자 선소하는 후보가 순서대로 있다
 * 탈락하지 않은 후보중 가장 선호도가 높은 후보에게 투표
 * <p>
 * 반수 이상을 득표 => 당선 => 투표 중단
 * <p>
 * N => 짝수 N /2
 * N => 홀수 (N+1) / 2
 * <p>
 * 반수 2명 => 출석번호가 가장 큰 사람이 당선
 * <p>
 * 반수가 없으면, 가장 적게 득표 탈락 => 재 투표
 * 가장 적게 여러명 => 출석 번호가 가장 작은 사람 탈락
 *
 * 정확성 테스트
 * 테스트 1 〉 통과 (5.10ms, 76MB)
 * 테스트 2 〉 통과 (12.45ms, 82.3MB)
 * 테스트 3 〉 통과 (11.71ms, 84.3MB)
 * 테스트 4 〉 통과 (15.12ms, 79MB)
 * 테스트 5 〉 통과 (28.49ms, 85.1MB)
 * 테스트 6 〉 통과 (39.02ms, 98.5MB)
 * 테스트 7 〉 통과 (82.95ms, 123MB)
 * 테스트 8 〉 통과 (138.93ms, 155MB)
 * 테스트 9 〉 통과 (112.95ms, 144MB)
 * 테스트 10 〉 통과 (8.06ms, 140MB)
 * 테스트 11 〉 통과 (5.25ms, 77.2MB)
 * 테스트 12 〉 통과 (132.29ms, 155MB)
 * 테스트 13 〉 통과 (109.47ms, 151MB)
 * 테스트 14 〉 통과 (118.06ms, 155MB)
 * 테스트 15 〉 통과 (140.91ms, 135MB)
 * 테스트 16 〉 통과 (97.87ms, 132MB)
 * 테스트 17 〉 통과 (99.00ms, 138MB)
 * 테스트 18 〉 통과 (104.05ms, 129MB)
 * 테스트 19 〉 통과 (78.46ms, 117MB)
 * 테스트 20 〉 통과 (60.34ms, 132MB)
 * 채점 결과
 * 합계: 2 / 2
 */
public class Solution2 {

    public int[] solution(int[][] orders) {
        /**
         * 과반수
         */
        int MAJORITY = orders.length % 2 == 0 ? orders.length / 2 : (orders.length + 1) / 2;

        /**
         * 탈락 여부 boolean 배열
         */
        boolean[] checkFailed = new boolean[orders.length];
        int loops = 0;

        while (true) {
            loops++;
            int[] voteCount = vote(orders, checkFailed);
            List<int[]> sortedVoteResult = sortVoteResult(voteCount, checkFailed);

            // 반수 이상 체크
            int[] elected = sortedVoteResult.stream()
                    .filter(indexAndVoteCount -> indexAndVoteCount[1] >= MAJORITY)
                    .max(Comparator.comparingInt(o -> o[0]))
                    .orElse(null);

            if (elected != null) {
                return new int[]{loops, elected[0]};
            }

            // 탈락 여부 체크
            sortedVoteResult.stream()
                    .filter(indexAndVoteCount -> indexAndVoteCount[1] == sortedVoteResult.get(0)[1])
                    .min(Comparator.comparingInt(o -> o[0]))
                    .ifPresent(failed -> checkFailed[failed[0]] = true);
        }

    }

    private int[] vote(int[][] orders, boolean[] failed) {
        int[] votes = new int[orders.length];

        for (int[] order : orders) {
            for (int priority : order) {
                if (failed[priority]) continue;

                votes[priority] = votes[priority] + 1;
                break;
            }
        }

        return votes;
    }

    /**
     * 투표 결과를 소팅한 값을 리턴한다
     *
     * @param voteCount
     * @param failed
     * @return
     */
    private List<int[]> sortVoteResult(int[] voteCount, boolean[] failed) {
        return IntStream.range(0, voteCount.length)
                .mapToObj(index -> {
                    int[] indexAndVoteCount = new int[2];
                    indexAndVoteCount[0] = index;
                    indexAndVoteCount[1] = voteCount[index];
                    return indexAndVoteCount;
                })
                .filter(indexAndVoteCount -> !failed[indexAndVoteCount[0]])
                .sorted((o1, o2) -> {
                    int index1 = o1[0];
                    int voteCount1 = o1[1];

                    int index2 = o2[0];
                    int voteCount2 = o2[1];

                    int compare = Integer.compare(voteCount1, voteCount2);
                    return compare != 0 ? compare : Integer.compare(index1, index2);
                })
                .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        Solution2 obj = new Solution2();

        int[][] orders = new int[][]{{2, 3, 4, 0, 1}, {1, 4, 3, 2, 0}, {4, 1, 0, 2, 3}, {3, 2, 1, 4, 0}, {0, 3, 2, 1, 4}};
        obj.solution(orders);
    }
}