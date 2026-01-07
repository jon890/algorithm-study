package banksalad;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Solution3 {

    /**
     *
     */
    private static final String DELIMITER = " ";

    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in));) {
            final StringTokenizer st = new StringTokenizer(br.readLine());
            final int N = Integer.parseInt(st.nextToken());
            final int M = Integer.parseInt(st.nextToken());

            final int[][] grid = new int[N][M];
            final int[][] dist = new int[N][M];
            final long[][] count = new long[N][M];

            for (int i = 0; i < N; i++) {
                StringTokenizer gridTokenizer = new StringTokenizer(br.readLine());
                for (int j = 0; j < M; j++) {
                    grid[i][j] = Integer.parseInt(gridTokenizer.nextToken());
                    dist[i][j] = -1; // 방문하지 않음
                }
            }

            bfs(N, M, grid, dist, count);

            System.out.println(count[N -1][M - 1]);

        } catch (IOException e) {
            throw new RuntimeException("error on reading system.in");
        }
    }

    static void bfs(int N, int M, int[][] grid, int[][] dist, long[][] count) {
        Queue<int[]> queue = new LinkedList<>();

        queue.offer(new int[] {0, 0});
        dist[0][0] = 0;
        count[0][0] = 1;

        int[] dr = {-1, -1, 0, 1, 1, 1, 0 -1};
        int[] dc = {0, 1, 1, 1, 0, -1, -1, -1};

        int mod = 1_000_000_007;

        while(!queue.isEmpty()) {
            int[] current = queue.poll();
            int r = current[0];
            int c = current[1];

            int value = grid[r][c];

            for (int i = 0; i < 8; i++) {
                boolean movable = ((value >> i) & 1) == 1;
                if (!movable) {
                    continue;
                }

                int nr = r + dr[i];
                int nc = c + dc[i];

                if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
                    if (dist[nr][nc] == -1) {
                        dist[nr][nc] = dist[r][c] + 1;
                        count[nr][nc] = count[r][c];
                        queue.offer(new int[] { nr, nc });
                    } else if (dist[nr][nc] == dist[r][c] + 1) {
                        count[nr][nc] = (count[nr][nc] + count[r][c]) % mod;
                    }
                }
            }
        }
    }
}
