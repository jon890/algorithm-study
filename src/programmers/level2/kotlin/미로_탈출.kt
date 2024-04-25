package programmers.level2.kotlin

import java.util.*

/**
 * 출발 ~ 레버 최소 + 레버 ~ 출구 최소를 구하자
 * 안되는 케이스가 있나?
 */
class 미로_탈출 {

    val START = 'S'
    val EXIT = 'E'
    val LEVER = 'L'
    val PATH = 'O'
    val WALL = 'X'

    fun solution(maps: Array<String>): Int {
        var start: IntArray? = null
        var exit: IntArray? = null
        var lever: IntArray? = null

        // 출발, 레버, 출구 위치 찾기
        for (i in maps.indices) {
            val row = maps[i].toCharArray()
            for (j in row.indices) {
                if (row[j] == START) start = intArrayOf(i, j, 0) // x, y, dist
                if (row[j] == EXIT) exit = intArrayOf(i, j, 0)
                if (row[j] == LEVER) lever = intArrayOf(i, j, 0)
            }
        }

        if (start == null || exit == null || lever == null) {
            throw IllegalStateException("출발, 출구, 레버 상태에 오류가 있습니다")
        }

        val s_l = visit(start, lever, maps)
        val l_e = visit(lever, exit, maps)
        if (s_l == -1 || l_e == -1) return -1
        return s_l + l_e
    }

    fun visit(start: IntArray, target: IntArray, maps: Array<String>): Int {
        val visitQueue = LinkedList<IntArray>()
        val visited = Array(maps.size) { BooleanArray(maps.size) { false } }
        val mapSize = maps.size

        visitQueue.push(start)
        while (visitQueue.size > 0) {
            val pos = visitQueue.poll()

            val currX = pos[0]
            val currY = pos[1]
            val currDist = pos[2]
            visited[currX][currY] = true

            if (currX == target[0] && currY == target[1]) {
                return currDist
            }

            // next pos
            if (currY != 0) {
                val nextX = currX
                val nextY = currY - 1
                if (!visited[nextX][nextY] && maps[nextX][nextY] != WALL)
                    visitQueue.push(intArrayOf(nextX, nextY, currDist + 1))
            }
            if (currY != mapSize - 1) {
                val nextX = currX
                val nextY = currY + 1
                if (!visited[nextX][nextY] && maps[nextX][nextY] != WALL)
                    visitQueue.push(intArrayOf(nextX, nextY, currDist + 1))
            }
            if (currX != 0) {
                val nextX = currX - 1
                val nextY = currY
                if (!visited[nextX][nextY] && maps[nextX][nextY] != WALL)
                    visitQueue.push(intArrayOf(nextX, nextY, currDist + 1))

            }
            if (currX != mapSize - 1) {
                val nextX = currX + 1
                val nextY = currY
                if (!visited[nextX][nextY] && maps[nextX][nextY] != WALL)
                    visitQueue.push(intArrayOf(nextX, nextY, currDist + 1))
            }
        }

        return -1
    }

    fun testTemplate(maps: Array<String>, answer: Int) {
        val ret = solution(maps)

        if (ret == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    미로_탈출().let {
        it.testTemplate(arrayOf("SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"), 16)
        it.testTemplate(arrayOf("LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"), -1)
    }
}