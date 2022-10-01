package dev_matching.backend2022.test

/**
 * 정확성 테스트
테스트 1 〉 통과 (38.11ms, 67.6MB)
테스트 2 〉 통과 (33.60ms, 68.9MB)
테스트 3 〉 통과 (33.58ms, 68.3MB)
테스트 4 〉 통과 (33.42ms, 68.3MB)
테스트 5 〉 통과 (36.87ms, 69.6MB)
테스트 6 〉 통과 (40.87ms, 69.5MB)
테스트 7 〉 통과 (35.56ms, 69.9MB)
테스트 8 〉 통과 (38.72ms, 70.6MB)
테스트 9 〉 통과 (36.27ms, 69.4MB)
테스트 10 〉 통과 (31.32ms, 66.3MB)
테스트 11 〉 통과 (41.38ms, 82.8MB)
테스트 12 〉 통과 (74.82ms, 88.1MB)
테스트 13 〉 통과 (72.09ms, 94.8MB)
테스트 14 〉 통과 (97.92ms, 94.7MB)
테스트 15 〉 통과 (120.61ms, 104MB)
테스트 16 〉 통과 (84.85ms, 104MB)
테스트 17 〉 통과 (147.92ms, 108MB)
테스트 18 〉 통과 (90.83ms, 106MB)
테스트 19 〉 통과 (254.16ms, 105MB)
테스트 20 〉 통과 (43.06ms, 103MB)
테스트 21 〉 통과 (6.15ms, 95.6MB)
테스트 22 〉 통과 (0.41ms, 65.1MB)
테스트 23 〉 통과 (37.57ms, 67.9MB)
테스트 24 〉 통과 (25.79ms, 64.9MB)
테스트 25 〉 통과 (0.03ms, 63.5MB)
채점 결과
정확성: 100.0
효율성: 0.0
합계: 100.0 / 100.0
 */
class Solution1_upgarde {
    fun solution(registered_list: Array<String>, new_id: String): String {
        if (registered_list.find { it == new_id } == null) return new_id

        val index = findNumericIndex(new_id)
        val s: String
        val n: Int
        if (index == -1) {
            s = new_id.take(new_id.length)
            n = 0
        } else {
            s = new_id.substring(0, index)
            n = new_id.substring(index).toInt()
        }

        val existMap = registered_list
            .filter { it.startsWith(s) }
            .map {
                val _index = findNumericIndex(it)
                if (_index == -1) {
                    0
                } else {
                    it.substring(_index).toInt()
                }
            }
            .sorted()
            .filter { it > n }
            .associateWith { true }

        var next = n + 1
        while (true) {
            if (existMap.contains(next)) {
                next++
            } else {
                return "$s$next"
            }
        }

        // 다음 값이 뭘까..?
        // 위에 없는 다음 값..
    }

    private fun findNumericIndex(s: String): Int {
        var index = -1

        for (i in s.indices) {
            if (s[i] in '0'..'9') {
                index = i
                break
            }
        }
        return index
    }
}

fun main(args: Array<String>) {
    val obj = Solution1_upgarde()
//    obj.solution(arrayOf("card", "ace13", "ace16", "banker", "ace17", "ace14"), "ace15")
    obj.solution(arrayOf("cow", "cow1", "cow2", "cow3", "cow4", "cow9", "cow8", "cow7", "cow6", "cow5"), "cow")
}