package banksalad;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Solution1 {

    /**
     * k만큼 저금해서 p만큼 모은다.
     * 모으고자 하는
     */
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();

        String[] inputs = input.split(" ");
        long total = Long.valueOf(inputs[0]);
        long saved = Long.valueOf(inputs[1]);

        br.close();

        long days;
        if (total % saved == 0) {
            days =  total / saved;
        } else {
            days = (total / saved) + 1;
        }

        System.out.println(days);

        br.close();
    }
}
