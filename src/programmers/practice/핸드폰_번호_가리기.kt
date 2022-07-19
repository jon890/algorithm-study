package programmers.practice

class 핸드폰_번호_가리기 {
    fun solution(phone_number: String): String {
        return "${"".padEnd(phone_number.length - 4, '*')}${phone_number.takeLast(5)}"
    }
}