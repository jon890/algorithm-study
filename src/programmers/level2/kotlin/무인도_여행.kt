package programmers.level2.kotlin

import java.util.*

/**
 * 무인도 정보
 * X or 1 ~ 9
 * X => 바다
 * 숫자 무인도
 * 식량 최대 몇일 머물 수 있는가
 *
 * 각 점에서 지도 연결
 */
class 무인도_여행 {

    val SEA = 'X'

    fun solution(maps: Array<String>): IntArray {
        val rowSize = maps.size
        val colSize = maps[0].length

        val visited = Array(rowSize) { BooleanArray(colSize) { false } }
        val queue = LinkedList<IntArray>()
        val answers = mutableListOf<Int>()

        for (i in maps.indices) {
            val row = maps[i]

            for (j in row.indices) {
                if (row[j] == SEA) continue
                if (visited[i][j]) continue

                var sum = 0
                queue.push(intArrayOf(i, j))
                while (queue.size > 0) {
                    val pos = queue.poll()
                    val x = pos[0]
                    val y = pos[1]
                    if (visited[x][y]) continue
                    visited[x][y] = true
                    sum += maps[x][y].digitToInt()

                    // 상
                    if (x > 0) {
                        val nextX = x - 1
                        val nextY = y
                        if (!visited[nextX][nextY] && maps[nextX][nextY] != SEA) {
                            queue.push(intArrayOf(nextX, nextY))
                        }
                    }

                    // 하
                    if (x < rowSize - 1) {
                        val nextX = x + 1
                        val nextY = y
                        if (!visited[nextX][nextY] && maps[nextX][nextY] != SEA) {
                            queue.push(intArrayOf(nextX, nextY))
                        }
                    }

                    // 좌
                    if (y > 0) {
                        val nextX = x
                        val nextY = y - 1
                        if (!visited[nextX][nextY] && maps[nextX][nextY] != SEA) {
                            queue.push(intArrayOf(nextX, nextY))
                        }
                    }

                    // 우
                    if (y < colSize - 1) {
                        val nextX = x
                        val nextY = y + 1
                        if (!visited[nextX][nextY] && maps[nextX][nextY] != SEA) {
                            queue.push(intArrayOf(nextX, nextY))
                        }
                    }
                }
                answers.add(sum)
            }
        }

        answers.sort()
        return if (answers.size == 0) intArrayOf(-1) else answers.toIntArray()
    }


    fun testTemplate(maps: Array<String>, result: IntArray) {
        val ret = solution(maps)
        if (result.contentEquals(ret)) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    무인도_여행().let {
        it.testTemplate(arrayOf("X591X", "X1X5X", "X231X", "1XXX1"), intArrayOf(1, 1, 27))
        it.testTemplate(arrayOf("XXX", "XXX", "XXX"), intArrayOf(-1))
        it.testTemplate(arrayOf("X1X", "3XX", "456"), intArrayOf(1, 18))
    }
}