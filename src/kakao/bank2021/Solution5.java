package kakao.bank2021;

public class Solution5 {

    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];

        for (int i = 0; i < prices.length; i++) {
            // 해당 원소 뒤의 원소가 나보다 큰지 비교
            int count = 0;

            for (int j = i + 1; j < prices.length; j++) {
                if (prices[i] < prices[j]) count++;
            }

            answer[i] = count;
        }
        return answer;
    }
}

// 시간 부족할 거 같아서 최적화는 못함..
// 42 / 70