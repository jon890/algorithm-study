package programmers.level2.kotlin

/**
 * -1, +1, -10, +10, -100, +100
 * 절댓값이 10^c인 버튼이 있다
 * 0층으로 내려가는 마법의 돌 최소 개수
 *
 * 첫 번째 시도 => 30.8점, 실패
 * 두 번째 시도 => 46.2점, 실패
 * 세 번째 시도 => 76.9점, 실패 (1, 3, 12번 실패)
 */
class 마법의_엘리베이터 {

    fun solution(storey: Int): Int {

        val str = storey.toString()
        var count = 0
        var isCeil = false
        for (i in str.length - 1 downTo 0) {
            var digit = str[i].digitToInt()
            if (isCeil) {
                digit++
                isCeil = false
            }

            if (digit == 5) {
                if (i > 0 && str[i - 1].digitToInt() > 5) {
                    isCeil = true
                }
                count += 5
            } else if (digit > 5) {
                isCeil = true
                count += 10 - digit
            } else {
                count += digit
            }
        }

        if (isCeil) count++
        return count
    }

    fun testTemplate(storey: Int, answer: Int) {
        val result = solution(storey)
        if (answer == result) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    마법의_엘리베이터().let {
//        it.testTemplate(16, 6)
//        it.testTemplate(2554, 16)
//        it.testTemplate(678, 8)
//        it.testTemplate(999, 2)
//        it.testTemplate(155, 11)
//        it.testTemplate(154, 10)
//        it.testTemplate(545, 14)
//        it.testTemplate(100000000, 1)
//        it.testTemplate(485, 11)
//        it.testTemplate(5555, 20)
//        it.testTemplate(4545, 18)
//        it.testTemplate(9090, 4)
//        it.testTemplate(990, 2)
        it.testTemplate(95, 6)
    }
}