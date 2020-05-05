import java.util.*;

/**
 * 2019 카카오 개발자 겨울 인턴쉽
 * 튜플
 *
 * @See <a href="https://programmers.co.kr/learn/courses/30/lessons/64065">https://programmers.co.kr/learn/courses/30/lessons/64065</a>
 */
public class Tuple {

    public static int[] solution(String s) {
        // 앞뒤 입력받은 문자에서 앞 - { 뒤 - }} 제거
        String input = s.substring(1, s.length() - 2);

        // 문자열을 "}," 단위로 스플릿한다
        String[] inputs = input.split("},");

        Map<Integer, List<Integer>> map = new HashMap<>();

        for (int i = 0; i < inputs.length; i++) {
            // 각각 스플릿 된 문자에서 {를 제거한다
            String temp = inputs[i];
            temp = temp.substring(1, temp.length());

            // 각각 스플릿 된 문자를 "," 로 스플릿한다
            String[] arr = temp.split(",");

            // 각 원소들을 맵에 담는다
            // 키는 원소의 갯수이다
            List<Integer> list = new ArrayList<>();
            for (String str : arr) {
                list.add(Integer.parseInt(str));
            }
            map.put(list.size(), list);
        }

        List<Integer> tuple = new ArrayList<>();
        for (int i = 1; i <= map.size(); i++) {
            List<Integer> list = map.get(i);

            // tuple에 없는 원소 추가
            for (int element : list) {
                if (!tuple.contains(element)) {
                    tuple.add(element);
                }
            }
        }

        return tuple.stream().mapToInt(i -> i).toArray();
    }

    public static void main(String[] args) {
        String s_1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
        // [2, 1, 3, 4]

        String s_2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
        // [2, 1, 3, 4]

        String s_3 = "{{20,111},{111}}";
        // [111, 20]

        String s_4 = "{{123}}";
        // [123]

        String s_5 = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
        // [3, 2, 4, 1]


        System.out.println(Arrays.toString(solution(s_1)));
        System.out.println(Arrays.toString(solution(s_2)));
        System.out.println(Arrays.toString(solution(s_3)));
        System.out.println(Arrays.toString(solution(s_4)));
        System.out.println(Arrays.toString(solution(s_5)));
    }
}

/*
채점을 시작합니다.
    정확성  테스트
    테스트 1 〉	통과 (6.34ms, 52.4MB)
    테스트 2 〉	통과 (8.80ms, 50.7MB)
    테스트 3 〉	통과 (12.51ms, 52.9MB)
    테스트 4 〉	통과 (7.50ms, 52.6MB)
    테스트 5 〉	통과 (12.00ms, 52.8MB)
    테스트 6 〉	통과 (13.60ms, 53.4MB)
    테스트 7 〉	통과 (48.14ms, 54.2MB)
    테스트 8 〉	통과 (75.53ms, 60.5MB)
    테스트 9 〉	통과 (55.45ms, 58.5MB)
    테스트 10 〉	통과 (87.16ms, 62.1MB)
    테스트 11 〉	통과 (97.11ms, 68.7MB)
    테스트 12 〉	통과 (114.76ms, 77.3MB)
    테스트 13 〉	통과 (131.29ms, 76.6MB)
    테스트 14 〉	통과 (119.90ms, 75.3MB)
    테스트 15 〉	통과 (5.72ms, 52.4MB)
    채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/
