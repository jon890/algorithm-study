package kakao.tryout2017;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class 브라이언의_고민 {

    private static final String INVALID = "invalid";

    public String solution(String sentence) {

        Set<Character> signs = new HashSet<>(); // 사용된 기호들
        List<String> words = new ArrayList<>(); // 단어의 집합

        while (sentence.length() > 0) {
            char first = sentence.charAt(0);
            char second = sentence.charAt(1);

            // 기호가 첫 번째 단어이다 -> 규칙2
            if (Character.isLowerCase(first)) {
                // 이미 사용된 기호를 사용했다면..
                if (signs.contains(first)) {
                    return INVALID;
                }

                // 다음기호의 인덱스를 찾는다
                int index = sentence.lastIndexOf(String.valueOf(first));
                // 다음 기호를 찾을 수 없다면..
                if (index == -1) {
                    return INVALID;
                }

                String word = processRuleTwo(sentence.substring(0, index + 1));
                // 소문자가 남아있다면 규칙1을 적용하여 올바른 단어를 찾는다
                if (containsLowerCase(word)) {
                    char lowerCase = 0;
                    for (int i = 0; i < word.length(); i++) {
                        char c = word.charAt(i);
                        if (Character.isLowerCase(c)) {
                            lowerCase = c;
                            break;
                        }
                    }
                    // 이미 사용한 기호가 또 사용되었다면..
                    if (lowerCase == first) {
                        return INVALID;
                    }

                    word = processRuleOne(lowerCase, word);
                }
                // 올바른 단어로 변환되지 않는다면..
                if (word.equals(INVALID)) {
                    return INVALID;
                }

                signs.add(first);
                words.add(word);
                sentence = sentence.substring(index + 1);
                continue;
            }

            // 기호가 두 번째 단어이다 -> 규칙1
            if (Character.isLowerCase(second)) {
                // 이미 사용된 기호를 사용했다면..
                if (signs.contains(first)) {
                    return INVALID;
                }

                // 다음기호의 인덱스를 찾는다
                int index = sentence.lastIndexOf(String.valueOf(second));
                // 다음 기호를 찾을 수 없다면..
                if (index == -1) {
                    return INVALID;
                }

                String word = processRuleOne(second, sentence.substring(0, index + 2));

                // 올바른 단어로 변환되지 않는다면..
                if (word.equals(INVALID)) {
                    return INVALID;
                }

                signs.add(second);
                words.add(word);
                sentence = sentence.substring(index + 2);
                continue;
            }

            words.add(sentence);
            sentence = "";
        }

        return String.join(" ", words);
    }

    private String processRuleOne(char sign, String word) {
        StringBuilder sb = new StringBuilder();
        int signCount = 0;

        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            if (Character.isUpperCase(c)) {
                sb.append(c);
            }

            if (Character.isLowerCase(c)) {
                if (c == sign) {
                    signCount++;
                } else {
                    return INVALID;
                }
            }
        }

        // signCount 갯수가 다르면..
        if (signCount != word.length() / 2) {
            return INVALID;
        }

        return sb.toString();
    }

    /**
     * 규칙2의 단어를 올바른 단어로 변환한다
     *
     * @param word
     * @return
     */
    private String processRuleTwo(String word) {
        // 첫 기호와 마지막 기호가 같은지 확인
        char first = word.charAt(0);
        char second = word.charAt(word.length() - 1);
        if (first != second) {
            return INVALID;
        }

        // 양 끝을 제거
        return word.substring(1, word.length() - 1);
    }

    private boolean containsLowerCase(String word) {
        for (int i = 0; i < word.length(); i++) {
            if (Character.isLowerCase(word.charAt(i))) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        브라이언의_고민 obj = new 브라이언의_고민();

        String answer1 = obj.solution("HaEaLaLaObWORLDb");
        System.out.println("result : " + answer1 + " ~ expected : " + "HELLO WORLD");

        String answer2 = obj.solution("SpIpGpOpNpGJqOqA");
        System.out.println("result : " + answer2 + " ~ expected : " + "SIGONG JOA");

        String answer3 = obj.solution("AxAxAxAoBoBoB");
        System.out.println("result : " + answer3 + " ~ expected : " + "invalid");

        String answer4 = obj.solution("aIaAM");
        System.out.println("result : " + answer4 + " ~ expected : " + "I AM");

        String answer5 = obj.solution("baHELLOabWORLD");
        System.out.println("result : " + answer5 + " ~ expected : " + "invalid");

        String answer6 = obj.solution("aHbEbLbLbOacWdOdRdLdDc");
        System.out.println("result : " + answer6 + " ~ expected : " + "HELLO WORLD");

        String answer7 = obj.solution("bAaOb");
        System.out.println("result : " + answer7 + " ~ expected : " + "AO");

        String answer8 = obj.solution("xAaAbAaAx");
        System.out.println("result : " + answer8 + " ~ expected : " + "invalid");

        String answer9 = obj.solution("AbAaAbAaCa");
        System.out.println("result : " + answer9 + " ~ expected : " + "invalid");
    }
}

/**
 * 2021-05-03
 *
 * 코드가 부실하다 근데
 * 너무 힘들어서 일단 여기까지만..
 */