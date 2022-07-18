package kakao.blind2022

import java.util.*

class 신고_결과_받기 {
    fun solution(id_list: Array<String>, report: Array<String>, k: Int): IntArray {

        val userReportCountMap = id_list.associateWith { 0 }.toMutableMap() // 아이디 ~ 신고당한 횟수를 연관지은 맵
        val userReportUserMap = id_list.associateWith { hashSetOf<String>() }.toMutableMap() // 아이디 ~ 신고한 유저 아이디 목록
        report.toSet() // 중복제거 => 그 사람이 같은 사람에게 신고해도 결과는 1번으로 처리
            .forEach {
                val info = it.split(" ")
                val me = info[0]  // 신고한 유저
                val target = info[1] // 신고당한 유저

                userReportCountMap[target] = userReportCountMap[target]!! + 1
                userReportUserMap[me]!!.add(target)
            }


        return id_list.map { user ->
            userReportUserMap[user]!!.count { reportedUser ->
                userReportCountMap[reportedUser]!! >= k
            }
        }.toIntArray()
    }
}

fun main() {
    val id_list_1 = arrayOf("muzi", "frodo", "apeach", "neo")
    val report_1 = arrayOf("muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi")
    val k_1 = 2
    val answer_1 = arrayOf(2, 1, 1, 0)

    val obj = 신고_결과_받기()
    val result = obj.solution(id_list_1, report_1, k_1)
    println(result.contentToString())
}

// 문제 분석
// 한 번에 한 명의 유저 신고
// 신고 횟수 제한 x
// 동일한 유저에 대한 신고 횟수 1회로 처리
// k번 이상 신고된 유저 ==> 정지 ===> 신고자에게 정지 메일 발송

// 결과
// stream 메소드들을 많이 사용해서 속도는 느림

// 다른풀이 참고
// groupBy, asSequence, flatten, groupingBy, eachCount 등 더 쩌는 메소드들이 많았다.
// Wow..
class Solution {
    fun solution(id_list: Array<String>, report: Array<String>, k: Int): IntArray =
        report
            .map { it.split(" ") }
            .groupBy { it[1] }
            .asSequence()
            .map { it.value.distinct() }
            .filter { it.size >= k }
            .flatten()
            .map { it[0] }
            .groupingBy { it }
            .eachCount()
            .run { id_list.map { getOrDefault(it, 0) }.toIntArray() }
}