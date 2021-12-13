package programmers.monthly_code_challenge_season3

class 없는_숫자_더하기 {
    fun solution(numbers: IntArray): Int {
        return (0..9).reduce { acc, i ->
            if (numbers.indexOf(i) == -1) acc + i
            else acc
        }
    }

    // 다른 사람의 풀이..
    fun solutionOther(numbers: IntArray) = (0..9).filterNot(numbers::contains).sum()
}

fun main() {
    val solution = 없는_숫자_더하기()
    solution.solution(intArrayOf(1, 2, 3, 4, 6, 7, 8, 0))
    solution.solution(intArrayOf(5, 8, 4, 0, 6, 7, 9))
}