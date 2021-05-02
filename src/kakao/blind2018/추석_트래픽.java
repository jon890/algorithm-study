package kakao.blind2018;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class 추석_트래픽 {

    public int solution(String[] lines) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");

        List<Log> logs = Arrays.stream(lines)
                .map(line -> {
                    String[] splits = line.split(" ");

                    float processingTime = Float.parseFloat(splits[2].substring(0, splits[2].length() - 1));
                    long processingTimeMillis = (long) (processingTime * 1000);

                    String dateAndTime = splits[0] + " " + splits[1];
                    LocalDateTime end = LocalDateTime.parse(dateAndTime, dtf);
                    LocalDateTime start = end.minus(processingTimeMillis, ChronoUnit.MILLIS);
                    start = start.plus(1, ChronoUnit.MILLIS);

                    return new Log(start, end);
                }).collect(Collectors.toList());

        LocalDateTime currentTime;
        int maxCount = 0;

        for (int i = 0; i < logs.size(); i++) {
            int count;
            Log log = logs.get(i);

            currentTime = log.getStart();
            count = check(currentTime, logs);
            if (count > maxCount) {
                maxCount = count;
            }

            currentTime = log.getEnd();
            count = check(currentTime, logs);
            if (count > maxCount) {
                maxCount = count;
            }
        }

        System.out.println(logs);
        System.out.println(maxCount);
        return maxCount;
    }

    private int check(LocalDateTime intervalStart, List<Log> logs) {
        int count = 0;

        LocalDateTime intervalEnd = intervalStart.plus(1000 - 1, ChronoUnit.MILLIS);

        for (int i = 0; i < logs.size(); i++) {
            Log log = logs.get(i);

            if (log.getEnd().isBefore(intervalStart)) {
                continue;
            }

            if (intervalEnd.isBefore(log.getStart())) {
                continue;
            }

            count++;
        }

        System.out.println(intervalStart);
        System.out.println(count);
        return count;
    }

    public static void main(String[] args) {
        추석_트래픽 obj = new 추석_트래픽();
        obj.solution(new String[]{
                "2016-09-15 01:00:04.001 2.0s",
                "2016-09-15 01:00:07.000 2s"
        });
//        obj.solution(new String[]{
//                "2016-09-15 20:59:57.421 0.351s",
//                "2016-09-15 20:59:58.233 1.181s",
//                "2016-09-15 20:59:58.299 0.8s",
//                "2016-09-15 20:59:58.688 1.041s",
//                "2016-09-15 20:59:59.591 1.412s",
//                "2016-09-15 21:00:00.464 1.466s",
//                "2016-09-15 21:00:00.741 1.581s",
//                "2016-09-15 21:00:00.748 2.31s",
//                "2016-09-15 21:00:00.966 0.381s",
//                "2016-09-15 21:00:02.066 2.62s"}
//        );
    }
}

class Log {
    private LocalDateTime start;
    private LocalDateTime end;

    public LocalDateTime getStart() {
        return start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public Log(LocalDateTime start, LocalDateTime end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public String toString() {
        return "Log{" +
                "start=" + start +
                ", end=" + end +
                '}';
    }
}

/**
 * 2021-05-01
 * js로 시간 다루기가 어려워서 한번 자바로 풀어봄
 * 역시나 테스트케이스 3번은 이해가 되지 않았고
 * 결국 전체 테스트에서도 2개가 틀린듯하다.
 * 흠.. 왜 그런건지 오늘은 이해 안됨..
 * <p>
 *
 * 2021-05-02
 * 문제에서 주어진 1초는 양 끝점을 포함하는 구간이었네..
 * 그래서 시작 구간에 1000 - 1ms인 999ms를 더 해야 종료구간이 됨
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (24.37ms, 53.5MB)
 * 테스트 2 〉	통과 (154.65ms, 58.1MB)
 * 테스트 3 〉	실패 (168.26ms, 59.4MB)
 * 테스트 4 〉	통과 (22.91ms, 54.1MB)
 * 테스트 5 〉	통과 (42.57ms, 54.7MB)
 * 테스트 6 〉	통과 (41.81ms, 53.6MB)
 * 테스트 7 〉	통과 (250.97ms, 79.2MB)
 * 테스트 8 〉	통과 (153.12ms, 58.1MB)
 * 테스트 9 〉	통과 (39.02ms, 54.6MB)
 * 테스트 10 〉	통과 (24.89ms, 53.3MB)
 * 테스트 11 〉	통과 (25.98ms, 53.9MB)
 * 테스트 12 〉	통과 (166.71ms, 58.9MB)
 * 테스트 13 〉	통과 (43.26ms, 54.5MB)
 * 테스트 14 〉	통과 (26.10ms, 54.1MB)
 * 테스트 15 〉	실패 (25.63ms, 54.5MB)
 * 테스트 16 〉	통과 (21.30ms, 55MB)
 * 테스트 17 〉	통과 (21.63ms, 53.1MB)
 * 테스트 18 〉	통과 (277.91ms, 60.6MB)
 * 테스트 19 〉	통과 (235.42ms, 59.9MB)
 * 테스트 20 〉	통과 (220.10ms, 59.9MB)
 * 테스트 21 〉	통과 (23.42ms, 53.7MB)
 * 테스트 22 〉	통과 (20.20ms, 54.3MB)
 * 채점 결과
 * 정확성: 90.9
 * 합계: 90.9 / 100.0
 */