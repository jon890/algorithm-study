package programmers.practice.bruteforce;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;

/**
 * 프로그래머스
 * 코딩테스트 연습
 * 전체탐색 (Brute-Force)
 *
 * 소수 찾기
 * https://programmers.co.kr/learn/courses/30/lessons/42839
 */
public class PrimeNumber {

    Queue<String> bfsQueue = new LinkedList<>();
    Set<Integer> primeNumberSet = new HashSet<>();

    public int solution(String numbers) {
        bfsQueue.clear();
        primeNumberSet.clear();

        char[] characters = numbers.toCharArray();

        for (char c : characters) {
            bfsQueue.add(String.valueOf(c));
        }

        while (!bfsQueue.isEmpty()) {
            String str = bfsQueue.poll();
            int n = Integer.parseInt(str);

            if (!primeNumberSet.contains(n) && isPrimeNumber(n)) {
                primeNumberSet.add(n);
            }

            bfsQueue.addAll(getNextString(str, numbers));
        }

        return primeNumberSet.size();
    }

    private boolean isPrimeNumber(int n) {
        if (n == 0 || n == 1) return false;

        boolean ret = true;
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                ret = false;
                break;
            }
        }
        return ret;
    }

    private List<String> getNextString(String current, String target) {
        List<Character> nextChars = new ArrayList<>();

        char[] targetArray = target.toCharArray();
        for (char c : targetArray) {
            nextChars.add(c);
        }

        char[] currentArray = current.toCharArray();
        for (char c : currentArray) {
            nextChars.remove(Character.valueOf(c));
        }

        List<String> nextStrings = new ArrayList<>();
        for (char c : nextChars) {
            nextStrings.add(current + c);
        }

        return nextStrings;
    }
}

/*
정확성  테스트
테스트 1 〉	통과 (29.83ms, 55MB)
테스트 2 〉	통과 (62.07ms, 53.9MB)
테스트 3 〉	통과 (27.65ms, 55MB)
테스트 4 〉	통과 (55.79ms, 57.3MB)
테스트 5 〉	통과 (84.87ms, 59.9MB)
테스트 6 〉	통과 (39.57ms, 55MB)
테스트 7 〉	통과 (29.77ms, 54.9MB)
테스트 8 〉	통과 (84.34ms, 62MB)
테스트 9 〉	통과 (28.39ms, 55.1MB)
테스트 10 〉	통과 (176.59ms, 56.8MB)
테스트 11 〉	통과 (50.49ms, 55.4MB)
테스트 12 〉	통과 (33.47ms, 55.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */