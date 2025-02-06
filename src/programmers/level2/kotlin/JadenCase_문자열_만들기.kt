package programmers.level2.kotlin

/**
 * 모든 단어 첫 문자 대문자,
 * 그 외 알파벳 소문자.
 * 단 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자.
 */
class JadenCase_문자열_만들기 {

    fun solution(s: String): String {
        val BLANK = " "

        return s.split(BLANK)
            .map {
                if (it == "") {
                    it
                } else {
                    it.first().uppercaseChar() + it.substring(1).lowercase()
                }
            }
            .joinToString(BLANK)
    }

    fun testTemplate(s: String, answer: String) {
        val result = solution(s)

        if (result == answer) {
            println("정답 입니다")
        } else {
            println("오답 입니다. result: ${result}, answer: ${answer}")
        }
    }
}

fun main() {
    JadenCase_문자열_만들기().let {
        it.testTemplate("3people unFollowed me", "3people Unfollowed Me")
        it.testTemplate("for the last week", "For The Last Week")
        it.testTemplate("a b c d", "A B C D")
        it.testTemplate("abc  abc", "Abc  Abc")
    }
}