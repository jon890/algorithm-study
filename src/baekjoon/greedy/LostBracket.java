package baekjoon.greedy;

import java.util.Scanner;

public class LostBracket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine();
        System.out.println(getSolution(expression));
    }

    public static int getSolution(String expression) {
        StringBuilder sb = new StringBuilder(expression);

        boolean startMinus = false;
        for (int i = 0; i < sb.length(); i++) {
            char c = sb.charAt(i);

            if (c == '-') {
                if (startMinus) {
                    startMinus = false;
                } else {
                    startMinus = true;
                }
            }

            if (startMinus && c == '+') {
                sb.replace(i, i+1, "-"); // - 가 시작되면 다음 +화 를 무력
            }
        }

        // 계산작업
        int answer = 0;

        final int MINUS = 10001;
        final int PLUS = 10002;

        int prevOperator = PLUS; // default
        StringBuilder a = new StringBuilder();

        for (int i = 0; i < sb.length(); i++) {
            char c = sb.charAt(i);

            if (c >= '0' && c <= '9') { // 한 글자씩 읽어내어 숫자인지 판별
                a.append(c);

                // 마지막 숫자 진입 -> 숫자로 변환후 연산
                if (i == sb.length() - 1) {
                    String tempStr = a.toString();
                    int tempValue = Integer.parseInt(tempStr);
                    a.delete(0, a.length());

                    if (prevOperator == PLUS) {
                        answer += tempValue;
                    } else if (prevOperator == MINUS) {
                        answer -= tempValue;
                    }
                } else {
                    char nextChar = sb.charAt(i + 1);
                    // 다음이 연산자일 경우 -> 숫자로 변환후 연산
                    if (nextChar == '-' || nextChar == '+') {
                        String tempStr = a.toString();
                        int tempValue = Integer.parseInt(tempStr);
                        a.delete(0, a.length());

                        if (prevOperator == PLUS) {
                            answer += tempValue;
                        } else if (prevOperator == MINUS) {
                            answer -= tempValue;
                        }
                    }
                }
            } else { // 연산자 저장
                if (c == '-') {
                    prevOperator = MINUS;
                }

                if (c == '+') {
                    prevOperator = PLUS;
                }
            }
        }

        return answer;
    }
}
