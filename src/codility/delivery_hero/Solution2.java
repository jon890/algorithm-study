package codility.delivery_hero;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class Solution2 {

    private static final String NO_FILES = "NO_FILES";
    private static final String FILE_DELIMITER = "\\n";

    public static String solution(String S) {
        // write your code in Java SE 8

        // owner perm name
        // separated by one space

        // 다음을 만족하는 파일에 관심이 있다
        // doc, xls, pdf
        // ready-only not writing permitted
        // root user

        // 가장 짧은 파일 이름의 길이를 리턴
        // doc.xls == 7 으로 계산한듯

        List<File> fileList = new ArrayList<>();
        String[] fileInformation = S.split(FILE_DELIMITER);

        for (String info : fileInformation) {
            info = info.trim();
            String[] infoArray = info.split(" ");

            String owner = infoArray[0];
            String permString = infoArray[1];
            String name = infoArray[2].trim();
            String[] nameAndExt = name.split("\\.");
            String fileName = nameAndExt[0];
            String extension = nameAndExt[1];

            File file = new File(owner, permString, fileName, extension);
            fileList.add(file);
        }

        Optional<File> maybeFile = fileList.stream()
                .filter(file ->
                        file.perm == Perm.READ_ONLY && // check perm
                                (file.extension.equals("doc") || // check extension
                                        file.extension.equals("xls") ||
                                        file.extension.equals("pdf")
                                ) &&
                                "root".equals(file.owner) // check owner
                )
                .min(Comparator.comparingInt(o -> o.fileName.length()));

        if (maybeFile.isPresent()) {
            File file = maybeFile.get();
            int length = file.getFullFileName().length();
            return String.valueOf(length);
        } else {
            return NO_FILES;
        }
    }

    public static void main(String[] args) {
        String S = "root rx delete-this.xls \n root r-- bug-report.pdf \n root r-- doc.xls \\n root r-- podcast.flac \n alice r-- system.xls \n root –x invoices.pdf \n admin rwx SETUP.PY";
        solution(S);
    }

    static class File {
        String owner;
        Perm perm;
        String fileName;
        String extension;

        public String getFullFileName() {
            return fileName + "." + extension;
        }

        public File(String owner, String permString, String fileName, String extension) {
            this.owner = owner;
            this.perm = Perm.fromString(permString);
            this.fileName = fileName;
            this.extension = extension;
        }
    }

    // todo kbt : 비트 계산 활용해서 개선해보기
    enum Perm {
        READ_ONLY("r--"),
        NOT_CHECKED("NOT_CHECKED");

        String permString;

        Perm(String permString) {
            this.permString = permString;
        }

        static Perm fromString(String permString) {
            if (permString == null || permString.equals("")) {
                return NOT_CHECKED;
            }

            for (Perm perm : Perm.values()) {
                if (perm.permString.equals(permString)) {
                    return perm;
                }
            }

            return NOT_CHECKED;
        }
    }
}
