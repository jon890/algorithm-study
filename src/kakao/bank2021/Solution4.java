package kakao.bank2021;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution4 {

    public int solution(int[] T, int[][] R, int k) {
        Map<Integer, List<Integer>> childMap = new HashMap<>();
        for (int[] relation : R) {
            int parent = relation[1];
            int child = relation[0];

            List<Integer> childList;
            if (childMap.containsKey(parent)) {
                childList = childMap.get(parent);
            } else {
                childList = new ArrayList<>();
                childMap.put(parent, childList);
            }

            childList.add(child);
        }

        int result = dfs(0, k, T, new boolean[T.length], childMap);
        return result;
    }

    private int dfs(int result,
                    int currentNode,
                    int[] processingTime,
                    boolean[] complete,
                    Map<Integer, List<Integer>> childMap) {
        // target 작업을 하기 위해서
        // 제일 선행해야할 작업으로 깊게 들어간다

        // 의존성이 있는 작업 목록
        List<Integer> depJobList = childMap.get(currentNode);

        // 종료 체크 - 의존 작업들이 모두 처리

        // 종료 - 제일 깊게 들어감
        if (depJobList == null) {
            complete[currentNode - 1] = true; // 해당 노드의 작업을 완료 시킨다
            return result + processingTime[currentNode - 1];
        }

        for (int job : depJobList) {
            if (complete[job - 1]) continue; // 완료된 작업은 다시 수행하지 않는다
            result += dfs(result, job, processingTime, complete, childMap);
        }

        return result;
    }

    public static void main(String[] args) {
        Solution4 obj = new Solution4();

        int[] T1 = new int[]{5, 8, 3, 7, 10, 5, 4};
        int[][] R1 = new int[][]{{1, 2}, {2, 4}, {1, 4}, {6, 5}, {3, 5}, {4, 6}};
        int K1 = 5;
        obj.solution(T1, R1, K1);
    }
}

// 병렬 처리
// 이전 단계의 계산 값이 나와야 다음 단계가 가능한 연산
// 동시에 진행해도 상관없는 연산 => 병렬 프로그래밍

// 아이디어는 떠올랐는데 이제 시간이 10분 남았다
// K에서 각 자식들의 최대 시간을 계속 찾아내면 될듯한데..
// 분할 정복