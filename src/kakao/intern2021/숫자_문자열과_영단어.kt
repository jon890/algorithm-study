package kakao.intern2021

class 숫자_문자열과_영단어 {

    fun solution(s: String): Int {
        val wordMap = mapOf(
            "zero" to 0,
            "one" to 1,
            "two" to 2,
            "three" to 3,
            "four" to 4,
            "five" to 5,
            "six" to 6,
            "seven" to 7,
            "eight" to 8,
            "nine" to 9
        )

        val numberString = StringBuilder()
        val word = StringBuilder()
        for (element in s) {
            // 숫자
            if (element in '0'..'9') {
                numberString.append(element)
            } else {
                // 문자
                word.append(element)
            }

            val wordString = word.toString()
            if (wordMap.containsKey(wordString)) {
                val number = wordMap[wordString]
                numberString.append(number)
                word.clear()
            }
        }

        //println(numberString)
        return numberString.toString().toInt()
    }

    // 다른 분들의 풀이..
    fun solutionOther(s: String): Int {
        // 자료구조 선언
        val dict = mapOf(
            "zero" to 0,
            "one" to 1,
            "two" to 2,
            "three" to 3,
            "four" to 4,
            "five" to 5,
            "six" to 6,
            "seven" to 7,
            "eight" to 8,
            "nine" to 9
        )
        var answer = s

        // 해당 자료구조를 통해 로직 수행
        // 단어는 다른 단어를 완전히 포함하지 않으므로.. one onetwo 이런 경우가 있었다면.. 안되겠지
        // replace 만을 통해 처리가능
        for ((k, v) in dict) {
            answer = answer.replace(k, v.toString())
        }

        return answer.toInt()
    }
}

fun main() {
    val obj = 숫자_문자열과_영단어()
    obj.solution("one4seveneight")
    obj.solution("23four5six7")
    obj.solution("2three45sixseven")
    obj.solution("123")

    // "one4seveneight"	1478
    // "23four5six7"	234567
    // "2three45sixseven"	234567
    // "123"	123
}
