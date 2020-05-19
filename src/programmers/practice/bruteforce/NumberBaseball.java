package programmers.practice.bruteforce;

import java.util.ArrayList;
import java.util.List;

/**
 * 프로그래머스
 * 코딩테스트 연습
 * 전체탐색 (Brute-Force)
 *
 * 숫자 야구
 * https://programmers.co.kr/learn/courses/30/lessons/42841
 */
public class NumberBaseball {

    public int solution(int[][] baseball) {
        List<List<Integer>> available = new ArrayList<>();

        for (int[] not_used : baseball) {
            available.add(new ArrayList<>());
        }

        for (int i = 0; i < baseball.length; i++) {
            int number = baseball[i][0];
            int[] number_array = new int[3];
            number_array[0] = (number / 100) % 10;
            number_array[1] = (number / 10) % 10;
            number_array[2] = number % 10;

            int strikes = baseball[i][1];
            int balls = baseball[i][2];

            for (int j = 100; j < 1000; j++) {
                int[] checking_number = new int[3];
                checking_number[0] = (j / 100) % 10;
                checking_number[1] = (j / 10) % 10;
                checking_number[2] = j % 10;

                int checking_strikes = 0;
                int checking_balls = 0;

                // 0은 사용 불가
                if (checking_number[0] == 0 ||
                        checking_number[1] == 0 ||
                        checking_number[2] == 0)
                    continue;

                // 각 자리 숫자가 다른 수를 검사
                if (checking_number[0] == checking_number[1] ||
                        checking_number[0] == checking_number[2] ||
                        checking_number[1] == checking_number[2]) continue;

                for (int k = 0; k < number_array.length; k++) {
                    if (number_array[k] == checking_number[k])
                        checking_strikes++;

                    for (int l = 0; l < number_array.length; l++) {
                        if (k == l)
                            continue;

                        if (number_array[k] == checking_number[l])
                            checking_balls++;
                    }
                }

                if (strikes == checking_strikes && balls == checking_balls) {
                    List<Integer> list = available.get(i);
                    list.add(j);
                }
            }
        }

        // 각 경우에 공통된 수를 찾기
        int answer = 0;

        int minListSize = Integer.MAX_VALUE;
        List<Integer> minList = null;

        for (List<Integer> list : available) {
            int listSize = list.size();
            if (minListSize >= listSize) {
                minListSize = listSize;
                minList = list;
            }
        }

        for (int number : minList) {
            Integer number_obj = Integer.valueOf(number);

            boolean flag = true;

            for (int j = 0; j < available.size(); j++) {
                List<Integer> other_list = available.get(j);
                if (!other_list.contains(number_obj))
                    flag = false;
            }

            if (flag)
                answer++;
        }

        return answer;
    }
}

/*
정확성  테스트
테스트 1 〉	통과 (3.72ms, 50.3MB)
테스트 2 〉	통과 (4.11ms, 53.8MB)
테스트 3 〉	통과 (2.89ms, 52MB)
테스트 4 〉	통과 (5.99ms, 50.5MB)
테스트 5 〉	통과 (4.53ms, 52.3MB)
테스트 6 〉	통과 (1.60ms, 52.4MB)
테스트 7 〉	통과 (3.26ms, 52.4MB)
테스트 8 〉	통과 (4.97ms, 52.4MB)
테스트 9 〉	통과 (7.25ms, 50.4MB)
테스트 10 〉	통과 (3.13ms, 52.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
