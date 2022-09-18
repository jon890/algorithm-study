package javis;

import java.util.LinkedList;
import java.util.Queue;

public class Solution3 {

    private static final char MINE = 'M';
    private static final char CLEAR = 'E';
    private static final char ACTIVATE_CLEAR_BUTTON = 'B';

    private static final char NULL_CHARACTER = '\u0000';

    public String[] solution(String[] board, int y, int x) {

        // 바로 지뢰 클릭
        if (board[y].charAt(x) == MINE) {
            board[y] = replaceTargetIndex(board[y], x, 'X');
            return board;
        }

        // bfs
        Queue<int[]> pointQueue = new LinkedList<>();
        boolean[][] visited = new boolean[board.length][board[0].length()];
        char[][] result = new char[board.length][board[0].length()];

        pointQueue.add(new int[]{y, x});

        while (!pointQueue.isEmpty()) {
            int[] point = pointQueue.poll();

            int targetY = point[0];
            int targetX = point[1];
            visited[targetY][targetX] = true;


            int mines = 0;
            for (int row = targetY - 1; row <= targetY + 1; row++) {
                if (row < 0 || row >= board.length) continue;

                for (int col = targetX - 1; col <= targetX + 1; col++) {
                    if (col < 0 || col >= board[row].length()) continue;

                    if (board[row].charAt(col) == MINE) {
                        mines++;
                    }
                }
            }

            if (mines == 0) {
                result[targetY][targetX] = ACTIVATE_CLEAR_BUTTON;

                for (int row = targetY - 1; row <= targetY + 1; row++) {
                    if (row < 0 || row >= board.length) continue;

                    for (int col = targetX - 1; col <= targetX + 1; col++) {
                        if (col < 0 || col >= board[row].length()) continue;

                        if (!visited[row][col]) {
                            pointQueue.add(new int[]{row, col});
                        }
                    }
                }
            } else {
                result[targetY][targetX] = (char) (mines + '0');
            }
        }

        String[] answer = new String[board.length];
        for (int i = 0; i < result.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < result[i].length; j++) {
                if (result[i][j] == NULL_CHARACTER) {
                    sb.append(CLEAR);
                } else {
                    sb.append(result[i][j]);
                }
            }
            answer[i] = sb.toString();
        }
        return answer;
    }

    /**
     * 해당 문자열의 인덱스를 다른 문자로 바꿔서 반환하는 함수
     * <p>
     * deprecated
     * 성능이 안좋음
     *
     * @param s
     * @param index
     * @param replace
     * @return
     */
    private static String replaceTargetIndex(String s, int index, char replace) {
        return s.substring(0, index) + replace + s.substring(index + 1);
    }

    public static void main(String[] args) {
        String[] board1 = new String[]{"EEEEE", "EEMEE", "EEEEE", "EEEEE"};

        Solution3 obj = new Solution3();
        String[] result = obj.solution(board1, 2, 0);
        System.out.println(result);
    }
}

/**
 * 지뢰 찾기
 * <p>
 * 지뢰 => 게임 오버 => 숨겨진 지뢰 화면에 표시
 * <p>
 * 맞닿은 둘레에 숨겨져있는 지뢰 갯수가 나타남
 * 나타나는 숫자 1 이상 => 하나만 열림
 * 지롸가 없다 => 활성화된 채 빈 단추 => 인접된 공간에서 아직 열리지 않은 단추 열림
 * <p>
 * 정확성 테스트
 * 테스트 1 〉 실패 (시간 초과)
 * 테스트 2 〉 실패 (시간 초과)
 * 테스트 3 〉 실패 (시간 초과)
 * 테스트 4 〉 실패 (시간 초과)
 * 테스트 5 〉 실패 (시간 초과)
 * 테스트 6 〉 실패 (시간 초과)
 * 테스트 7 〉 실패 (시간 초과)
 * 테스트 8 〉 실패 (시간 초과)
 * 테스트 9 〉 실패 (시간 초과)
 * 테스트 10 〉 실패 (시간 초과)
 * 테스트 11 〉 실패 (시간 초과)
 * 테스트 12 〉 통과 (249.90ms, 152MB)
 * 테스트 13 〉 통과 (0.24ms, 77.9MB)
 * 테스트 14 〉 통과 (0.21ms, 74.7MB)
 * 테스트 15 〉 실패 (시간 초과)
 * 테스트 16 〉 통과 (6616.89ms, 1.4GB)
 * 테스트 17 〉 통과 (0.24ms, 72.1MB)
 * 테스트 18 〉 실패 (시간 초과)
 * 테스트 19 〉 통과 (12.37ms, 85.5MB)
 * 테스트 20 〉 통과 (0.13ms, 73.2MB)
 * 채점 결과
 * 합계: 2 / 2
 */