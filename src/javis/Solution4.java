package javis;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class Solution4 {

    private static final int EMPTY = -1;

    public int[] solution(int n, int[][] queries) {
        List<Integer> result = new ArrayList<>();

        Integer shared = null;
        List<Deque<Integer>> stacks = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            stacks.add(new ArrayDeque<>());
        }

        for (int[] query : queries) {
            int a = query[0] - 1;
            int b = query[1];

            if (b >= 1) {
                // handle push
                if (shared == null) {
                    shared = b;
                } else {
                    stacks.get(a).add(b);
                }
            } else if (b == -1) {
                // handle pop
                Deque<Integer> stack = stacks.get(a);
                if (stack.size() == 0) {
                    if (shared == null) {
                        result.add(EMPTY);
                    } else {
                        result.add(shared);
                        shared = null;
                    }

                    while (true) {
                        int nextIndex = getNextIndex(a++, n);

                        boolean empty = true;
                        for (Deque<Integer> integers : stacks) {
                            if (!integers.isEmpty()) {
                                empty = false;
                                break;
                            }
                        }
                        if (empty) {
                            break;
                        }

                        Deque<Integer> nextStack = stacks.get(nextIndex);
                        if (!nextStack.isEmpty()) {
                            shared = nextStack.pop();
                            break;
                        }
                    }
                } else {
                    result.add(stack.pollLast());
                }
            }
        }

        return result.stream().mapToInt(value -> value).toArray();
    }

    private static int getNextIndex(int i, int total) {
        int next = i++;
        return i + 1 >= total ? next % total : next;
    }
}

/**
 * 각자의 bottom을 공유하는 자료구조
 * 중앙공간
 * <p>
 * push(i, x)
 * pop(i)
 * <p>
 * 정확성 테스트
 * 테스트 1 〉 통과 (2.24ms, 87.8MB)
 * 테스트 2 〉 통과 (2.51ms, 77.3MB)
 * 테스트 3 〉 통과 (2.95ms, 75.8MB)
 * 테스트 4 〉 통과 (4.05ms, 78.9MB)
 * 테스트 5 〉 통과 (3.03ms, 79.3MB)
 * 테스트 6 〉 통과 (2.89ms, 74.9MB)
 * 테스트 7 〉 통과 (2.70ms, 79.4MB)
 * 테스트 8 〉 통과 (2.69ms, 79.2MB)
 * 테스트 9 〉 통과 (2.91ms, 79MB)
 * 테스트 10 〉 통과 (3.04ms, 76.9MB)
 * 채점 결과
 * 합계: 3 / 3
 */