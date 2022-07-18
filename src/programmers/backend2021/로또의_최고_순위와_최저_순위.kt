package programmers.backend2021

class 로또의_최고_순위와_최저_순위 {
    fun solution(lottos: IntArray, win_nums: IntArray): IntArray {
        val unknown = lottos.count { it == 0 }
        val correct = win_nums.count { win ->
            lottos.find { lotto -> win == lotto }?.let { true } ?: false
        }

        val maxCorrect = (correct + unknown).coerceAtMost(6)
        val minCorrect = correct.coerceAtLeast(0)
        return intArrayOf(calcRank(maxCorrect), calcRank(minCorrect))
    }

    private fun calcRank(correct: Int): Int {
        return if (correct == 0)
            6
        else
            7 - correct
    }
}

fun main() {
    val lottos_1 = intArrayOf(44, 1, 0, 0, 31, 25)
    val win_nums_1 = intArrayOf(31, 10, 45, 1, 6, 19)

    val obj = 로또의_최고_순위와_최저_순위()
    obj.solution(lottos_1, win_nums_1)
}

// 문제 분석
// 몇개가 안보임 => 최고, 최저 순위
// 알아 볼 수 없는 번호 0
// 6 => 1
// 5 => 2
// ...
// 2 => 5
// 1, 0 => 6
// y = -x + 7

// 배운것
// intArrayOf,
// coerceAtMost(), coerceAtLeast => Math.max, Math.min이 더 잘 읽혀서 잘 안쓸거 같긴한데..
