package kakao.winterintern2019;

import java.util.*;
import java.util.stream.Collectors;

public class 불량_사용자 {

    public int solution(String[] user_id, String[] banned_id) {
        List<List<String>> bannedUserList;
        bannedUserList = Arrays.stream(banned_id)
                .map(banId -> Arrays.stream((user_id))
                        .filter(userId -> {
                            if (banId.length() != userId.length()) {
                                return false;
                            }

                            boolean check = true;
                            for (int i = 0; i < banId.length(); i++) {
                                char banChar = banId.charAt(i);
                                char userChar = userId.charAt(i);

                                if (banChar == '*') {
                                    continue;
                                }

                                if (banChar != userChar) {
                                    check = false;
                                    break;
                                }
                            }
                            return check;
                        }).collect(Collectors.toList()))
                .collect(Collectors.toList());

//        System.out.println(bannedUserList);
        Set<Set<String>> answers = new HashSet<>();
        dfs(0, bannedUserList, null, answers);
        return answers.size();
    }

    private void dfs(int depth, List<List<String>> bannedUserList, Set<String> visited, Set<Set<String>> answers) {
        if (depth == bannedUserList.size()) {
            if (visited.size() == bannedUserList.size()) {
                answers.add(visited);
            }
            return;
        }

        List<String> current = bannedUserList.get(depth);
        for (int i = 0; i < current.size(); i++) {
            Set<String> newVisited = new HashSet<>();
            if (visited != null) {
                newVisited.addAll(visited);
            }
            newVisited.add(current.get(i));
            dfs(depth + 1, bannedUserList, newVisited, answers);
        }
    }

    public static void main(String[] args) {
        불량_사용자 obj = new 불량_사용자();
        String[] banned_id1 = new String[]{"frodo", "fradi", "crodo", "abc123", "frodoc"};
        String[] user_id1 = new String[]{"*rodo", "*rodo", "******"};
        int answer1 = obj.solution(banned_id1, user_id1);
        System.out.println(answer1);
    }
}

/**
 * 2020-05-08
 *
 * JS로는 Set안에 primitive한 값만 넣을 수 있어서
 * 결국 자바로 해결했다.
 * immutable.js 등을 사용하면 Set, Map들을 객체에 적용해서 사용할 수 있는 듯 하다
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (2.50ms, 53.1MB)
 * 테스트 2 〉	통과 (2.32ms, 53.2MB)
 * 테스트 3 〉	통과 (2.31ms, 52.5MB)
 * 테스트 4 〉	통과 (1.94ms, 53MB)
 * 테스트 5 〉	통과 (3554.56ms, 356MB)
 * 테스트 6 〉	통과 (16.89ms, 54.4MB)
 * 테스트 7 〉	통과 (2.16ms, 52.7MB)
 * 테스트 8 〉	통과 (2.16ms, 53.3MB)
 * 테스트 9 〉	통과 (2.25ms, 52MB)
 * 테스트 10 〉	통과 (3.86ms, 52.2MB)
 * 테스트 11 〉	통과 (2.52ms, 52.8MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */