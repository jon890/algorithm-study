package programmers.practice.level2;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class MakingMaximumNumber {

    public String solution(String number, int k) {

        List<Integer> list = new ArrayList<>();
        for (char c : number.toCharArray()) {
            list.add((int) c - 48);
        }
//        System.out.println(list);

        for (int i = 0; i < k; i++) {
            Optional<Integer> maybeMinimum = list.stream().min(Integer::compareTo);
            maybeMinimum.ifPresent(list::remove);
        }
//        System.out.println(list);

        StringBuilder sb = new StringBuilder();
        for (Integer i : list) {
            sb.append(i);
        }

        return sb.toString();
    }

    public static void main(String[] args) {
        MakingMaximumNumber obj = new MakingMaximumNumber();

        obj.solution("4177252841", 4);
    }

}
