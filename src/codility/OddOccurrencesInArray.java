package codility;

import java.util.HashMap;
import java.util.Map;

// LESSON 2 - Arrays
public class OddOccurrencesInArray {

    public int solution(int[] A) {
        // write your code in Java SE 8
        // 짝 지어지지 않는 수를 리턴
        Map<Integer, Integer> map = new HashMap<>();
        for (int i : A) {
            map.put(i, map.get(i) == null ? 1 : map.get(i) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() % 2 == 1) {
                return entry.getKey();
            }
        }

        return -1;
    }

}
