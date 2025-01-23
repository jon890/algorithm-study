package toss

/**
 * 나만의 L4 만들기
 * 라운드 로빈
 * stick 옵션 true 이전에 분배된 서버로 요청이 분배
 * 같은 요청이면 다시 해당 서버로 분배
 * 
 * 서버가 3대이면 어떻게 동작?
 */
class Solution4 {
    fun solution(servers: Int, sticky: Boolean, requests: IntArray): Array<IntArray> {
        val requestServerRelation = mutableMapOf<Int, Int>() // 요청 - 서버 관계
        val serverRequests = Array(servers) { mutableListOf<Int>() }

        var serverIndex = 0
        for (req in requests) {
            if (sticky && requestServerRelation.containsKey(req)) {
                serverIndex = requestServerRelation[req]!!
            }

            serverRequests[serverIndex].add(req)
            if (sticky) {
                requestServerRelation[req] = serverIndex
            }

            serverIndex++
            if (serverIndex == servers) {
                serverIndex = 0
            }
        }

        return serverRequests.map { it.toIntArray() }.toTypedArray()
    }

    fun testTemplate(servers: Int, sticky: Boolean, requests: IntArray, answer: Array<IntArray>) {
        val ret = solution(servers, sticky, requests)
        if (answer.contentDeepEquals(ret)) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    Solution4().let {
        it.testTemplate(2, false, intArrayOf(1, 2, 3, 4), arrayOf(intArrayOf(1, 3), intArrayOf(2, 4)))
        it.testTemplate(2, true, intArrayOf(1, 1, 2, 2), arrayOf(intArrayOf(1, 1), intArrayOf(2, 2)))
        it.testTemplate(2, true, intArrayOf(1, 2, 2, 3, 4, 1), arrayOf(intArrayOf(1, 3, 1), intArrayOf(2, 2, 4)))
    }
}