package programmers.level1

import java.time.Instant
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit


class 크기가_작은_부분문자열 {

    fun solution(t: String, p: String): Int {
//         for (i in 0..t.length - p.length) {
//            val sub = t.substring(i, i + p.length)
//            if (p.toLong() >= sub.toLong()) {
//                answer++
//            }
//        }
        return (0..t.length - p.length)
            .map { t.substring(it until it + p.length) }
            .count { it <= p }
    }

    fun test1() {
        testTemplate("3141592", "271", 2)
    }

    fun test2() {
        testTemplate("500220839878", "7", 8)
    }

    fun test3() {
        testTemplate("10203", "15", 3)
    }

    private fun testTemplate(t: String, p: String, expected: Int) {
        val start = LocalDateTime.now()
        val result = solution(t, p)
        if (result != expected) {
            throw RuntimeException("정답이 아닙니다! ===> result: ${result}, expected: ${expected}")
        } else {
            val end = LocalDateTime.now()
            println("테스트를 통과하였습니다! ===> 수행시간 ${ChronoUnit.MILLIS.between(start, end)}ms")
        }
    }
}

fun main() {
    크기가_작은_부분문자열().let {
        it.test1()
        it.test2()
        it.test3()
    }
}