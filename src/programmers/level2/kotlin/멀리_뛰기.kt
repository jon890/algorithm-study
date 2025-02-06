package programmers.level2.kotlin

import java.math.BigInteger

/**
 * 1칸 Or 2칸 뛰기 가능
 * 칸이 4칸 있을 떄, 5방법
 * 최대 몇 가지인지 알아내 1234567로 나눈 나머지 리턴
 *
 * n = 4 5방법
 * 1 * 4
 * 1 * 2 + 2 * 1 (
 * 2 * 2
 *
 * n = 3 3방법
 * 1 * 3
 * 1 * 1 + 2 * 1
 *
 *
 * n = 10
 * 1 * 10
 * 1 * 8 + 2 * 1
 * 1 * 6 + 2 * 2
 * ...
 * 2 * 5
 *
 * 해당 문제가 피보나치 수열이라고 하네.. 이걸 어떻게 알지?
 */
class 멀리_뛰기 {

    fun solution(n: Int): Long {
        var answer = 0L
        val loopCount = n / 2 + 1

        val quote = BigInteger.valueOf(1234567L)

        for (countOf2 in 0 until loopCount) {
            val countOf1 = n - countOf2 * 2

            if (countOf1 == 0 || countOf2 == 0) {
                answer++
                continue
            }

            val result =
                factorial(countOf1 + countOf2) / (factorial(countOf1) * factorial(countOf2))
            answer += result.remainder(quote).toLong()
        }

        return answer % 1234567
    }

    fun factorial(n: Int): BigInteger {
        if (n == 1) {
            return BigInteger.ONE
        }

        var number = BigInteger.ONE
        for (i in n downTo 1) {
            number = number.multiply(BigInteger.valueOf(i.toLong()))
        }

        return number
    }

    fun testTemplate(n: Int, answer: Long) {
        val result = solution(n)

        if (result == answer) {
            println("정답 입니다")
        } else {
            println("오답 입니다. result: ${result}, answer: ${answer}")
        }
    }
}


fun main() {
    멀리_뛰기().let {
        it.testTemplate(4, 5)
        it.testTemplate(3, 3)
        it.testTemplate(1, 1)
        it.testTemplate(5, 8)
    }
}