package programmers.summer_winter_coding2018

import kotlin.math.sqrt

class 소수_만들기 {

    fun solution(nums: IntArray): Int {
        val combinations = mutableListOf<List<Int>>()

        // 조합을 구함
        combination(
            array = nums.toTypedArray(),
            visited = BooleanArray(nums.size),
            depth = 0,
            n = nums.size,
            r = 3,
            result = combinations
        )

        return combinations.filter {
            val sum = it.sum()
            return@filter isPrime(sum)
        }.size
    }

    private fun <T> combination(
        array: Array<T>,
        visited: BooleanArray,
        depth: Int,
        n: Int,
        r: Int,
        result: MutableList<List<T>>
    ) {
        if (r == 0) {
            val newArray = array.filterIndexed { index, _ -> visited[index] }
            result.add(newArray)
            return
        }

        if (depth == n) {
            return
        }

        visited[depth] = true
        combination(array, visited, depth + 1, n, r - 1, result)

        visited[depth] = false
        combination(array, visited, depth + 1, n, r, result)
    }

    private fun isPrime(number : Int) : Boolean {
        val sqrtInt = sqrt(number.toDouble()).toInt()
        for (i in 2..sqrtInt) {
            if (number % i == 0) return false
        }
        return true
    }
}

fun main() {
    val solution = 소수_만들기()
    solution.solution(intArrayOf(1, 2, 3, 4))
}