package baekjoon.greedy;

import java.util.*;

/**
 * 백준
 * Greedy
 * 단어 수학
 * https://www.acmicpc.net/problem/1339
 */
public class WordMath {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int length = Integer.parseInt(scanner.nextLine()); // 단어의 갯수

        String[] words = new String[length];
        for (int i = 0; i < length; i++) {
            words[i] = scanner.nextLine();
        }

        System.out.println(getSolution(words));
    }

    public static int getSolution(String[] words) {
        /**
         * 단위가 제일 큰 문자에
         * 큰 숫자를 할당하면 되는 문제
         */

        List<Set<Character>> characters = new ArrayList<>();
        // 최대 자릿수가 8이므로 8개의 문자열 셋을 생성해놓음
        for (int i = 0; i < 8; i++) {
            Set<Character> set = new HashSet<>();
            characters.add(set);
        }

        for (int i = 0; i < words.length; i++) {
            String word = words[i];

            for (int j = 0; j < word.length(); j++) {
                char c = word.charAt(j);
                int digit = word.length() - j - 1;

                Set<Character> set = characters.get(digit);
                set.add(c);
            }
        }

//        System.out.println(characters);

        // 각 문자들을 숫자에 연관시킨다
        Map<Character, Integer> map = new HashMap<>();
        int[] numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

        // 큰 자릿수를 가진 문자부터 숫자를 할당한다
        for (int i = characters.size(); i > 0; i--) {
            Set<Character> characterSet = characters.get(i);

            // 해당 집합에 문자가 없다면 넘어간다
            if (characterSet.size() == 0)
                continue;

            // 해당 집합에 문자가 한개이고
            if (characterSet.size() == 1) {
                for (char c : characterSet) { // 해당 집합의 문자에 숫자가 할당되어있는지 확인
                    if (!map.containsKey(c)) {
                        // 남은 숫자중 제일 큰 숫자를 할당
                        int index = findMaximumIndex(numbers);
                        int value = numbers[index];

                        // 남은 숫자를 사용했다고 표기
                        numbers[index] = -1;
                    }
                }
            }

            // 해당 집합의 문자가 여러 개 인경우
            if (characterSet.size() > 1) {

            }
        }

        return -1;
    }

    public static int findMaximumIndex(int[] array) {
        if (array.length == 0)
            return -1;

        int target = array[0];
        int targetIndex = 0;

        for (int i = 1; i < array.length; i++) {
            if (array[i] > target) {
                target = array[i];
                targetIndex = i;
            }
        }

        return targetIndex;
    }
}
