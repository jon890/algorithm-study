package programmers.practice.hash;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 해쉬
 *
 * 위장 (Camouflage)
 * https://programmers.co.kr/learn/courses/30/lessons/42578?language=java
 */
public class Camouflage {

    public int solution(String[][] clothes) {
        // 타입 : 옷 리스트의 맵 선언
        Map<String, List<String>> map = new HashMap<>();

        // clothes 배열을 돌면서 맵에 담음
        for (int i = 0; i < clothes.length; i++) {
            String[] nameAndType = clothes[i];
            String clothName = nameAndType[0];
            String type = nameAndType[1];

            List<String> list;

            // 해당 타입이 맵에 있는지 확인
            if (map.containsKey(type)) {
                // get List
                list = map.get(type);
            } else {
                // new List
                list = new ArrayList<>();
                map.put(type, list);
            }

            list.add(clothName);
        }

        // System.out.println(map);
        int[] answer = new int[1];
        answer[0] = 1; // 초깃값

        map.forEach((type, list) -> answer[0] *= list.size() + 1);

        return answer[0] - 1;
    }
}

/**
 * 2020-03-19
 *
 * 수학적 지식을 알면 편하다
 * 원소의 갯수를 구할때 +1 한다음에 -1하는 테크닉
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (1.09ms, 52.6MB)
 * 테스트 2 〉	통과 (3.41ms, 52.8MB)
 * 테스트 3 〉	통과 (0.59ms, 53.7MB)
 * 테스트 4 〉	통과 (1.04ms, 52.2MB)
 * 테스트 5 〉	통과 (0.97ms, 53.3MB)
 * 테스트 6 〉	통과 (1.06ms, 52.5MB)
 * 테스트 7 〉	통과 (1.00ms, 52.1MB)
 * 테스트 8 〉	통과 (1.14ms, 52.4MB)
 * 테스트 9 〉	통과 (0.97ms, 52.8MB)
 * 테스트 10 〉	통과 (0.94ms, 52.9MB)
 * 테스트 11 〉	통과 (0.92ms, 53MB)
 * 테스트 12 〉	통과 (1.09ms, 52.5MB)
 * 테스트 13 〉	통과 (0.91ms, 52.2MB)
 * 테스트 14 〉	통과 (0.72ms, 52.7MB)
 * 테스트 15 〉	통과 (1.10ms, 53.1MB)
 * 테스트 16 〉	통과 (0.95ms, 52.3MB)
 * 테스트 17 〉	통과 (0.98ms, 53.1MB)
 * 테스트 18 〉	통과 (0.98ms, 52.9MB)
 * 테스트 19 〉	통과 (0.82ms, 52.2MB)
 * 테스트 20 〉	통과 (0.99ms, 52.1MB)
 * 테스트 21 〉	통과 (0.94ms, 53MB)
 * 테스트 22 〉	통과 (1.02ms, 52.5MB)
 * 테스트 23 〉	통과 (3.63ms, 52.7MB)
 * 테스트 24 〉	통과 (0.93ms, 52.9MB)
 * 테스트 25 〉	통과 (0.98ms, 52MB)
 * 테스트 26 〉	통과 (0.95ms, 52.5MB)
 * 테스트 27 〉	통과 (0.99ms, 52.8MB)
 * 테스트 28 〉	통과 (0.93ms, 51.7MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */