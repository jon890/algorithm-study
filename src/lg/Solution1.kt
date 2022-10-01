package lg

/**
 * 정확성 테스트
테스트 1 〉 통과 (37.46ms, 68.4MB)
테스트 2 〉 통과 (35.34ms, 68.7MB)
테스트 3 〉 통과 (46.39ms, 69.4MB)
테스트 4 〉 통과 (48.28ms, 69.6MB)
테스트 5 〉 통과 (46.58ms, 69.9MB)
테스트 6 〉 통과 (59.52ms, 69.9MB)
테스트 7 〉 통과 (93.89ms, 98.5MB)
테스트 8 〉 통과 (83.91ms, 107MB)
테스트 9 〉 통과 (111.71ms, 102MB)
테스트 10 〉 통과 (82.71ms, 99.9MB)
테스트 11 〉 통과 (142.50ms, 121MB)
테스트 12 〉 통과 (141.83ms, 118MB)
테스트 13 〉 통과 (161.33ms, 123MB)
테스트 14 〉 통과 (200.18ms, 141MB)
테스트 15 〉 통과 (186.94ms, 150MB)
테스트 16 〉 통과 (205.38ms, 142MB)
테스트 17 〉 통과 (200.03ms, 136MB)
테스트 18 〉 통과 (217.85ms, 143MB)
테스트 19 〉 통과 (25.29ms, 64.5MB)
테스트 20 〉 통과 (32.51ms, 67.1MB)
채점 완료
 */
class Solution1 {

    fun solution(arr: IntArray): Any {
        val groups = hashMapOf<String, Int>()

        for (i in arr.indices) {
            val map = toCountMap(arr[i])
            val key = map.keys.sorted().joinToString("_") { "$it:${map[it]}" }
            groups[key] = groups[key]?.plus(1) ?: 1
        }
        return groups.size
    }

    /**
     * 숫자를 받아서 각 숫자의 갯수를 카운팅 한 맵으로 변환
     */
    private fun toCountMap(n: Int): Map<Int, Int> {
        val result = hashMapOf<Int, Int>()
        n.toString().chunked(1).forEach {
            val number = it.toInt()
            if (result.contains(number)) {
                result[number] = result[number]!! + 1
            } else {
                result[number] = 1
            }
        }
        return result
    }
}

fun main(args: Array<String>) {
    val obj = Solution1()
    obj.solution(intArrayOf(112, 1814, 121, 1481, 1184))
}