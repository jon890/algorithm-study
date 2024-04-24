package kakao.winterintern2024

/**
 * 카카오톡 선물하기
 * 다음 달에 누가 많이 받을지 예측
 *
 * a -> b 5번
 * b -> a 3번
 * ==> b => a에게 선물 1개
 *
 * 선물지수 = 친구들에게 준 선물 - 받은 선물
 * a = -3, b = 1
 * a와 b가 주고 받은 적 x, 주고 받은 횟수 같다면
 * a => b 선물
 *
 * 착실히 구현
 */
class 가장_많이_받은_선물 {
    fun solution(friends: Array<String>, gifts: Array<String>): Int {
        val counts = Array(friends.size) { IntArray(friends.size) { 0 } }
        val indexes = friends.mapIndexed { index, name -> name to index }.toMap()

        gifts.forEach {
            val fromTo = it.split(" ")
            val from = fromTo[0]
            val to = fromTo[1]

            val fromIndex = indexes[from]
            val toIndex = indexes[to]

            if (fromIndex == null || toIndex == null) {
                println("친구 이름이 존재하지 않음 from:$from to:$to")
                return@forEach // continue
            }

            counts[fromIndex][toIndex]++
        }
//        println(counts.contentDeepToString())

        // 선물지수
        val giftFactor = IntArray(friends.size) { 0 }
        for (i in friends.indices) {
            val from = friends[i]
            val fromIndex = indexes[from]

            if (fromIndex == null) {
                println("친구 이름이 존재하지 않음 from:$from")
                continue
            }

            var give = 0
            var take = 0

            for (j in friends.indices) {
                if (i == j) continue
                give += counts[fromIndex][j]
            }

            for (k in friends.indices) {
                if (i == k) continue
                take += counts[k][fromIndex]
            }

            giftFactor[fromIndex] = give - take
        }
//        println("선물지수: ${giftFactor.contentToString()}")

        val expectation = IntArray(friends.size) { 0 }
        for (i in friends.indices) {
            for (j in i..friends.size - 1) {
                if (i == j) continue

                val from = friends[i]
                val to = friends[j]

                val fromIndex = indexes[from]
                val toIndex = indexes[to]

                if (fromIndex == null || toIndex == null) {
                    println("친구 이름이 존재하지 않음 from:$from to:$to")
                    continue
                }

                val fromTo = counts[fromIndex][toIndex]
                val toFrom = counts[toIndex][fromIndex]

                if (fromTo + toFrom == 0 || fromTo == toFrom) { // 주고 받은 기록 O
                    // 선물 지수 비교
                    val fromGiftFactor = giftFactor[fromIndex]
                    val toGiftFactor = giftFactor[toIndex]

                    if (fromGiftFactor > toGiftFactor) {
                        expectation[fromIndex]++
                    } else if (fromGiftFactor < toGiftFactor) {
                        expectation[toIndex]++
                    }
                } else {
                    if (fromTo > toFrom) {
                        expectation[fromIndex]++
                    } else {
                        expectation[toIndex]++
                    }
                }
            }
        }


        expectation.sortDescending()
//        println(expectation.contentToString())

        return expectation.first()
    }
}

fun main() {
    가장_많이_받은_선물().let {
        val ret = it.solution(
            arrayOf("muzi", "ryan", "frodo", "neo"),
            arrayOf(
                "muzi frodo",
                "muzi frodo",
                "ryan muzi",
                "ryan muzi",
                "ryan muzi",
                "frodo muzi",
                "frodo ryan",
                "neo muzi"
            )
        )
        if (ret == 2) {
            println("정답입니다!!")
        }
    }
}