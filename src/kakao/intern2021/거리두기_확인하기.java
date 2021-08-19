package kakao.intern2021;

import java.util.ArrayList;
import java.util.List;

/**
 * 2021-08-15
 * 완전탐색을 이용하기
 * DFS, BFS도 완전탐색에 한 방법이라는 것을 기억하기
 */
public class 거리두기_확인하기 {
    
    public int[] solution(String[][] places) {
        int[] answer = new int[places.length];

        int count = 0;
        for (String[] waitingRoom : places) {
            boolean result = checkWaitingRoom(waitingRoom);
            answer[count] = result ? 1 : 0;
            count++;
        }

        return answer;
    }

    private int getManhattanDistance(Point p1, Point p2) {
        return Math.abs(p1.getRow() - p2.getRow()) + Math.abs(p1.getColumn() - p2.getColumn());
    }

    private boolean checkWaitingRoom(String[] waitingRoom) {
        final int row = waitingRoom.length;
        final int col = waitingRoom[0].length();

        // 대기실을 2차원 char 배열로 구조를 바꿈
        char[][] converted = new char[row][col];

        // 응시자 위치 기록
        List<Point> positions = new ArrayList<>();

        for (int i = 0; i < row; i++) {
            String line = waitingRoom[i];

            for (int j = 0; j < col; j++) {
                char value = line.charAt(j);
                converted[i][j] = value;

                // 응시자이면 위치 기록
                if (value == 'P') positions.add(new Point(i, j));
            }
        }

        // 응시자 간에 서로 비교
        int size = positions.size();

        for (int i = 0; i < size; i++) {
            Point p1 = positions.get(i);

            for (int j = 0; j < size; j++) {
                if (i == j) continue;
                Point p2 = positions.get(j);

                // p1과 p2의 맨해튼 거리 비교
                int dist = getManhattanDistance(p1, p2);

                // 2보다 작으면 더 확인필요
                if (dist == 1) return false;
                if (dist == 2) {
                    int r1 = p1.getRow();
                    int r2 = p2.getRow();
                    int c1 = p1.getColumn();
                    int c2 = p2.getColumn();

                    // 일렬로 늘어선 모양
                    if (r1 == r2 || c1 == c2) {
                        int midRow = (r1 + r2) / 2;
                        int midCol = (c1 + c2) / 2;
                        char value = converted[midRow][midCol];
                        if (value != 'X') return false;
                    } else {
                        char value1 = converted[r1][c2];
                        char value2 = converted[r2][c1];
                        if (value1 != 'X' || value2 != 'X') return false;
                    }
                }
            }
        }

        return true;
    }

    class Point {
        private int r;
        private int c;

        Point(int r, int c) {
            this.r = r;
            this.c = c;
        }

        public int getRow() {
            return r;
        }

        public int getColumn() {
            return c;
        }
    }

// 모든 응시자가 맨해튼 거리가 2이하로 앉지 말기
// 응시자 간에 파티션으로 막혀있으면 괜찮
// 거리두기 잘 지키고 있는지 확인
// 거리두기를 지키고 있으면 1
// 한 명이라도 지키고 있지 않으면 0
}
