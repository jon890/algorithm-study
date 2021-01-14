package baekjoon.implementation;

import java.io.*;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 빠른 A + B
 * https://www.acmicpc.net/problem/15552
 */
public class APlusBFast {
    public static void main(String[] args) {
        // 자바에서는 스캐너 말고
        // BufferedReader 와 BufferedWriter 를 사용해보자

        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
             BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out))) {
            int testCases = Integer.parseInt(br.readLine());
            for (int i = 0; i < testCases; i++) {
                String[] aAndB = br.readLine().split(" ");
                int a = Integer.parseInt(aAndB[0]);
                int b = Integer.parseInt(aAndB[1]);
                bw.write(a + b + "\n");
            }

            bw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
