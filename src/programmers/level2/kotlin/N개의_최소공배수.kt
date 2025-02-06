package programmers.level2.kotlin

/**
 * 2 6 8 14 => 168
 * 소인 수 분해를 할 수 있나? -> 소수는 규칙이 없어서 불가능 할 것 같음.
 *
 * TODO 100 보다 큰 소수는 어떻게 대응할 것 인가..?
 */
class N개의_최소공배수 {

    fun solution(arr: IntArray): Int {
        // 100 까지의 소수
        val primeNumber = listOf(
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
        )

        val copied = arr.copyOf()
        val completed = BooleanArray(arr.size)
        var primeNumberIndex = 0
        var result = 1
        while (true) {
            val allCompleted = completed.all { it }
            if (allCompleted) {
                break
            }

            val targetPrimeNumber = primeNumber[primeNumberIndex]
            var hasDivide = false

            for (i in copied.indices) {
                if (copied[i] % targetPrimeNumber == 0) {
                    hasDivide = true

                    copied[i] /= targetPrimeNumber
                    if (copied[i] == 1) {
                        completed[i] = true
                    }
                }
            }

            if (!hasDivide) {
                primeNumberIndex++

                if (primeNumberIndex >= primeNumber.size) {
                    break
                }
            } else {
                result *= targetPrimeNumber
            }
        }

        return result
    }

    fun testTemplate(arr: IntArray, answer: Int) {
        val result = solution(arr)

        if (result == answer) {
            println("정답 입니다")
        } else {
            println("오답 입니다. result: ${result}, answer: ${answer}")
        }
    }
}

fun main() {
    N개의_최소공배수().let {
//        it.testTemplate(intArrayOf(2, 6, 8, 14), 168)
//        it.testTemplate(intArrayOf(1, 2, 3), 6)
//        it.testTemplate(intArrayOf(4, 4, 4, 4), 4)
//        it.testTemplate(intArrayOf(2, 4, 8), 8)
//        it.testTemplate(intArrayOf(2, 7, 14), 14)
//        it.testTemplate(intArrayOf(13, 26), 26)
//        it.testTemplate(intArrayOf(3, 4, 9, 16), 144)
        it.testTemplate(intArrayOf(12, 32, 45, 67, 72), 96480)
    }
}