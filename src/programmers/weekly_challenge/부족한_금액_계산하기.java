package programmers.weekly_challenge;

public class 부족한_금액_계산하기 {

    public long solution(int price, int money, int count) {
        long total = sumOfUntilN(count) * price;
        return money >= total ? 0 : total - money;
    }

    // 1 ~ n 까지의 합을 리턴
    private long sumOfUntilN(int n) {
        return (long) n * (n + 1) / 2;
    }

// 원래 price
// N 번째 이용시, 원래 이용료의 N배
// 놀이기구를 count번 타게 되면 현재 금액에서 얼마가 모자라는가?
// 테스트 케이스 - 4 실패
}
