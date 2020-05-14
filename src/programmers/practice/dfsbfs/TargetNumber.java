package programmers.practice.dfsbfs;

/**
 * 프로그래머스
 * 코딩테스트 연습
 * 깊이/너비 우선 탐색(DFS/BFS)
 *
 * 타겟 넘버
 * https://programmers.co.kr/learn/courses/30/lessons/43165
 */
public class TargetNumber {

    int answer;

    /**
     * 주어진 숫자를 더하거나 빼서
     * target 을 만들 수 있는
     * 방법의 수를 반환하는 함수
     *
     * @param numbers : 주어진 숫자 배열
     * @param target : 만들려는 숫자
     * @return : 방법의 수
     */
    public int solution(int[] numbers, int target) {
        dfs(numbers, target, 0, 0);
        return answer;
    }

    private void dfs(int[] numbers, int target, int currentNumber, int depth) {
        // 깊이가 마지막에 도달하면 종료한다
        if (depth == numbers.length) return;

        int add = currentNumber + numbers[depth];
        int minus = currentNumber - numbers[depth];

        // 마지막 깊이의 해만 검사한다
        if (depth == numbers.length - 1) {
            if (add == target) answer++;
            if (minus == target) answer++;
        } else {
            dfs(numbers, target, add, depth + 1);
            dfs(numbers, target, minus, depth + 1);
        }
    }

    public static void main(String[] args) throws Exception {
        TargetNumber obj = new TargetNumber();

        int[] numbers_ex1 = {1, 1, 1, 1, 1};
        int target_ex1 = 3;
        int answer_ex1 = obj.solution(numbers_ex1, target_ex1);
        int expected_answer_ex1 = 5;
        if (answer_ex1 != expected_answer_ex1) {
            throw new Exception("예상된 결과와 구한 결과가 다릅니다!!\n" +
                    "예상된 결과 : " + expected_answer_ex1 + " // 구한 결과 : " + answer_ex1);
        } else {
            System.out.println("예상된 결과와 구한 결과가 일치합니다!!");
            System.out.println("결과는 " + "'" + answer_ex1 + "' 입니다!!");
        }
    }
}

/*
정확성  테스트
테스트 1 〉	통과 (6.52ms, 50.4MB)
테스트 2 〉	통과 (7.19ms, 52.3MB)
테스트 3 〉	통과 (0.96ms, 50.4MB)
테스트 4 〉	통과 (1.35ms, 52.5MB)
테스트 5 〉	통과 (3.95ms, 50MB)
테스트 6 〉	통과 (1.08ms, 54.3MB)
테스트 7 〉	통과 (0.89ms, 52.6MB)
테스트 8 〉	통과 (3.81ms, 52.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */