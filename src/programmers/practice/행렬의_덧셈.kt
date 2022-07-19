package programmers.practice

class 행렬의_덧셈 {
    fun solution(arr1: Array<IntArray>, arr2: Array<IntArray>): Array<IntArray> {
        val answer = Array(arr1.size) { intArrayOf() }

        for (i in arr1.indices) {
            answer[i] = IntArray(arr1[i].size)

            for (j in arr1[i].indices) {
                answer[i][j] = arr1[i][j] + arr2[i][j]
            }
        }

        return answer
    }
}

// 배운것 array.indices => Returns the range of valid indices for the array.