package programmers.skillcheck.level3;

import java.util.ArrayList;
import java.util.List;

public class Gps {

    public int solution(int n, int m, int[][] edge_list, int k, int[] gps_log) {

        /*
            손님이 자주 탑승하는 위치 추천
            승하자 및 이동 경로 수집 분석

            GPS 신호 불량, 통신 오류
            하지만 이동 경로에만 오류..
            승하차는 올바름

            택시는 거점을 이동해 다니며,
            거점 간의 이동은 도로가 있는 경우만 가능

            도로는 방향이 없다

            택시가 보낸 경로에서 이동 가능한 경로로 만드는
            최소의 오류 수정 횟수?
        */

        // 거점 x에서 y로 이동 가능한지 표시하는 배열
        // 배열을 쓰는 이유? -> 인덱스만 알면 접근 속도가 빠르므로..
        // todo kbt : 변수 이름 괜찮나?
        boolean[][] moving_available = new boolean[n][n];

        for (int i = 0; i < edge_list.length; i++) {
            int x = edge_list[i][0] - 1;
            int y = edge_list[i][1] - 1;

            moving_available[x][y] = true;
            moving_available[y][x] = true;
        }


        // 시작지에서 출발지까지 이동하는데에 최소 오류 교정 수를 구해야함
        // 한 거점에 머무르기, 왔던길 되돌아가기 가능
        // (예외) 이동이 아예 불가능한 경우 -> 시작지에서 도착지까지 gps 신호내에 도착 불가 -> return -1
        // 최단으로 갔을때 신호수 > 택시가 보낸 신호의 수
        List<Integer> time_of_moving = new ArrayList<>();
        List<Integer> visited = new ArrayList<>();
        visited.add(gps_log[0] - 1);
        bfs(visited, gps_log[gps_log.length - 1] - 1, moving_available, time_of_moving);

        time_of_moving.sort(Integer::compareTo);
//        System.out.println(time_of_moving);

        if (time_of_moving.size() == 0 || time_of_moving.get(0) > k) {
            return -1;
        }

        // greedy하게?
        // 이동이 불가능한 것부터 변경?
        int answer = 0;

        for (int i = 0; i < gps_log.length - 1; i++) {
            int current = gps_log[i] - 1;
            int next = gps_log[i + 1] - 1;

            if (moving_available[current][next]) {

            } else {
                answer++;
            }
        }

        return answer;
    }

    private void bfs(List<Integer> visited, int final_destination, boolean[][] moving_available, List<Integer> time_of_moving) {
        if (visited.contains(final_destination)) {
            time_of_moving.add(visited.size());
            return;
        }

        int currentPosition = visited.get(visited.size() - 1);
        boolean[] moving = moving_available[currentPosition];

        for (int i = 0; i < moving.length; i++) {
            // 인덱스가 동일한 것 처리
            if (currentPosition == i) continue;

            // 이미 지나간 거점 처리
            if (visited.contains(i)) continue;

            if (moving[i]) {
                List<Integer> newVisited = new ArrayList<>(visited);
                newVisited.add(i);
                bfs(newVisited, final_destination, moving_available, time_of_moving);
            }
        }
    }

    public static void main(String[] args) {
        Gps obj = new Gps();

        int n_1 = 7;
        int m_1 = 10;
        int[][] edge_list = {{1, 2}, {1, 3}, {2, 3}, {2, 4}, {3, 4}, {3, 5}, {4, 6}, {5, 6}, {5, 7}, {6, 7}};
        int k_1 = 6;
        int[] gps_log = {1, 2, 3, 3, 6, 7};

        obj.solution(n_1, m_1, edge_list, k_1, gps_log);
    }
}

/*
오류 처리와..
기본 아이디어는 대강 이해했는데
어떤 방법을 써야 해답을 구할지 모르겠음 ㅠㅠ..
 */