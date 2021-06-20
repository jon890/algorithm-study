package codility.delivery_hero;

public class Solution3 {

    public static int solution(int N) {
        // write your code in Java SE 8

        // smallest integer greater than N
        // does not contain two identical consecutive digits

        // 1765 -> 1766 the last towo digits are identical
        // 연속적으로 두개의 수가 동일하지 않으면 괜찮다

        // 55 -> 56
        // N -> 1 ~ 10억
        // 효율성도 고려

        // 1번째 아이디어 -> 무작정 하나씩 증가?
        // 2번째 아이디어 -> 앞부터 체크해서 연속적이지 않게 만든다 -> 항상 올바른 해가 나오는가?
        // 2번째 아이디어를 발전시켜야할것 같은데..
        // 4번의 예제를 고민해보자..
        // 44432 -> 45010으로 변환
        // 444432 -> 450101로 변환

        String answerStr = String.valueOf(N + 1);

        while (true) {
            char[] numbers = answerStr.toCharArray();
            Result result = checkConsecutive(numbers);

            if (!result.consecutive) {
                break;
            } else {
                // location 뒤부터는 0101로 만들어준다
                boolean flag = true;
                for (int i = result.location + 1; i < numbers.length; i++) {
                    numbers[i] = (char) (flag ? 48 : 49);
                    flag = !flag;
                }

                answerStr =  String.valueOf(numbers);
            }
        }

        return Integer.parseInt(answerStr);
    }

    private static boolean hasConsecutiveNumber(char[] c) {
        boolean check = false;

        for (int i = 0; i < c.length - 1; i++) {
            if (c[i] == c[i + 1]) {
                check = true;
                break;
            }
        }

        return check;
    }

    private static Result checkConsecutive(char[] c) {
        boolean check = false;
        int location = -1;
        int number = -1;

        for (int i = 0; i < c.length - 1; i++) {
            if (c[i] == c[i + 1]) {
                check = true;
                location = i + 1;
                number = c[i];
                break;
            }
        }

        return new Result(check, location, number);
    }

    static class Result {
        boolean consecutive;
        int location = -1;
        int number = -1;

        Result(boolean consecutive, int location, int number) {
            this.consecutive = consecutive;
            this.location = location;
            this.number = number;
        }
    }

    public static void main(String[] args) {
//        System.out.println(solution(55));
//        System.out.println(solution(1765));
//        System.out.println(solution(98));
//        System.out.println(solution(44432));
        System.out.println(solution(3298));
    }
}
