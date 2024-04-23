package programmers.level2.kotlin

/**
 * 다이아, 철, 돌 곡괭이 0 ~ 5개
 * 피로도 소모
 *
 * 규칙
 * 곡괭이 아무거나
 * 한 번 사용시작 ~ 사용할 수 없을때 까지
 * 광물은 주어진 순서대로
 * 모든 광물 캐거나, 곡괭이 없으면 종료
 *
 * 길 찾기 최대 최소
 * 광물 최대 50개
 */
class 광물캐기 {

    val fatigues = arrayOf(
        mapOf(
            "diamond" to 1,
            "iron" to 1,
            "stone" to 1
        ),
        mapOf(
            "diamond" to 5,
            "iron" to 1,
            "stone" to 1
        ),
        mapOf(
            "diamond" to 25,
            "iron" to 5,
            "stone" to 1
        ),
    )
    val max_gather_mineral = 5


    fun solution(picks: IntArray, minerals: Array<String>): Int {

        // 각 상황에서 3개 곡괭이를 써보고, 피로도 계산
        val fatigues = mutableListOf<Int>()
        for (i in picks.indices) {
            if (picks[i] == 0) continue
            bfs(1, i, 0, picks.copyOf(), minerals, fatigues)
        }

        println(fatigues)

        return fatigues.minOf { it }
    }

    private fun bfs(
        depth: Int,
        selectedPick: Int,
        prevFatigue: Int,
        picks: IntArray,
        minerals: Array<String>,
        totalFatigues: MutableList<Int>
    ) {
        if (depth * max_gather_mineral >= minerals.size) {
            var fatigue = prevFatigue
            for (i in (depth - 1) * max_gather_mineral..minerals.size - 1) {
                fatigue += fatigues[selectedPick][minerals[i]] ?: throw IllegalStateException("해당 광물은 존재하지 않음")
            }
            totalFatigues.add(fatigue)
            return
        }

        var fatigue = prevFatigue
        val newPicks = picks.copyOf()
        newPicks[selectedPick]--
        for (i in (depth - 1) * max_gather_mineral..depth * max_gather_mineral - 1) {
            fatigue += fatigues[selectedPick][minerals[i]] ?: throw IllegalStateException("해당 광물은 존재하지 않음")
        }
        val remainPicks = newPicks.sum()
        if (remainPicks == 0) {
            totalFatigues.add(fatigue)
            return
        } else {
            for (i in picks.indices) {
                if (newPicks[i] == 0) continue
                bfs(depth + 1, i, fatigue, newPicks, minerals, totalFatigues)
            }
        }
    }
}

fun main() {
    val sol = 광물캐기()

    val pick1 = intArrayOf(1, 3, 2)
    val minerals1 = arrayOf("diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone")
    val ret1 = sol.solution(pick1, minerals1)
    if (ret1 != 12) {
        println("정답이 아님")
    }

    val pick2 = intArrayOf(0, 1, 1)
    val minerals2 =
        arrayOf("diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond")
    val ret2 = sol.solution(pick2, minerals2)
    if (ret2 != 50) {
        println("정답이 아님")
    }
}