package kakao.blind2023

/**
 * 이모티콘 플러스 서비스 가입자 수 늘려야 됨
 * 서비스 가입자 or 이모티콘 판매액 늘리기
 * 1번 우선, 2번 다음
 *
 * 최대 계산 수
 * 40^7 * 100?
 * => 최대한 가입을 많이 하는 것이 목적
 * => 각 유저는 얼마만큼 할인 비율을 가져야 가입할지 체크?
 */
class 이모티콘_할인행사 {

    fun solution(users: Array<IntArray>, emoticons: IntArray): IntArray {
        val MAX_RATE = 40
        val register = Array<IntArray?>(users.size) { null }

        users.forEachIndexed { index, it ->
            val stdRate = it[0] // 이 비율 이상 할인시 가입
            val stdPrice = it[1] // 이 가격 넘으면 취소 후 구독

            // 최소 비율로 할인 했을 때 이모티콘 플러스에 가입하는가?
            // 무조건 int로 떨어짐
            var minRate = -1
            var maxRate = -1
            for (rate in stdRate..MAX_RATE) {
                val totalPrice = emoticons.sumOf { it * (100 - rate) / 100 }
                if (totalPrice >= stdPrice) {
                    if (minRate == -1) {
                        minRate = rate
                    }
                    maxRate = rate
                } else {
                    break
                }
            }
            if (minRate != -1 && maxRate != -1) {
                register[index] = intArrayOf(minRate, maxRate)
            }
        }
        println(register.joinToString { it.contentToString() })

        val maxRegisterCount = register.count { it != null }

        return intArrayOf(maxRegisterCount, -1)
    }

    fun testTemplate(users: Array<IntArray>, emoticons: IntArray, answer: IntArray) {
        val result = solution(users, emoticons)

        if (answer.contentEquals(result)) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    이모티콘_할인행사().let {
        it.testTemplate(
            arrayOf(intArrayOf(40, 10000), intArrayOf(25, 10000)), intArrayOf(7000, 9000),
            intArrayOf(1, 5400)
        )

//        it.testTemplate(
//            arrayOf(
//                intArrayOf(40, 2900),
//                intArrayOf(23, 10000),
//                intArrayOf(11, 5200),
//                intArrayOf(5, 5900),
//                intArrayOf(40, 3100),
//                intArrayOf(27, 9200),
//                intArrayOf(32, 6900)
//            ),
//            intArrayOf(1300, 1500, 1600, 4900),
//            intArrayOf(4, 13860)
//        )
    }
}