package kakao.blind2020;

/**
 * 2020 카카오 블라인드 채용
 * 괄호 변환
 *
 * https://programmers.co.kr/learn/courses/30/lessons/60058?language=java
 */
public class ConverseParenthesis {
    public String solution(String p) {
        // p가 이미 올바른 괄호 문자열일 경우 그대로 반환
        if (isCorrectParenthesis(p)) return p;

        return makeCorrectParenthesis(p);
    }

    private String makeCorrectParenthesis(String w) {
        // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환한다
        if ("".equals(w)) return w;

        // 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리한다.
        // 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
        int divide_index = 0;
        int left_parenthesis = 0;
        int right_parenthesis = 0;

        for (int i = 0; i < w.length(); i++) {
            char c = w.charAt(i);
            if (c == '(') {
                left_parenthesis++;
            } else if (c == ')') {
                right_parenthesis++;
            }

            if (left_parenthesis == right_parenthesis) {
                divide_index = i + 1;
                break;
            }
        }

        String u = w.substring(0, divide_index);
        String v = w.substring(divide_index);

        // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계 부터 다시 수행한다.
        if (isCorrectParenthesis(u)) {
            // 3 - 1. 수행한 결과를 문자열 u에 이어 붙인 후 반환한다.
            v = makeCorrectParenthesis(v);
            return u + v;

            // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
        } else {
            StringBuilder temp = new StringBuilder();

            // 4 - 1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
            temp.append("(");

            // 4 - 2. 문자열 v에 대해 1단계 부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
            temp.append(makeCorrectParenthesis(v));

            // 4 - 3. ')'를 다시 붙입니다.
            temp.append(")");

            // 4 - 4. u의 첫 번째와 마지막 문자를 제거하고 나머지 문자열의 괄호 방향을 뒤집에서 뒤에 붙입니다.
            u = u.substring(1, u.length() - 1);
            StringBuilder _u = new StringBuilder();
            for (int i = 0; i < u.length(); i++) {
                char c = u.charAt(i);
                if (c == '(') {
                    _u.append(")");
                } else if (c == ')') {
                    _u.append("(");
                }
            }
            temp.append(_u.toString());

            return temp.toString();
        }
    }

    private boolean isCorrectParenthesis(String s) {
        int left_parenthesis = 0;
        int right_parenthesis = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') {
                left_parenthesis++;
            } else if (c == ')') {
                right_parenthesis++;
            }

            if (left_parenthesis < right_parenthesis) return false;
        }
        return true;
    }
}

/*
풀라는 대로 쭉 풀었더니 맞았다.
굉장히 친절한 문제, 재귀를 연습 해볼수 있는데
문제에 방법이 나와있어서 어렵지 않은듯하다.

하나 어려울 수 있는 부분은 u와 v를 분리하는 부분인데,
이 역시 크게 어렵지 않았다.

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.85ms, 52.4MB)
테스트 2 〉	통과 (0.85ms, 50.9MB)
테스트 3 〉	통과 (0.84ms, 52.1MB)
테스트 4 〉	통과 (29.29ms, 55.1MB)
테스트 5 〉	통과 (0.86ms, 52.7MB)
테스트 6 〉	통과 (31.21ms, 53.5MB)
테스트 7 〉	통과 (30.14ms, 53.5MB)
테스트 8 〉	통과 (0.90ms, 50.6MB)
테스트 9 〉	통과 (41.16ms, 55MB)
테스트 10 〉	통과 (30.89ms, 55.4MB)
테스트 11 〉	통과 (29.40ms, 53.5MB)
테스트 12 〉	통과 (29.58ms, 55.5MB)
테스트 13 〉	통과 (30.35ms, 55.5MB)
테스트 14 〉	통과 (31.08ms, 55.5MB)
테스트 15 〉	통과 (31.85ms, 53.4MB)
테스트 16 〉	통과 (29.47ms, 55.4MB)
테스트 17 〉	통과 (30.20ms, 55.2MB)
테스트 18 〉	통과 (30.28ms, 53.6MB)
테스트 19 〉	통과 (31.82ms, 55.6MB)
테스트 20 〉	통과 (30.98ms, 55.1MB)
테스트 21 〉	통과 (31.74ms, 55.3MB)
테스트 22 〉	통과 (30.10ms, 53.7MB)
테스트 23 〉	통과 (29.99ms, 53.8MB)
테스트 24 〉	통과 (30.04ms, 53.4MB)
테스트 25 〉	통과 (30.47ms, 54.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
