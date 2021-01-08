package baekjoon.greedy;

import java.util.Arrays;
import java.util.Scanner;

/**
 * 백준 알고리즘 - 그리디 - ATM
 * https://www.acmicpc.net/problem/11399
 */
public class ATM {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int peoples = Integer.parseInt(scanner.nextLine());
        int[] processingTimes = new int[peoples];

        String[] processingTimeString = scanner.nextLine().split(" ");
        for (int i = 0; i < processingTimes.length; i++) {
            processingTimes[i] = Integer.parseInt(processingTimeString[i]);
        }

        System.out.println(getSolution(peoples, processingTimes));
    }

    public static int getSolution(int peoples, int[] processingTimes) {
        // short time first 로 작업하면 될것 같다.

        // sorting
        Arrays.sort(processingTimes);

        int times = 0;
        for (int i = 0; i < processingTimes.length; i++) {
            for (int j = 0; j < i; j++) {
                times += processingTimes[j]; // 대기시간
            }
            times += processingTimes[i]; // 처리시간
        }

        return times;
    }
}
