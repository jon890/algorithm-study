package kakao.winterintern2019;

import java.util.ArrayList;
import java.util.List;

/**
 * 2019 카카오 개발자 겨울 인턴쉽
 * 불량 사용자
 *
 * @see <a href="https://programmers.co.kr/learn/courses/30/lessons/64064">https://programmers.co.kr/learn/courses/30/lessons/64064</a>
 */
public class BadUser {

    public static String[] USER_ID_1 = {"frodo", "fradi", "crodo", "abc123", "frodoc"};
    public static String[] USER_ID_2 = {"frodo", "fradi", "crodo", "abc123", "frodoc"};

    public static int solution(String[] user_id, String[] banned_id) {

        return 0;
    }


    /**
     * String 배열에서
     * 해당하는 Regular Expression
     * 에 매치되는 값들을 List 로 반환하는 메소드
     *
     * @param stringArray
     * @param regex
     * @return
     */
    public static List<String> findMatchedIds(String[] stringArray, String regex) {
        List<String> list = new ArrayList<>();
        for (String s : stringArray) {
            if (s.matches(regex)) list.add(s);
        }
        return list;
    }

    public static void main(String[] args) {
/*
        for (String id : USER_ID_1) {
            if (id.matches("fr.d.")) {
                System.out.println(id);
            }
        }

        for (String id : USER_ID_2) {
            if (id.matches("......")) {
                System.out.println(id);
            }
        }
*/

        // replaceAll 을 이용하여
        // * 를 . 로 치환해서 검색하자
        // 속도는 아직 신경쓰지 말자..
    }
}
