package programmers.practice

class x만큼_간격이_있는_n개의_숫자 {
    fun solution(x: Int, n: Int): LongArray {
        val answer = LongArray(n)
        (1..n).forEach { index ->
            answer[index - 1] = x.toLong() * index
        }
        return answer
    }
}