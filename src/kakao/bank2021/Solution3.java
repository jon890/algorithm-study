package kakao.bank2021;

public class Solution3 {

    public int solution(int n, int[] price) {
        // 0이 처음으로 등장할 때 구매 후
        // 쌀 떄 사고 비쌀 때 팔아라
        int count = 0;
        int money = 0;

        for (int i = 0; i < price.length; i++) {
            int currentPrice = price[i];
            int nextPrice;
            try {
                nextPrice = price[i + 1];
            } catch (ArrayIndexOutOfBoundsException e) {
                nextPrice = 0;
            }

            // 0이면 무조건 구매
            if (currentPrice == 0) {
                count++;
                continue;
            }

            // 가격이 다음날 오르기 전에 구매해라
            if (currentPrice < nextPrice && money - currentPrice >= 0) {
                money -= currentPrice;
                count++;
            }

            // 가격이 다음날 떨어지기 전에 팔아라
            if (count > 0 && currentPrice > nextPrice) {
                money += currentPrice * count;
                count = 0;
            }
        }

        return money;
    }

    public static void main(String[] args) {
        Solution3 obj = new Solution3();

//        int n1 = 3;
//        int[] price1 = new int[]{0, 1, 2};
//        obj.solution(n1, price1);

        int n3 = 3;
        int[] price3 = new int[]{0, 2, 1, 1, 2};
        obj.solution(n3, price3);
    }
}

// 신비한 돌은 시세가 매일 달라짐
// 하루에 최대 하나의 돌만 살 수 있다
// 0일 때 신비한 돌을 사야함
// 최대 차익

// 16.7 / 100 ... 반성