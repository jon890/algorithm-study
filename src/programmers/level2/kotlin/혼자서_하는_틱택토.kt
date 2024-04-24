package programmers.level2.kotlin

/**
 * 불가능한 상황 0
 * 가능한 상황 1 반환
 *
 * 첫 번째 시도 => 38.9점
 * 두 번째 시도 => 46.3점 (조건 추가)
 */
class 혼자서_하는_틱택토 {
    fun solution(board: Array<String>): Int {
        var countO = 0
        var countX = 0
        var winO = 0
        var winX = 0

        // 돌 개수 카운트
        for (i in board.indices) {
            val row = board[i].toCharArray()

            for (j in row.indices) {
                val col = row[j]

                if (col == 'O') countO++
                if (col == 'X') countX++
            }
        }

        // 이긴사람 확인
        for (i in board.indices) { // 가로
            val row = board[i]
            if (row === "O".repeat(board.size)) winO++
            if (row === "X".repeat(board.size)) winX++
        }

        for (i in board.indices) { // 세로
            val a = board[i][0]
            val b = board[i][1]
            val c = board[i][2]

            if (a == b && b == c && a == 'O') winO++
            if (a == b && b == c && a == 'X') winX++
        }

        // 대각선
        run {
            val a = board[0][0]
            val b = board[1][1]
            val c = board[2][2]
            if (a == b && b == c && a == 'O') winO++
            if (a == b && b == c && a == 'X') winX++
        }

        run {
            val a = board[0][2]
            val b = board[1][1]
            val c = board[2][0]
            if (a == b && b == c && a == 'O') winO++
            if (a == b && b == c && a == 'X') winX++
        }

//        println("count ==> O:${countO}, X:${countX}")
//        println("wins ==> O:${winO}, X:${winX}")

        // 후공이 더 많음 => 불가능
        if (countX > countO) {
            return 0
        }

        // 경기 진행 상황이 맞지 않음
        if (countO != countX + 1 && countO != countX) {
            return 0
        }

        // 이기는 횟수가 1보다 큼 => 불가능
        if (winO + winX > 1) {
            return 0
        }

        return 1
    }

    fun testTemplate(board: Array<String>, answer: Int) {
        val ret = solution(board)
        if (ret == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    혼자서_하는_틱택토().let {
        it.testTemplate(arrayOf("O.X", ".O.", "..X"), 1)
        it.testTemplate(arrayOf("OOO", "...", "XXX"), 0)
        it.testTemplate(arrayOf("...", ".X.", "..."), 0)
        it.testTemplate(arrayOf("...", "...", "..."), 1)
    }
}