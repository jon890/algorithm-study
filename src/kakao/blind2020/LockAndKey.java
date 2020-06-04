package kakao.blind2020;

public class LockAndKey {
    public boolean solution(int[][] key, int[][] lock) {
        final int M = key.length;
        final int N = lock.length;
        final int space = key.length * 2 + lock.length;

        // 가상의 공간 생성
        // 가상의 공간 가운데에 lock을 배치
        int[][] grid = new int[space][space];
        for (int i = M; i < M + N; i++) {
            for (int j = M; j < M + N; j++) {
                grid[i][j] = lock[i - M][j - M];
            }
        }

        // 가상의 공간에서 모든 경우에 대해서 계산한다
        for (int i = 0; i < M + N ; i++) {
            for (int j = 0; j < M + N; j++) {
                // 가상의 공간 위에 있는 key
                int[][] temp_key = new int[space][space];
                for (int a = 0; a < M; a++) {
                    for (int b = 0; b < M; b++) {
                        temp_key[i + a][j + b] = key[a][b];
                    }
                }

                // key를 회전 시킨다
                // 90, 180 ,270, 360(==0)
                for (int x = 0; x < 4; x++) {
                    if (x != 0) rotate_ninety_degree(temp_key);

                    // 가상의 공간 내의
                    // lock 과 key 의 값을 비교 한다
                    boolean check = true;
                    for (int a = M; a < M + N; a++) {
                        for (int b = M; b < M + N; b++) {
                            int lock_and_key = grid[a][b] + temp_key[a][b];
                            if (lock_and_key == 0 || lock_and_key == 2) {
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


    private void rotate_ninety_degree(int[][] lock) {
        final int lock_length = lock.length;

        // 배열 복사
        int[][] copied = new int[lock_length][lock_length];
        for (int i = 0; i < lock_length; i++) {
            for (int j = 0; j < lock_length; j++) {
                copied[i][j] = lock[i][j];
            }
        }

        for (int i = 0; i < lock_length; i++) {
            for (int j = 0; j < lock_length; j++) {
                lock[i][j] = copied[lock_length - 1 - j][i];
            }
        }

//        System.out.println("########## 주어진 직방 행렬을 90도 회전 한다 ##########");
//        System.out.println("기존 배열");
//        print_2_dimension_array(copied);
//
//        System.out.println("\n");
//        System.out.println("회전후 배열");
//        print_2_dimension_array(lock);
//        System.out.println("########## 출력 종료 ##########");
    }

    private void print_2_dimension_array(int[][] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print("[");
            for (int j =0; j <array.length; j++) {
                System.out.print(array[i][j]);
                if (j != array.length - 1)
                    System.out.print(", ");
            }
            System.out.print("]\n");
        }
    }

    public static void main(String[] args) {
        LockAndKey obj = new LockAndKey();

        int[][] key1 = {{0, 0, 0}, {1, 0, 0}, {0, 1, 1}};
        int[][] lock1 = {{1, 1, 1}, {1, 1, 0}, {1, 0, 1}};
        System.out.println(obj.solution(key1, lock1));

//        obj.rotate_ninety_degree(key1);
    }
}


/*
2020-06-03
왜.. 틀리지..
JS로 다시 풀어봐야겠다..
Array 로그 찍어보는게 너무 힘들다..ㅋㅋ

2020-06-04
오류 찾는건 역시 제일 작은 단게부터 추적해보면 되는거였다.
테스트케이스 6번 반례는 내 생각엔 이미 처음부터 답이 되는 자물쇠 인듯하다

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.75ms, 52.6MB)
테스트 2 〉	통과 (0.57ms, 52.3MB)
테스트 3 〉	통과 (8.27ms, 56.4MB)
테스트 4 〉	통과 (0.76ms, 52.7MB)
테스트 5 〉	통과 (14.95ms, 55.5MB)
테스트 6 〉	통과 (21.77ms, 57MB)
테스트 7 〉	통과 (63.40ms, 72.3MB)
테스트 8 〉	통과 (82.19ms, 77.2MB)
테스트 9 〉	통과 (82.39ms, 75.4MB)
테스트 10 〉	통과 (127.38ms, 115MB)
테스트 11 〉	통과 (83.89ms, 91MB)
테스트 12 〉	통과 (0.56ms, 52MB)
테스트 13 〉	통과 (10.55ms, 54.5MB)
테스트 14 〉	통과 (4.04ms, 52.2MB)
테스트 15 〉	통과 (2.88ms, 52.4MB)
테스트 16 〉	통과 (13.59ms, 53.4MB)
테스트 17 〉	통과 (8.66ms, 54.8MB)
테스트 18 〉	통과 (32.38ms, 59.8MB)
테스트 19 〉	통과 (2.58ms, 50.8MB)
테스트 20 〉	통과 (51.70ms, 66.3MB)
테스트 21 〉	통과 (33.87ms, 65.2MB)
테스트 22 〉	통과 (13.47ms, 52.4MB)
테스트 23 〉	통과 (4.23ms, 52.3MB)
테스트 24 〉	통과 (4.62ms, 52.1MB)
테스트 25 〉	통과 (68.51ms, 76.8MB)
테스트 26 〉	통과 (102.98ms, 75.4MB)
테스트 27 〉	통과 (91.65ms, 102MB)
테스트 28 〉	통과 (19.17ms, 54.5MB)
테스트 29 〉	통과 (7.38ms, 55MB)
테스트 30 〉	통과 (24.25ms, 58.7MB)
테스트 31 〉	통과 (55.93ms, 68.6MB)
테스트 32 〉	통과 (94.85ms, 76.1MB)
테스트 33 〉	통과 (23.30ms, 59.2MB)
테스트 34 〉	통과 (2.05ms, 52.9MB)
테스트 35 〉	통과 (2.37ms, 52.4MB)
테스트 36 〉	통과 (5.08ms, 50.6MB)
테스트 37 〉	통과 (5.38ms, 52.8MB)
테스트 38 〉	통과 (2.38ms, 50MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */