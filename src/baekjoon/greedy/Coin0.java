package baekjoon.greedy;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

/**
 * 백준 - 그리디 - 동전 0
 * https://www.acmicpc.net/problem/11047
 *
 */
public class Coin0 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 동전 종류수와 목표 값
        String[] typesAndTarget = scanner.nextLine().split(" ");
        int numberOfTypes = Integer.parseInt(typesAndTarget[0]);
        int target = Integer.parseInt(typesAndTarget[1]);

        // 각 동전의 가격
        /**
         * 유의 사항 - 각 동전의 가치는 그 전 동전 가치의 배수이다.
         */
        List<Integer> typeOfCoins = new ArrayList<>();
        for (int i = 0; i < numberOfTypes; i++) {
            int coin = Integer.parseInt(scanner.nextLine());
            typeOfCoins.add(coin);
        }

        int answer = getSolution(target, typeOfCoins);
        System.out.println(answer);
    }

    public static int getSolution(int target, List<Integer> typeOfCoins) {
        // 완벽한 거스름돈 문제네..
        // greedy 하게 해결 가능!
        // 무조건 많은 순으로 target 에 접근하는 것이 최적의 해를 보장한다

        // 내림차순으로 정렬
        typeOfCoins.sort((o1, o2) -> Integer.compare(o2, o1));

        int count = 0;
        int newTarget = target;
        for (int coin : typeOfCoins) {
            count += newTarget / coin;
            newTarget = newTarget % coin;
        }

        return count;
    }
}
