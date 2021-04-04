package programmers.practice.monthly_code_challenge;

/**
 * 삼각 달팽이
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68645?language=java
 */
public class 삼각_달팽이 {

    private enum Direction {
        DOWN, // 아래 방
        RIGHT, // 오른쪽 방향
        TOP_DIAGONAL // 위쪽 대각선 방향
    }

    public int[] solution(int n) {

        // n * n 배열 선언
        int[][] triangle_snail = new int[n][n];

        // 행, 열 인덱스 변수 선언
        int row = -1;
        int column = 0;

        // 방향이 변해야할지 확인하는 다음 행,열 인덱스 변수 선언
        int nextRow;
        int nextColumn;

        // 초기 방향은 아래로 선언
        Direction direction = Direction.DOWN;

        // 끝 값 찾기 (1 + 2 + ... + n)
        int last = (n * (n + 1)) / 2;

        for (int i = 1; i <= last; i++) {

            // 방향에 맞춰서 행과 열을 조절
            switch (direction) {
                case DOWN:
                    row++;
                    break;
                case RIGHT:
                    column++;
                    break;
                case TOP_DIAGONAL:
                    row -= 1;
                    column -= 1;
                    break;
            }

            triangle_snail[row][column] = i;

            // 방향의 끝에 도달 했는지 확인후 방향 변경
            switch (direction) {
                case DOWN:
                    nextRow = row + 1;
                    if (nextRow >= n || triangle_snail[nextRow][column] > 0) {
                        direction = Direction.RIGHT;
                    }
                    break;
                case RIGHT:
                    nextColumn = column + 1;
                    if (nextColumn >= n || triangle_snail[row][nextColumn] > 0) {
                        direction = Direction.TOP_DIAGONAL;
                    }
                    break;
                case TOP_DIAGONAL:
                    nextRow = row - 1;
                    nextColumn = column - 1;
                    if (triangle_snail[nextRow][nextColumn] > 0) {
                        direction = Direction.DOWN;
                    }
                    break;
            }
        }

        return concat(last, triangle_snail);
    }

    private int[] concat(int count, int[][] triangle_snail) {
        int[] array = new int[count];

        int index = -1;

        for (int i = 0; i < triangle_snail.length; i++) {
            for (int j = 0; j < triangle_snail[i].length; j++) {
                int number = triangle_snail[i][j];

                if (number > 0) {
                    index++;
                    array[index] = number;
                }
            }
        }

        return array;
    }

    public static void main(String[] args) {
        삼각_달팽이 obj = new 삼각_달팽이();
        obj.solution(4);
    }
}

/**
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.46ms, 52MB)
 * 테스트 2 〉	통과 (0.53ms, 53.1MB)
 * 테스트 3 〉	통과 (0.50ms, 52.2MB)
 * 테스트 4 〉	통과 (1.64ms, 53.9MB)
 * 테스트 5 〉	통과 (1.55ms, 54.7MB)
 * 테스트 6 〉	통과 (1.47ms, 54MB)
 * 테스트 7 〉	통과 (51.41ms, 113MB)
 * 테스트 8 〉	통과 (48.89ms, 116MB)
 * 테스트 9 〉	통과 (50.98ms, 114MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */