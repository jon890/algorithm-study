package kakao.bank2021;

import java.util.ArrayList;
import java.util.List;

public class Solution2 {

    public int solution(int[][] needs, int r) {
        // 부품 종류의 수
        final int TYPE_OF_PART = needs[0].length;

        // 부품 종류의 수 C 최대 구매가능한 로봇의 수
        List<int[]> combinationList = getCombination(TYPE_OF_PART, r);
        int combinationSize = combinationList.size();

        // 해당 제품을 만들 수 있는지 확인
        int max = 0;

        for (int[] combination : combinationList) {
            int count = 0;

            for (int[] requiredParts : needs) {
                // 생산 가능한지 확인
                if (check(combination, requiredParts)) count++;
            }

            if (max < count) max = count;
        }

        return max;
    }

    private boolean check(int[] productionParts, int[] required) {
        int requiredPartsCount = 0; // 필요한 부품의 수
        int matchedParts = 0;  // 로봇이 생산하는 부품과 필요한 부품이 일치하는지 확인하는 수

        for (int i = 0; i < required.length; i++) {
            if (required[i] != 1) continue;

            requiredPartsCount++;

            // 로봇이 해당 부품을 생산가능한지 확인
            for (int productionPart : productionParts) {
                // 생산 가능
                if (productionPart - 1 == i) {
                    matchedParts++;
                    break;
                }
            }
        }

        return requiredPartsCount == matchedParts;
    }

    private List<int[]> getCombination(int n, int r) {
        List<int[]> combinations = new ArrayList<>();
        generateCombinationsRecursively(combinations, new int[r], 1, n, 0);
        return combinations;
    }

    private void generateCombinationsRecursively(List<int[]> combinations, int[] elements, int current, int end, int index) {
        if (index == elements.length) {
            combinations.add(elements.clone());
            return;
        }
        if (current > end) {
            return;
        }
        elements[index] = current;
        generateCombinationsRecursively(combinations, elements, current + 1, end, index + 1);
        generateCombinationsRecursively(combinations, elements, current + 1, end, index);
    }

    public static void main(String[] args) {
        Solution2 obj = new Solution2();

        int[][] needs1 = new int[][]{{1, 0, 0}, {1, 1, 0}, {1, 1, 0}, {1, 0, 1}, {1, 1, 0}, {0, 1, 1}};
        int r1 = 2;
        obj.solution(needs1, r1);
    }
}

// 50 / 50