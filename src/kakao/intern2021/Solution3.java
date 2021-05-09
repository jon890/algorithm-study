package kakao.intern2021;

import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

public class Solution3 {

    public static final char SELECT_UP = 'U';
    public static final char SELECT_DOWN = 'D';
    public static final char CLEAR = 'C';
    public static final char REVERT = 'Z';

    public String solution(int n, int k, String[] cmd) {
        // 비교할 배열
        LinkedList<Integer> commandArray = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            commandArray.add(i);
        }
        // 현재 가르키는 위치
        int currentPosition = k;
        // 삭제한 아이템들을 보관할 스택
        Stack<Integer> deleteStack = new Stack<>();

        // 명령어 수행
        for (int i = 0; i < cmd.length; i++) {
            String command = cmd[i];
            char type = command.charAt(0);

            switch (type) {
                case SELECT_UP:
                    currentPosition -= Integer.parseInt(command.substring(2));
                    break;
                case SELECT_DOWN:
                    currentPosition += Integer.parseInt(command.substring(2));
                    break;
                case CLEAR:
                    // 삭제한 원소를 기록한다
                    deleteStack.push(commandArray.get(currentPosition));
                    commandArray.remove(currentPosition);
                    // 맨 마지막 원소를 지웠다면 현재 위치 인덱스를 하나 올려준다
                    if (currentPosition == commandArray.size()) {
                        currentPosition--;
                    }
                    break;
                case REVERT:
                    // 삭제한 마지막 원소를 복구한다
                    int deleted = deleteStack.pop();
                    // 삭제했던 원소보다 큰 원소를 찾는다
                    int nearBigIndex = findNearBigIndex(deleted, commandArray);
                    // 삭제한 원소가 제일 마지막 원소였다면 제일 마지막에 삽입한다
                    if (nearBigIndex == -1) {
                        commandArray.add(deleted);
                    } else {
                        // 그외의 경우 - 그 원소 자리에 삽입한다
                        commandArray.add(nearBigIndex, deleted);
                        // 내가 가르키고 있는 인덱스보다 작은 곳에 삽입되었는가?
                        if (currentPosition >= nearBigIndex) {
                            currentPosition++;
                        }
                    }
                    break;
            }
        }

        StringBuilder sb = new StringBuilder();
        int i, j = 0;
        for (i = 0; i < n; i++, j++) {
            int element;
            try {
                element = commandArray.get(j);
            } catch (IndexOutOfBoundsException e) {
                element = -1;
            }

            if (element == i) {
                sb.append("O");
            } else {
                sb.append("X");
                j--;
            }
        }
        System.out.println(sb);
        return sb.toString();
    }

    private int findNearBigIndex(int target, List<Integer> list) {
        int record = -1;
        for (int i = 0; i < list.size(); i++) {
            int element = list.get(i);
            if (target < element) {
                record = i;
                break;
            }
        }
        return record;
    }

    public static void main(String[] args) {
//        8	2		"OOOOXOOO"
        Solution3 obj = new Solution3();
        int n1 = 8;
        int k1 = 2;
        String[] cmd1 = new String[]{"D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"};
//        obj.solution(n1, k1, cmd1);

//        8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]
//        기댓값 〉	"OOXOXOOO"
        int n2 = 8;
        int k2 = 2;
        String[] cmd2 = new String[]{"D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"};
        obj.solution(n2, k2, cmd2);
    }
}