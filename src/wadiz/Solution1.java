package wadiz;

import java.util.HashMap;
import java.util.Map;

public class Solution1 {

    public int solution(int[][] passwords, String s) {
        int answer = 0;

        // 호 와 비번을 맵 형태로 구성
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < passwords.length; i++) {
            int ho = passwords[i][0];
            int password = passwords[i][1];
            map.put(ho, password);
        }

        // 입력한 번호들 파싱
        String[] inputs = s.split("#");
        int index = 0;
        while (index < inputs.length) {
            int input = Integer.parseInt(inputs[index]);

            // case => 올바른 호수 입력
            if (map.containsKey(input)) {
                String passwordStr = null;
                try {
                    passwordStr = inputs[++index];
                } catch (Exception ignored) {
                }

                // 비밀번호를 입력하지 않음
                if (passwordStr == null) continue;
                
                // 비밀번호를 비교
                int originalPassword = map.get(input);
                int comparePassword = Integer.parseInt(passwordStr);
                if (originalPassword == comparePassword) answer++;
            }
            // 올바르지 않은 호수를 입력하거나
            // 정상종료 되었다면 상태가 초기화
            // 다음 입력한 호수부터 비교
            index++;
        }

        System.out.println(answer);
        return answer;
    }

    public static void main(String[] args) {
        int[][] passwords1 = new int[][]{{101, 1234}, {102, 54321}, {201, 202}, {202, 1}};
        String s1 = "101#1234#102#654321#51#203#201#202#1#";

        Solution1 obj = new Solution1();
        obj.solution(passwords1, s1);
    }
}

// 호수 -> # -> 비밀번호 -> #
// 정상 => 문이 열리고 초기상태로 돌아감
// # 버튼을 누를경우 오류가 있다면 지금까지의 입력내용을 모두 취소후 초기화
// 잘못된 호수, 잘못된 비번