package wadiz;

import java.util.*;

public class Solution2 {

    public String[] solution(String[] code) {

        Stack<Map<String, String>> blockVariableMapStack = new Stack<>();
        Stack<Integer> blockDepthStack = new Stack<>();
        List<String> answer = new ArrayList<>();

        // 코드 파싱
        int prevDepth = -1; // 이전 블록 깊이
        for (String statement : code) {
            // 코드의 블록 depth 확인
            int currDepth = getDepth(statement);

            // 새로운 블록 생성
            if (currDepth > prevDepth) {
                Map<String, String> variableMap = new HashMap<>();
                blockVariableMapStack.push(variableMap);
                blockDepthStack.push(currDepth);
            } else if (currDepth < prevDepth) {
                // 블록 제거
                while (true) {
                    // 마지막 depth 확인
                    int lastDepth = blockDepthStack.peek();
                    if (currDepth < lastDepth) {
                        blockDepthStack.pop();
                        blockVariableMapStack.pop();
                    } else {
                        break;
                    };
                }
            }

            // 변수를 추가하는 것인가, 변수를 생성하는 것인가 확인
            statement = statement.substring(currDepth); // . 제거
            if (statement.startsWith("print")) {
                // 출력
                // 블록 스택을 위부터 확인
                String[] splits = statement.split(" ");
                String variableName = splits[1];

                int blockSize = blockVariableMapStack.size();
                boolean flag = false; // 변수를 찾았는지 못찾았는지 확인
                for (int i = blockSize - 1; i >= 0; i--) {
                    Map<String, String> variableMap = blockVariableMapStack.get(i);
                    if (variableMap.containsKey(variableName)) {
                        String value = variableMap.get(variableName);
                        String print = variableName + "=" + value;
                        answer.add(print);
                        flag = true;
                        break;
                    }
                }

                if (!flag) answer.add("error");
            } else {
                // 대입
                String[] splits = statement.split("=");
                String variable = splits[0];
                String value = splits[1];

                blockVariableMapStack.peek().put(variable, value);
            }

            prevDepth = currDepth;
        }

        System.out.println(answer);
        return answer.toArray(String[]::new);
    }

    private int getDepth(String s) {
        final int length = s.length();
        int count = 0;

        for (int i = 0; i < length; i++) {
            if ('.' == s.charAt(i)) count++;
            else break;
        }

        return count;
    }

    public static void main(String[] args) {
        Solution2 obj = new Solution2();

        String[] code1 = {"a=3", "..a=4", "..b=3", "..print a", ".......a=6", ".......print a", ".......print b", "..print a", "....a=7", "....print a", "print a", "print b", "a=4", "print a", "...print a"};
        obj.solution(code1);
    }
}

// simle language
// 변수 생성과 대입 => 변수명=숫자 => 변수 생성후 숫자를 변수에 대입
// 출력 => print 변수명 => 변수명=변수 값 출력 => 없는 변수 => error
// 변수는 동일한 이름으로 여러개 생성 가능!!

// 블록이 존재
// 생성한 변수가 존재하는 위치
// 해당 블록이 사라지면 블록에 포함된 변수 제거
// 가장 나중에 생성된 변수의 값을 출력