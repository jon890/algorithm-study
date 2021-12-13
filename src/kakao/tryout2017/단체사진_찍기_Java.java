package kakao.tryout2017;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class 단체사진_찍기_Java {

    public int solution(int n, String[] data) {
        Friend[] friends = Friend.values();

        // 친구들의 순열을 구하기 => 줄 세우기
        List<List<Friend>> permutations = new ArrayList<>();

        permutation(friends, 0, friends.length, friends.length, permutations);

        for (String conditionStr : data) {
            char[] array = conditionStr.toCharArray();
            Condition condition = new Condition(
                    Friend.fromCode(array[0]),
                    Friend.fromCode(array[2]),
                    Operator.fromCode(array[3]),
                    array[4] - 48
            );

            permutations = permutations.stream().filter(it -> {
                int index1 = it.indexOf(condition.friend1);
                int index2 = it.indexOf(condition.friend2);

                switch (condition.operator) {
                    case EQUAL:
                        return Math.abs(index2 - index1) == 1;
                    case GREATER_THAN:
                        return Math.abs(index2 - index1) > condition.size;
                    case LESS_THAN:
                        return Math.abs(index2 - index1) < condition.size;
                }

                return false;
            }).collect(Collectors.toList());
        }

        return permutations.size();
    }

    class Condition {

        Friend friend1;
        Friend friend2;
        Operator operator;
        int size;

        public Condition(Friend friend1, Friend friend2, Operator operator, int size) {
            this.friend1 = friend1;
            this.friend2 = friend2;
            this.operator = operator;
            this.size = size;
        }
    }

    enum Friend {
        APEACH('A'),
        CORN('C'),
        FRODO('F'),
        JAYJI('J'),
        MUJI('M'),
        NEO('N'),
        RION('R'),
        TUBE('T');

        private char code;

        Friend(char code) {
            this.code = code;
        }

        static Friend fromCode(char code) {
            for (Friend value : values()) {
                if (value.code == code) {
                    return value;
                }
            }

            throw new IllegalArgumentException("지원하지 않는 친구 입니다 : $code");
        }
    }

    enum Operator {
        EQUAL('='),

        GREATER_THAN('>'),

        LESS_THAN('<');

        private char code;

        Operator(char code) {
            this.code = code;
        }

        static Operator fromCode(char code) {
            for (Operator value : values()) {
                if (value.code == code) {
                    return value;
                }
            }

            throw new IllegalArgumentException("지원하지 않는 친구 입니다 : $code");
        }

    }

    private <T> void permutation(T[] array, int depth, int n, int r, List<List<T>> result) {
        if (depth == r) {
            List<T> list = new ArrayList<>();
            for (int i = 0; i < r; i++) {
                list.add(array[i]);
            }
            result.add(list);
            return;
        }

        for (int i = depth; i < n; i++) {
            swap(array, depth, i);
            permutation(array, depth + 1, n, r, result);
            swap(array, depth, i);
        }
    }

    private <T> void swap(T[] array, int a, int b) {
        T temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    public static void main(String[] args) {
        단체사진_찍기_Java obj = new 단체사진_찍기_Java();
        obj.solution(2, new String[]{"N~F=0", "R~T>2"});
        obj.solution(2, new String[]{"M-C<2", "C~M>1"});
    }
}
