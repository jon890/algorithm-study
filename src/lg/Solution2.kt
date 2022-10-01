package lg

import java.util.Stack

/**
 * 정확성 테스트
테스트 1 〉 통과 (11.37ms, 64.5MB)
테스트 2 〉 통과 (8.67ms, 63.2MB)
테스트 3 〉 통과 (9.57ms, 63.7MB)
테스트 4 〉 통과 (14.35ms, 63.9MB)
테스트 5 〉 통과 (8.97ms, 64MB)
테스트 6 〉 통과 (9.95ms, 64MB)
테스트 7 〉 통과 (11.01ms, 63MB)
테스트 8 〉 통과 (11.32ms, 63.4MB)
테스트 9 〉 통과 (10.97ms, 65.2MB)
테스트 10 〉 통과 (10.56ms, 65.1MB)
테스트 11 〉 통과 (12.87ms, 62.6MB)
테스트 12 〉 통과 (8.87ms, 64.1MB)
테스트 13 〉 통과 (9.34ms, 65.3MB)
채점 완료
 */
class Solution2 {

    /**
     * 압축된 문자열을 원래 문자열로
     */
    fun solution(compressed: String): String {
        var copy = compressed.take(compressed.length)

        while (true) {
            var start = -1
            var end = -1
            var k = "0"

            for (i in copy.indices) {
                if (copy[i] == '(') {
                    start = i

                    val numberStack = Stack<Char>()
                    val numberBuilder = StringBuilder()
                    for (j in i -1 downTo 0) {
                        if (copy[j] in '0'..'9') {
                            numberStack.push(copy[j])
                        } else {
                            break
                        }
                    }
                    for (n in numberStack.indices) {
                        numberBuilder.append(numberStack.pop())
                    }
                    k = numberBuilder.toString()
                } else if (copy[i] == ')') {
                    end = i
                    break
                }
            }

            if (start == -1) break

            copy = StringBuilder()
                .append(copy.substring(0, start - k.length))
                .append(copy.substring(start + 1, end).repeat(k.toInt()))
                .append(copy.substring(end + 1)).toString()
        }

        println(copy)
        return copy
    }


    private fun charToInt(c: Char): Int {
        return c - '0'
    }
}

fun main(args: Array<String>) {
    val obj = Solution2()
//    obj.solution("2(3(hi)co)")
//    obj.solution("2(2(hi)2(co))x2(bo)")
    obj.solution("10(p)")
}
