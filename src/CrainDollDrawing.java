import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

/**
 * 2019 카카오 개발자 겨울 인턴쉽
 * 크레인 인형뽑기 게임
 */
public class CrainDollDrawing {

    public static int solution(int[][] board, int[] moves) {
        // board[i].length 가 성능에 문제가 있을까?..
        // 한 번 선언해 놓고 다같이 사용하자
        // 만약 board 와 moves 크기가 다르다면 익셉션 처리를 고려하자
        int boardLength = board.length;

        // 자료 구조를 이용하자 - 큐(FIFO)
        // 인형 뽑기의 배열 시작점이 위이므로
        // 큐로 넣으면 차곡차곡 쌓이는 효과를 나타낼 수 있다
        List<LinkedList<Integer>> dollStacks = new ArrayList<>();

        // 리스트 초기화 - 큐을 모두 생성해서 넣어줌
        for (int i = 0; i < boardLength; i++) {
            dollStacks.add(new LinkedList<>());
        }

        // 큐에 인형을 넣어주자
        for (int i = 0; i < boardLength; i++) {
            for (int j = 0; j < boardLength; j++) {
                int doll = board[i][j];
                if (doll != 0) {
                    dollStacks.get(j).offer(board[i][j]);
                }
            }
        }

        // 큐에서 인형을 꺼내서 링크드리스트에 담자
        // 왜냐 한 번만 인형을 넣고
        // 제거하는 작업을 반복할 것이기 때문
        List<Integer> drawingDolls = new LinkedList<>();
        for (int position : moves) {
            LinkedList<Integer> dollQueue = dollStacks.get(position - 1);

            Optional<Integer> maybeDoll = Optional.ofNullable(dollQueue.poll());
            int doll = maybeDoll.orElse(-1);
            if (doll != -1) {
                drawingDolls.add(doll);
            }
        }


        int answer = 0;

        // 답을 계산해보자..

        while(true) {
            int previousAnswer = answer;
            int previousDoll = -1;

            for (int i = 0; i < drawingDolls.size(); i++) {
                int currentDoll = drawingDolls.get(i);

                if (previousDoll == currentDoll) {
                    drawingDolls.remove(i);
                    drawingDolls.remove(i-1);
                    answer += 2;
                } else {
                    previousDoll = currentDoll;
                }
            }

            // 값이 변화하지 않는다면 종료
            if (previousAnswer == answer) {
                break;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int[][] boardEx1 = {{0,0,0,0,0}, {0,0,1,0,3}, {0,2,5,0,1}, {4,2,4,4,2}, {3,5,1,3,1}};
        int[] movesEx1 = {1,5,3,5,1,2,1,4};
        int resultEx1 = 4;
        int expectedAnswer1 = solution(boardEx1, movesEx1);

        System.out.println(expectedAnswer1);
        if (resultEx1 == expectedAnswer1) {
            System.out.println("성공");
        }
    }
}


/*
채점을 시작합니다.
        정확성  테스트
        테스트 1 〉	통과 (1.00ms, 50.1MB)
        테스트 2 〉	통과 (1.15ms, 50.7MB)
        테스트 3 〉	통과 (1.15ms, 52.2MB)
        테스트 4 〉	실패 (7.81ms, 50.5MB)
        테스트 5 〉	통과 (1.05ms, 52.2MB)
        테스트 6 〉	통과 (1.09ms, 52.7MB)
        테스트 7 〉	실패 (2.61ms, 50.2MB)
        테스트 8 〉	실패 (4.09ms, 50.4MB)
        테스트 9 〉	실패 (4.31ms, 50.5MB)
        테스트 10 〉	실패 (4.37ms, 51.1MB)
        테스트 11 〉	통과 (7.10ms, 52.4MB)
채점 결과
정확성: 54.5
합계: 54.5 / 100.0
 */
