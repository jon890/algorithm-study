package kakao.bank2021;

public class Solution1 {

    public int solution(String[] deposits) {

        int sum = 0;

        for (String deposit : deposits) {
            String[] info = deposit.split(" ");
            String[] date = info[0].split("/");

            // 날짜
            int month = Integer.parseInt(date[0]);
            int days = Integer.parseInt(date[1]);
            int remainDays = getRemainDays(month, days);

            // 비율과 입금액
            int rate = Integer.parseInt(info[1]);
            int money = Integer.parseInt(info[2]);

            // 결정 이자
            int decisionInterest = (int) Math.floor((double) money * rate / 100 * ((double) remainDays / 365));
            System.out.println(decisionInterest);

            // 원금 + 이자
            sum += money + decisionInterest;
        }

        return sum;
    }

    private int getRemainDays(int month, int days) {
        int[] daysOfMonth = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        int result = 0;
        for (int i = month; i < daysOfMonth.length; i++) {
            result += daysOfMonth[i];
        }
        result += daysOfMonth[month - 1] - days;

        return result;
    }

    public static void main(String[] args) {
        Solution1 obj = new Solution1();
//        System.out.println(obj.getRemainDays(1, 3));

        String[] test1 = new String[]{"01/01 2 50000", "01/03 1 999", "01/31 9 10000", "02/05 5 6547", "02/05 6 1", "06/30 5 5000", "10/15 5 2529", "12/30 4 10000"};
        obj.solution(test1);
    }
}

// 결정이자, 소숫점 이하는 버린다
// 100 / 100