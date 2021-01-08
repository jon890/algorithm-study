package baekjoon.greedy;

import java.util.*;

/**
 * 백준 - 그리디 - 회의실 배정
 * https://www.acmicpc.net/problem/1931
 */
public class AssignmentOfRoom {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfConference = Integer.parseInt(scanner.nextLine());
        List<Conference> conferences = new ArrayList<>();

        for (int i = 0; i < numberOfConference; i++) {
            String[] startAndEnd = scanner.nextLine().split(" ");
            int start = Integer.parseInt(startAndEnd[0]);
            int end = Integer.parseInt(startAndEnd[1]);

            Conference conference = new Conference(start, end);
            conferences.add(conference);
        }

        System.out.println(getSolution(conferences));
    }

    /**
     * 시간 초과 ㅋㅋㅋ..
     * @param conferences
     * @return
     */
    public static int getSolution(List<Conference> conferences) {
        // 1 - 회의 시간이 짧은 순서대로 쑤셔 넣어 보자
        Comparator<Conference> comparator = (o1, o2) -> {
            int runningTime1 = o1.endTime - o1.startTime;
            int runningTime2 = o2.endTime - o1.startTime;

            return Integer.compare(runningTime1, runningTime2);
        };

        conferences.sort(comparator);

        Set<Conference> reservedList = new HashSet<>();
        for (Conference willReserve : conferences) {

            // 회의실 예약이 가능한지 확인
            boolean reservable = true;
            for (Conference reserved : reservedList) {
                // 시간이 겹치면 예약 불가
                boolean overlapped = (willReserve.endTime > reserved.startTime) &&
                        (willReserve.startTime < reserved.endTime);

                if (overlapped) {
                    reservable = false;
                    break;
                }
            }

            if (reservable) {
                reservedList.add(willReserve);
            }
        }

        return reservedList.size();
    }
}

class Conference {
    int startTime;
    int endTime;

    public Conference(int startTime, int endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Conference that = (Conference) o;
        return startTime == that.startTime && endTime == that.endTime;
    }

    @Override
    public int hashCode() {
        return Objects.hash(startTime, endTime);
    }
}
