package toss;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Solution {

    public static void main(String[] args) {
        testTemplate("1만원", false);
        testTemplate("10,000원", false);
        testTemplate("+300", false);
        testTemplate("0100", false);
        testTemplate("39900", true);
        testTemplate("25,000,123", true);
        testTemplate("24,999,99", false);
        testTemplate("10,000,", false);
        testTemplate(",999,000", false);
    }

    public static void testTemplate(String number, boolean answer) {
        boolean ret = solution(number);
        if (ret == answer) {
            System.out.println("정답 입니다!!");
        } else {
            System.out.println("오답 입니다!!");
        }
    }

    public static boolean solution(String number) {
        Pattern pattern = Pattern.compile("^(?!.*,{2})\\d{1,3}(,\\d{3})*$|^(\\d+)$");
        Matcher matcher = pattern.matcher(number);
        return matcher.find();
    }
}
