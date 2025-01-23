package programmers.bruteforce

/**
 * N개 송전탑, 트리
 * 하나 끊어서 네트워크 2개로,
 * 두 전력망 송전탑 개수 비슷하게
 *
 * 아무 가지나 잘라보고 둘이 네트워크 개수 파악
 */
class 전력망을_둘로_나누기 {

    fun solution(n: Int, wires: Array<IntArray>): Int {
        val connected = MutableList(n) { BooleanArray(n) { false } }

        wires.forEach {
            val start = it[0] - 1
            val end = it[1] - 1

            connected[start][end] = true
            connected[end][start] = true
        }

        connected.forEach { println(it.contentToString()) }


        var answer: Int = -1
        return answer
    }
}

fun main(args: Array<String>) {
    전력망을_둘로_나누기().solution(
        9,
        arrayOf(
            intArrayOf(1, 3),
            intArrayOf(2, 3),
            intArrayOf(3, 4),
            intArrayOf(4, 5),
            intArrayOf(4, 6),
            intArrayOf(4, 7),
            intArrayOf(7, 8),
            intArrayOf(7, 9)
        )
    )
}