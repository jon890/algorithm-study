package kakao.winterintern2019;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RoomAssignment {

    public long[] solution(long k, long[] room_number) {

        // 방의 상태를 저장하는 변수 선언 및 초기화
        List<Boolean> room_status = new ArrayList<>();
        for (long i = 0; i < k; i++) {
            room_status.add(true);
        }

        // 배정된 결과를 저장
        long[] answer = new long[room_number.length];

        for (int i = 0; i < room_number.length; i++) {
            int want_room_index = (int) room_number[i] - 1;

            if (room_status.get(want_room_index)) {
                room_status.set(want_room_index, false);
                answer[i] = want_room_index + 1;
            } else {
                // 방이 비어있지 않다!!
                // 원하는 방번호보다 크고 가능한 번호중 제일 작은 방을 선택한다
                while (true) {
                    want_room_index++;
                    if (room_status.get(want_room_index)) {
                        room_status.set(want_room_index, false);
                        answer[i] = want_room_index + 1;
                        break;
                    }
                }
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        RoomAssignment obj = new RoomAssignment();

        long k_ex1 = 10L;
        long[] room_number_ex1 = {1,3,4,1,3,1};
        long[] answer_ex1 = obj.solution(k_ex1, room_number_ex1);
        System.out.println("############ 첫 번째 예제의 결과는?");
        System.out.println(Arrays.toString(answer_ex1));
    }
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.70ms, 50.2MB)
테스트 2 〉	통과 (1.83ms, 52.3MB)
테스트 3 〉	통과 (1.86ms, 52.2MB)
테스트 4 〉	통과 (2.14ms, 50MB)
테스트 5 〉	통과 (1.72ms, 52.8MB)
테스트 6 〉	통과 (1.84ms, 52.7MB)
테스트 7 〉	통과 (1.78ms, 52.5MB)
테스트 8 〉	통과 (1.73ms, 50.5MB)
테스트 9 〉	통과 (1.67ms, 52.3MB)
테스트 10 〉	통과 (1.68ms, 50.2MB)
테스트 11 〉	통과 (1.75ms, 54.6MB)
테스트 12 〉	통과 (1.83ms, 50.2MB)
테스트 13 〉	통과 (1.76ms, 50MB)
테스트 14 〉	통과 (1.85ms, 52.2MB)
테스트 15 〉	통과 (1.89ms, 50.2MB)
테스트 16 〉	통과 (1.92ms, 52.7MB)
테스트 17 〉	통과 (1.98ms, 50.4MB)
테스트 18 〉	통과 (2.38ms, 52.6MB)
테스트 19 〉	통과 (2.73ms, 52.7MB)
테스트 20 〉	통과 (2.90ms, 54.1MB)
테스트 21 〉	통과 (4.52ms, 53.1MB)
테스트 22 〉	통과 (4.32ms, 52.3MB)
테스트 23 〉	통과 (3.36ms, 52.6MB)
테스트 24 〉	통과 (4.27ms, 52MB)
테스트 25 〉	통과 (1.82ms, 51MB)
테스트 26 〉	통과 (2.01ms, 52.4MB)
효율성  테스트
테스트 1 〉	통과 (429.51ms, 96.5MB)
테스트 2 〉	통과 (1609.81ms, 91.3MB)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
채점 결과
정확성: 78.8
효율성: 6.1
합계: 84.8 / 100.0

효율성은 어떻게 고려해야할까??
더 생각해봐야해....
링크드 리스크 생각해보자..
오늘은 일단 여기까지
 */