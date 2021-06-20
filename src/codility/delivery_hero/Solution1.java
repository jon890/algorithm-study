package codility.delivery_hero;

import java.util.*;

public class Solution1 {

    private final static String EMPLOYEE_DELIMITER = "; ";

    public static String solution(String S, String C) {
        // write your code in Java SE 8

        // first, optional middle, last
        // first.last@company.com


        String[] employees = S.split(EMPLOYEE_DELIMITER);
        List<String> employeeEmails = new ArrayList<>();
        Map<String, Integer> nameCountMap = new HashMap<>();

        for (String employee : employees) {
            // todo kbt : name delimiter도 변수로?
            String[] name = employee.split(" ");
            String first;
            String last;

            if (name.length == 2) { // not optional middle name
                first = name[0];
                last = name[1];
            } else if (name.length == 3) { // have optional middle name
                first = name[0];
                last = name[2];
            } else { // has error?
                continue;
            }

            // last name processing
            last = processLastName(last);

            // check already have email
            String key = first + "_" + last;
            int nextCount = 1;
            if (nameCountMap.containsKey(key)) {
                nextCount = nameCountMap.get(key) + 1;
            }

            String email = makeEmail(first, last, C, nextCount);
            employeeEmails.add(email);
            nameCountMap.put(key, nextCount);
        }

        return String.join(EMPLOYEE_DELIMITER, employeeEmails);
    }

    private static String processLastName(String last) {
        // hyphen remove
        last = last.replace("-", "");

        // maximum 8 letters
        last = last.substring(0, Math.min(8, last.length()));

        return last;
    }

    private static String makeEmail(String first, String last, String company, int nextCount) {
        String email = first.toLowerCase(Locale.ROOT) +
                "." +
                last.toLowerCase(Locale.ROOT) +
                (nextCount == 1 ? "" : nextCount) +
                "@" +
                company.toLowerCase(Locale.ROOT) +
                ".com";

        return email;
    }

    public static void main(String[] args) {
        String S = "John Doe; Peter Benjamin Parker; Mary Jane Watson-Parker; John Elvis Doe; John Evan Doe; Jane Doe; Peter Brian Parker";
        String C = "Example";
        solution(S, C);
    }
}
