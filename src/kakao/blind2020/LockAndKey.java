package kakao.blind2020;

public class LockAndKey {
    public boolean solution(int[][] key, int[][] lock) {
        final int M = key.length;
        final int N = lock.length;
        final int iter = key.length * 2 + lock.length;

        // 가상의 공간 생성
        // 가상의 공간 가운데에 lock을 배치
        int[][] grid = new int[iter][iter];
        for (int i = M; i < M + N; i++) {
            for (int j = M; j < M + N; j++) {
                grid[i][j] = lock[i - M][j - M];
            }
        }


        // 가상의 공간에서 모든 경우에 대해서 계산한다
        // key가 최소 한칸은 걸쳐야 한다
        for (int i = 1; i < M + N - 1; i++) {
            for (int j = 1; j < M + N - 1; j++) {
                // 가상의 공간 위에 있는 key
                int[][] temp_key = new int[iter][iter];
                for (int a = 0; a < M; a++) {
                    for (int b = 0; b < M; b++) {
                        temp_key[i + a][j + b] = key[a][b];
                    }
                }

                // key를 회전 시킨다
                // 90, 180 ,270, 360(==0)
                for (int x = 0; x < 4; x++) {
                    if (x != 0) rotate_ninty_degree(temp_key);

                    // 가상의 공간 내의
                    // lock 과 key가 만났을 때 모두 1이 되는지 확인한다
                    boolean check = true;
                    for (int a = M; a < M + N; a++) {
                        for (int b = M; b < M + N; b++) {
                            if (grid[a][b] + temp_key[a][b] == 0) {
                                check = false;
                                break;
                            }
                        }
                    }
                    if (check) {
                        return true;
                    }
                }
            }
        }
        return false;
    }


    private void rotate_ninty_degree(int[][] lock) {
        final int lock_length = lock.length;

        // 배열 복사
        int[][] copied = new int[lock_length][lock_length];
        for (int i = 0; i < lock_length; i++) {
            for (int j = 0; j < lock_length; j++) {
                lock[i][j] = copied[i][j];
            }
        }

        for (int i = 0; i < lock_length; i++) {
            for (int j = 0; j < lock_length; j++) {
                lock[i][j] = copied[lock_length - 1 - j][i];
            }
        }
    }

    public static void main(String[] args) {
        LockAndKey obj = new LockAndKey();

//        [[0, 0, 0], [1, 0, 0], [0, 1, 1]]	[[1, 1, 1], [1, 1, 0], [1, 0, 1]]
        int[][] key1 = {{0, 0, 0}, {1, 0, 0}, {0, 1, 1}};
        int[][] lock1 = {{1, 1, 1}, {1, 1, 0}, {1, 0, 1}};
        System.out.println(obj.solution(key1, lock1));
    }
}


/*
왜.. 틀리지..
JS로 다시 풀어봐야겠다..
Array 로그 찍어보는게 너무 힘들다..ㅋㅋ
 */