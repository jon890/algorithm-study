package programmers.level3;

import java.util.LinkedList;
import java.util.Queue;

public class 가장_긴_팰린드롬 {

    public int solution(String s) {
        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();
        int max = 1;

        for (int i = 0; i < s.length(); i++) {
            // start index, length 쌍으로 넣기
            queue.offer(new Pair<>(i, 0));
            queue.offer(new Pair<>(i, 1));
        }

        while (!queue.isEmpty()) {
            Pair<Integer, Integer> item = queue.peek();
            item.second += 2;

            int length = item.second;
            int mid = item.first;
            int half = length / 2;

            int low = mid - half;
            int high = mid + half + 1;

            if (low < 0 || high > s.length()) {
                queue.remove();
                continue;
            }

            String sub = s.substring(low, high);
            if (checkPalindrome(sub)) {
                if (max < length) max = length;
            } else {
                queue.remove();
            }
        }
        
        return max;
    }

    static class Pair<T1, T2> {
        T1 first;
        T2 second;

        Pair(T1 first, T2 second) {
            this.first = first;
            this.second = second;
        }
    }

    private boolean checkPalindrome(String s) {
        int low = 0;
        int high = s.length() - 1;

        while (low <= high) {
            if (s.charAt(low) == s.charAt(high)) {
                low++;
                high--;
            } else {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        가장_긴_팰린드롬 obj = new 가장_긴_팰린드롬();
        obj.solution("abcdcba");
//        obj.solution("abacde");

//        obj.checkPalindrome("abcdcba");
//        obj.checkPalindrome("aabbaa");
    }
}
