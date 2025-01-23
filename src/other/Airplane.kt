package other

/**
 * 비행기 좌석 예약 처리
 * 1 ~ N 번호 N 줄
 * 각 줄에는 좌석이 10석 (a, b, ... k)
 *
 * 일부 좌석은 이미 예약
 * 1A, 3C 2B 20G 5A와 같이 공백으로 구분
 * 예악 좌석 순서는 임의
 *
 * 최대한 4인 가족에게 좌석을 배정
 * 한줄에서 서로 인접한 네 좌석을 사용
 *
 * 1-3은 앉을수 없고, 2-2로만 앉을 수 있다..?
 */
class Airplane {

    companion object {
        val COLUMN_MAP = mapOf(
            'A' to 0,
            'B' to 1,
            'C' to 2,
            'D' to 3,
            'E' to 4,
            'F' to 5,
            'G' to 6,
            'H' to 7,
            'J' to 8,
            'K' to 9,
        )
    }

    // 한줄에서 최대 케이스는 2팀 => BCDE, FGHJ
    // 불가능하다면 DEFG에 앉아야 함
    fun solution(n: Int, s: String): Int {
        val array = Array(n) { BooleanArray(10) }

        if (s == "") {
            return n * 2
        }

        s.split(" ").forEach {
            val row = it.substring(0, it.length - 1).toInt() - 1
            val col = COLUMN_MAP[it.last()]!!

            array[row][col] = true
        }

        var count = 0
        for (i in array.indices) {
            // 2팀 가능한지 확인
            if (!array[i][1] && !array[i][2] && !array[i][3] && !array[i][4]) {
                count++
                array[i][1] = true
                array[i][2] = true
                array[i][3] = true
                array[i][4] = true
            }

            if (!array[i][5] && !array[i][6] && !array[i][7] && !array[i][8]) {
                count++
                array[i][1] = true
                array[i][2] = true
                array[i][3] = true
                array[i][4] = true
            }

            // 그외의 경우 abc, hjk가 차있어서 defg로만 앉아야 하는 경우
            if (!array[i][3] && !array[i][4] && !array[i][5] && !array[i][6]) {
                count++
                array[i][3] = true
                array[i][4] = true
                array[i][5] = true
                array[i][6] = true
            }
        }
        return count
    }

    fun testTemplate(n: Int, s: String, answer: Int) {
        if (solution(n, s) == answer) {
            println("정답 입니다")
        } else {
            println("오답 입니다")
        }
    }
}

fun main() {

    Airplane().let {
        it.testTemplate(2, "1A 2F 1C", 2)
        it.testTemplate(3, "", 6)
        it.testTemplate(50, "1A 3C 2B 20G 5A 7K 40D 50H", 96)
        it.testTemplate(2, "1A 1C 1D 1F 1G 1J 2C 2H", 1)
        it.testTemplate(22, "1A 3C 2B 20G 5A", 41)
    }

}