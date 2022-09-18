package javis;

import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

/**
 * 출석 점수 매기기
 * <p>
 * 기본 10
 * 출석시 +1
 * 결석 -1 ===> 3번 결석 fail => 0점
 * 지각하면 점수 x ===> 2번 지각 ===> 결석 1번
 * <p>
 * 강의는 총 10번 진행
 * 출석 A, 지각 L, 결석 P
 * <p>
 * 정확성 테스트
 * 테스트 1 〉 통과 (4.58ms, 75.2MB)
 * 테스트 2 〉 통과 (4.48ms, 78.2MB)
 * 테스트 3 〉 통과 (4.42ms, 79.8MB)
 * 테스트 4 〉 통과 (8.15ms, 73.3MB)
 * 테스트 5 〉 통과 (4.39ms, 74.9MB)
 * 테스트 6 〉 통과 (4.80ms, 72.2MB)
 * 테스트 7 〉 통과 (4.33ms, 76.3MB)
 * 테스트 8 〉 통과 (4.49ms, 77.3MB)
 * 테스트 9 〉 통과 (4.38ms, 77.4MB)
 * 테스트 10 〉 통과 (4.71ms, 73.7MB)
 * 테스트 11 〉 통과 (4.83ms, 82.3MB)
 * 테스트 12 〉 통과 (4.35ms, 74.5MB)
 * 테스트 13 〉 통과 (5.40ms, 81.1MB)
 * 테스트 14 〉 통과 (4.42ms, 69.3MB)
 * 테스트 15 〉 통과 (4.29ms, 78.1MB)
 * 채점 결과
 * 합계: 2 / 2
 */
public class Solution1 {

    public int[] solution(String[] students) {
        List<Integer> attendanceScores = Arrays.stream(students).map(attendanceInfo -> {
            int BASIC_SCORE = 10;
            int attendance = 0;
            int late = 0;
            int absent = 0;

            for (int i = 0; i < attendanceInfo.length(); i++) {
                switch (attendanceInfo.charAt(i)) {
                    case 'A' -> attendance++;
                    case 'L' -> late++;
                    case 'P' -> absent++;
                }
            }

            // handle late
            if (late >= 2) {
                absent += late / 2;
            }

            // handle absent
            if (absent >= 3) {
                return 0;
            }

            return BASIC_SCORE + attendance - absent;
        }).toList();

        return IntStream.range(0, attendanceScores.size())
                .mapToObj(index -> {
                    int score = attendanceScores.get(index);
                    int[] indexAndScore = new int[2];
                    indexAndScore[0] = index;
                    indexAndScore[1] = score;
                    return indexAndScore;
                })
                .sorted((o1, o2) -> Integer.compare(o2[1], o1[1]))
                .mapToInt(indexAndScore -> indexAndScore[1])
                .toArray();

    }
}