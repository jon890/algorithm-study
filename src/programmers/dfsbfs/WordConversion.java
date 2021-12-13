package programmers.dfsbfs;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

/**
 * 프로그래머스
 * 코딩테스트 연습
 * 깊이/너비 우선 탐색(DFS/BFS)
 *
 * 단어 변환
 * https://programmers.co.kr/learn/courses/30/lessons/43163
 */
public class WordConversion {

    /**
     * Word Node Queue Def.
     */
    static class WordNode {
        String word;
        int depth;

        WordNode(String word, int depth) {
            this.word = word;
            this.depth = depth;
        }
    }

    /**
     * Queue Variable
     */
    Queue<WordNode> wordNodes = new LinkedList<>();


    /**
     * 주어진 단어를 한글자씩 바꾼 단어를
     * words 배열에서 찾고
     * 최소로 단어를 변경하여 target이 되게한다.
     * 그 때의 변경횟수를 리턴하는 함수
     *
     * @param begin : 초기단어
     * @param target : 최종적으로 변경될 단어
     * @param words : 변경할 수 있는 단어 배열
     * @return : 최소 변경횟수
     */
    public int solution(String begin, String target, String[] words) {

        // 타겟이 Words 배열에 존재하는지 확인
        boolean hasTarget = false;
        for (String s : words) {
            if (target.equals(s)) {
                hasTarget = true;
                break;
            }
        }

        // Words 배열에 타겟이 없다면 0을 반환 후 종료
        if (!hasTarget) return 0;

        // 예외 처리가 끝나면
        // 너비 우선 탐색으로 해를 찾는다
        return bfs(begin, target, words);
    }

    private int bfs(String current, String target, String[] words) {
        int answer;

        wordNodes.add(new WordNode(current, 0));

        while (true) {
            WordNode n = wordNodes.poll();

            if (n.word.equals(target)) {
                answer = n.depth;
                break;
            } else {
                wordNodes.addAll(
                        canConvertWords(n.word, words)
                        .stream()
                        .map(s -> new WordNode(s, n.depth + 1))
                        .collect(Collectors.toList())
                );
            }
        }

        return answer;
    }

    /**
     * 주어진 단어 목록과
     * 주어진 단어가
     * 변환가능한지 판별하고,
     * 그에 따른 단어 목록을
     * 반환하는 함수
     *
     * @param s : 변환할 단어
     * @param words : 변환 가능한지 알아볼 단어 목록
     * @return : 변환가능한 단어 목록
     */
    private List<String> canConvertWords(String s, String[] words) {
        List<String> list = new ArrayList<>();

        for (String w : words) {
            // 길이가 다르면 추가하지 않는다
            if (s.length() != w.length()) continue;

            // 한 문자씩 검사한다
            int differenceCharacter = 0;
            for (int i = 0; i < w.length(); i++) {
                if (s.charAt(i) != w.charAt(i)) differenceCharacter++;
            }

            // 문자가 하나만 다르다면 변환 가능 리스트에 추가한다
            if (differenceCharacter == 1) list.add(w);
        }

        return list;
    }

    public static void main(String[] args) throws Exception {
        WordConversion obj = new WordConversion();

        String begin_ex1 = "hit";
        String target_ex1 = "cog";
        String[] words_ex1 = {"hot", "dot", "dog", "lot", "log", "cog"};
        int answer_ex1 = obj.solution(begin_ex1, target_ex1, words_ex1);
        int expected_answer_ex1 = 4;
        if (answer_ex1 != expected_answer_ex1) {
            throw new Exception("예상된 결과와 구한 결과가 다릅니다!!\n" +
                    "예상된 결과 : " + expected_answer_ex1 + " // 구한 결과 : " + answer_ex1);
        } else {
            System.out.println("예상된 결과와 구한 결과가 일치합니다!!");
            System.out.println("결과는 " + "'" + answer_ex1 + "' 입니다!!\n");
        }

        String begin_ex2 = "hit";
        String target_ex2 = "cog";
        String[] words_ex2 = {"hot", "dot", "dog", "lot", "log"};
        int answer_ex2 = obj.solution(begin_ex2, target_ex2, words_ex2);
        int expected_answer_ex2 = 0;
        if (answer_ex2 != expected_answer_ex2) {
            throw new Exception("예상된 결과와 구한 결과가 다릅니다!!\n" +
                    "예상된 결과 : " + expected_answer_ex2 + " // 구한 결과 : " + answer_ex2);
        } else {
            System.out.println("예상된 결과와 구한 결과가 일치합니다!!");
            System.out.println("결과는 " + "'" + answer_ex2 + "' 입니다!!\n");
        }
    }
}

/*
정확성  테스트
테스트 1 〉	통과 (6.11ms, 50.3MB)
테스트 2 〉	통과 (6.94ms, 52.9MB)
테스트 3 〉	통과 (13.09ms, 52.9MB)
테스트 4 〉	통과 (6.10ms, 52.6MB)
테스트 5 〉	통과 (0.87ms, 50.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */