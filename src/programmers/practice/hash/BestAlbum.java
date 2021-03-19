package programmers.practice.hash;

import java.util.*;
import java.util.stream.Collectors;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 베스트앨범
 *
 * 베스트앨범 (BestAlbum)
 * https://programmers.co.kr/learn/courses/30/lessons/42579
 */
public class BestAlbum {

    public int[] solution(String[] genres, int[] plays) {

        // 장르 : (고유번호 : 재생 횟수) 의 맵 선언
        Map<String, Map<Integer, Integer>> map = new HashMap<>();

        // 장르 : 노래재생수 맵 만들기
        Map<String, Integer> genreAndTotalPlayCountMap = new HashMap<>();

        // 출력 순서 리스트 선언
        List<Integer> order = new ArrayList<>();

        for (int i = 0; i < genres.length; i++) {
            String genre = genres[i];
            int playCount = plays[i];

            Map<Integer, Integer> keyAndPlayCountMap;
            // 장르 key에 대한 (고유번호 : 재생 횟수) 맵 value 가 존재하는지 확인
            if (map.containsKey(genre)) {
                // get map
                keyAndPlayCountMap = map.get(genre);
            } else {
                // new map
                keyAndPlayCountMap = new HashMap<>();
                map.put(genre, keyAndPlayCountMap);
            }
            // 고유번호 : 재생 횟수 값을 넣는다
            keyAndPlayCountMap.put(i, playCount);

            // 장르 : 재생 횟수 값을 넣거나 업데이트 한다
            if (genreAndTotalPlayCountMap.containsKey(genre)) {
                genreAndTotalPlayCountMap.put(genre, genreAndTotalPlayCountMap.get(genre) + playCount);
            } else {
                genreAndTotalPlayCountMap.put(genre, playCount);
            }
        }

        // System.out.println(map);

        // 기준 1 - 제일 많이 재생된 장르 부터
        List<Map.Entry<String, Integer>> entryList = genreAndTotalPlayCountMap
                .entrySet()
                .stream()
                .sorted((o1, o2) -> Integer.compare(o2.getValue(), o1.getValue()))
                .collect(Collectors.toList());

        entryList.forEach(entry -> {
            String genre = entry.getKey();
            Map<Integer, Integer> keyAndPlayCountMap = map.get(genre);

            keyAndPlayCountMap
                    .entrySet()
                    .stream()
                    .sorted((o1, o2) -> {
                        int k1 = o1.getKey();
                        int k2 = o2.getKey();

                        int v1 = o1.getValue();
                        int v2 = o2.getValue();

                        // 기준2 - 장르중 많이 재생된 순서부터
                        if (v2 > v1) {
                            return 1;
                        } else if (v2 == v1) {
                            // 기준3 - 재생 횟수가 같다면 고유 번호가 낮은 순
                            return Integer.compare(k1,k2);
                        } else {
                            return -1;
                        }
                    })
                    .limit(2) // 각 장르의 노래는 최대 2개이다
                    .forEach(keyAndPlayCountEntry -> {
                        // 각 장르의 정렬된 순서대로 order list 에 넣는다
                        order.add(keyAndPlayCountEntry.getKey());
                    });
        });

        return order.stream().mapToInt(i->i).toArray();
    }
}

/**
 * 2021-03-19
 * 자바 스트림을 이해하고 공부하기 위한 좋은 시간이 되었다
 * map collection 에서 stream 을 쓰려면 entry set 을 얻은 후에 스트림을 열면 되었다!!
 * 
 * 시간 부분적에서 살짝 느릴 수도 있겠지만 읽을 수 있는 코딩이 되는것 같음
 * 
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (18.93ms, 53MB)
 * 테스트 2 〉	통과 (13.00ms, 52.8MB)
 * 테스트 3 〉	통과 (15.11ms, 53.4MB)
 * 테스트 4 〉	통과 (11.93ms, 53.2MB)
 * 테스트 5 〉	통과 (15.00ms, 53.2MB)
 * 테스트 6 〉	통과 (10.15ms, 52.4MB)
 * 테스트 7 〉	통과 (13.29ms, 52.4MB)
 * 테스트 8 〉	통과 (16.57ms, 53MB)
 * 테스트 9 〉	통과 (9.49ms, 52.8MB)
 * 테스트 10 〉	통과 (18.37ms, 53.5MB)
 * 테스트 11 〉	통과 (13.40ms, 52.7MB)
 * 테스트 12 〉	통과 (16.15ms, 52.7MB)
 * 테스트 13 〉	통과 (13.28ms, 53.4MB)
 * 테스트 14 〉	통과 (10.09ms, 54.2MB)
 * 테스트 15 〉	통과 (9.92ms, 52.9MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */