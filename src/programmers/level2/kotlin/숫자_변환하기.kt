package programmers.level2.kotlin

import java.util.*

/**
 * x => y
 * 연산 3개
 * bfs로 모두 검사
 *
 * 첫 번째 시도 => 50점, 시간 초과
 * 모든 경우를 검사하면 실패한다
 */
class 숫자_변환하기 {

    fun solution(x: Int, y: Int, n: Int): Int {
        val answers = mutableListOf<Int>()
        val queue = LinkedList<IntArray>()
        queue.push(intArrayOf(x, 0))

        while (queue.isNotEmpty()) {
            val data = queue.poll()
            val value = data[0]
            val count = data[1]

            if (value == y) {
                answers.add(count)
                continue
            }
            val op3 = value * 3
            val op2 = value * 2
            val op1 = value + n

            if (op1 <= y) queue.push(intArrayOf(op1, count + 1))
            if (op2 <= y) queue.push(intArrayOf(op2, count + 1))
            if (op3 <= y) queue.push(intArrayOf(op3, count + 1))
        }

        answers.sort()
        println(answers)
        return if (answers.isEmpty()) -1 else answers.first()
    }

    fun testTemplate(x: Int, y: Int, n: Int, answer: Int) {
        val ret = solution(x, y, n)
        if (answer == ret) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!!")
        }
    }
}

fun main() {
    숫자_변환하기().let {
//        it.testTemplate(10, 40, 5, 2)
//        it.testTemplate(10, 40, 30, 1)
//        it.testTemplate(2, 5, 4, -1)
        it.testTemplate(1, 1_000_000, 1, -1)
    }
}