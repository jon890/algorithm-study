package toss

/**
 * 가짜 영수증
 *
 * 1.. 0-9 사이의 숫자 , 구분자로만 이뤄져야 한다
 * 2.. 0100은 옳지 않음 => 0원이면 0만
 * 3.. 구분자가 있거나, 아니면 없을 수도
 *
 * 
 * // TODO 1케이스 실패
 */
class Solution3 {
    val SEPARATOR = ','
    fun solution(amountText: String): Boolean {
        // 길이가 0이 아닌 문자가 0으로 시작하는지 판단
        if (amountText.length != 1 && amountText[0] == '0') {
            return false
        }

        // 다른 문자가 있는지 판단
        var hasSeparator = false
        for (i in 0..amountText.lastIndex) {
            val char = amountText[i]
            if ((char < '0' || char > '9') && char != SEPARATOR) {
                return false
            }

            if (amountText[i] == SEPARATOR) {
                hasSeparator = true
            }
        }

        // 숫자만 있는 경우
        if (!hasSeparator) return true

        // 처음이나 끝에 구분자가 나타나는 경우
        if (amountText[0] == SEPARATOR) return false
        if (amountText[amountText.lastIndex] == SEPARATOR) return false

        var count =0
        for (i in amountText.lastIndex downTo 0) {
            count++

            // 각 4번마다 구분자 등장
            if (count % 4 == 0 && amountText[i] != SEPARATOR) {
                return false
            }
        }

        return true
    }

    fun testTemplate(amountText: String, answer: Boolean) {
        val ret = solution(amountText)
        if (ret == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    Solution3().let {
//        it.testTemplate("1만원", false)
//        it.testTemplate("10,000원", false)
//        it.testTemplate("+300", false)
//        it.testTemplate("0100", false)
//        it.testTemplate("39900", true)
//        it.testTemplate("25,000,123", true)
//        it.testTemplate("24,999,99", false)
//        it.testTemplate("10,000,", false)
//        it.testTemplate(",999,000", false)
//        it.testTemplate("123,456,789", true)
//        it.testTemplate("12", true)
//        it.testTemplate("0", true)
//        it.testTemplate("00", false)
        it.testTemplate("", false)
    }
}