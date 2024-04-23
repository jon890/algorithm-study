package programmers.level2.kotlin

import java.util.*

/**
 * 진행 중이 던것 멈추고
 *  plan <= 1000
 * 과목, 시작, 끝
 *
 * 구현을 잘하자
 */
class 과제_진행하기 {

    fun solution(plans: Array<Array<String>>): Array<String> {
        val ended = mutableListOf<String>()

        plans.sortBy {
            val time = it[1]
            time.replace(":", "").toInt()
        }

        // 첫 과제 시작
        val remainPlans = LinkedList<Array<String>>()
        for (i in plans.indices) {
            val current = plans[i]

            if (i == plans.size - 1) {
                ended.add(current[0])
                break
            }
            val next = plans[i + 1]

            val currentTime = toTime(current[1])
            val nextTime = toTime(next[1])

            val timeDiff = getTimeDiff(nextTime, currentTime)
            val planTime = current[2].toInt()

            if (planTime <= timeDiff) {
                // 완벽히 종료
                ended.add(current[0])

                // 남은 시간 동안 다른 작업 처리
                var remainTime = timeDiff - planTime
                while (remainTime > 0) {
                    if (remainPlans.size == 0) break

                    val remainPlan = remainPlans.first
                    val neededTime = remainPlan[2].toInt()

                    // 아이템 종료
                    if (remainTime >= neededTime) {
                        remainPlans.poll()
                        remainTime -= neededTime
                        ended.add(remainPlan[0])
                    } else {
                        // 불가능 할 경우
                        remainPlan[2] = (neededTime - remainTime).toString()
                        remainTime = 0
                    }
                }

            } else {
                remainPlans.push(arrayOf(current[0], current[1], (planTime - timeDiff).toString()))
            }
        }

        while (remainPlans.size > 0) {
            val item = remainPlans.poll()
            ended.add(item[0])
        }

        return ended.toTypedArray()
    }

    /**
     * 시간 문자를 받아서
     * [시, 분]으로 리턴
     */
    private fun toTime(timeStr: String): IntArray {
        return intArrayOf(
            timeStr[0].digitToInt() * 10 + timeStr[1].digitToInt(),
            timeStr[3].digitToInt() * 10 + timeStr[4].digitToInt(),
        )
    }

    private fun getTimeDiff(time1: IntArray, time2: IntArray): Int {
        return (time1[0] * 60 + time1[1]) - (time2[0] * 60 + time2[1])
    }
}

fun main() {
    val sol = 과제_진행하기()

//    val plans1 = arrayOf(arrayOf("korean", "11:40", "30"), arrayOf("english", "12:10", "20"),
//        arrayOf("math", "12:30", "40")
//    )
//    val ret1 = sol.solution(plans1)

    val plans2 = arrayOf(
        arrayOf("science", "12:40", "50"), arrayOf("music", "12:20", "40"),
        arrayOf("history", "14:00", "30"),
        arrayOf("computer", "12:30", "100")
    )
    val ret2 = sol.solution(plans2)
}
