package kakao.tryout2017;

public class 카카오프렌즈_컬러링북 {

    public int[] solution(int m, int n, int[][] picture) {
        int maxSize = 0;
        int count = 0;
        boolean[][] visited = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int value = picture[i][j];
                int size = dfs(value, i, j, visited, picture);
                if (size != 0) count++;
                if (maxSize < size) maxSize = size;
            }
        }

        return new int[]{count, maxSize};
    }

    private int dfs(int compareValue, int i, int j, boolean[][] visited, int[][] picture) {
        if (visited[i][j] || picture[i][j] == 0) return 0; // 이미 방문한 장소 종료

        final int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        final int BOUNDARY_ROW = picture.length;
        final int BOUNDARY_COL = picture[0].length;
        visited[i][j] = true;
        int size = 1;

        for (int[] dir : directions) {
            int nextRow = i + dir[0];
            int nextCol = j + dir[1];

            if (nextRow >= BOUNDARY_ROW || nextRow < 0) continue;
            if (nextCol >= BOUNDARY_COL || nextCol < 0) continue;
            if (visited[nextRow][nextCol]) continue;

            int value = picture[nextRow][nextCol];
            if (value == 0) continue;
            if (value != compareValue) continue;
            size += dfs(compareValue, nextRow, nextCol, visited, picture);
        }

        return size;
    }

    public static void main(String[] args) {
        카카오프렌즈_컬러링북 obj = new 카카오프렌즈_컬러링북();
        int[][] picture = new int[][]
                {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
        obj.solution(6, 4, picture);
    }

}

/**
 * 2021-08-06
 * 깔끔한 DFS 문제였다
 * 간만에 DFS를 다시 점검할 수 있는 문제였음!
 */