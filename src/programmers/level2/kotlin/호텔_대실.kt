package programmers.level2.kotlin

import java.util.*

class 호텔_대실 {

    fun solution(book_time: Array<Array<String>>): Int {

        val processed = book_time.mapIndexed { index, booking ->
            val start = timeStrToMinute(booking[0])
            val end = timeStrToMinute(booking[1])
            arrayOf(intArrayOf(start, 0, index), intArrayOf(end, 1, index))
        }.flatMap {
            it.toList()
        }.sortedBy {
            it[0]
        }
//        println(processed.joinToString { it.contentToString() })

        val availableRoom = LinkedList<Int>()
        var roomCount = 0
        for (book in processed) {
            val isIn = book[1] == 0
            val time = book[0]

            if (isIn) {
                var index = -1
                for (i in availableRoom.indices) {
                    val availableTime = availableRoom[i]
                    if (time >= availableTime) {
                        // 빈 방 사용 가능
                        index = i
                        break
                    }
                }

                if (index == -1) { // 사용 가능한 방 없음
                    roomCount++
                } else {
                    availableRoom.removeAt(index)
                }
            } else {
                availableRoom.push(book[0] + 10)
            }
        }

        return roomCount
    }

    /**
     * HH:MM => 분으로 변경
     */
    fun timeStrToMinute(dateStr: String): Int {
        val hh = dateStr[0].digitToInt() * 10 + dateStr[1].digitToInt()
        val mm = dateStr[3].digitToInt() * 10 + dateStr[4].digitToInt()
        return hh * 60 + mm
    }

    fun testTemplate(book_time: Array<Array<String>>, answer: Int) {
        val ret = solution(book_time)
        if (ret == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    호텔_대실().let {
        it.testTemplate(
            arrayOf(
                arrayOf("15:00", "17:00"), arrayOf("16:40", "18:20"),
                arrayOf("14:20", "15:20"), arrayOf("14:10", "19:20"),
                arrayOf("18:20", "21:20")
            ),
            3
        )

        it.testTemplate(
            arrayOf(arrayOf("09:10", "10:10"), arrayOf("10:20", "12:20")),
            1
        )

        it.testTemplate(
            arrayOf(arrayOf("10:20", "12:30"), arrayOf("10:20", "12:30"), arrayOf("10:20", "12:30")),
            3
        )
    }
}