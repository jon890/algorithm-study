package leetcode

/**
 * 80
 *
 * 1, 1, 1, 2, 2, 3
 * 한 숫자가 최대 2번만 나오도록 중복을 제거
 *
 * 30분째 푸는중..
 */
class RemoveDuplicatesFromSortedArray2 {

    fun removeDuplicates(nums: IntArray): Int {

        val del = BooleanArray(nums.size) { false }
        var totalDeleted = 0
        val deletedMap = mutableMapOf<Int, Int>()

        var current = nums[0]
        var count = 1
        for (i in 1 until nums.size) {
            if (current == nums[i]) {
                count++
                if (count > 2) {
                    del[i] = true
                    totalDeleted++
                    deletedMap[current] = (deletedMap[current] ?: 0) + 1
                }
            } else {
                current = nums[i]
                count = 1
            }
        }

        var skippedCountTotal = 0
        var current2 = nums[0]
        var count2 = 1

        for (i in 1 until nums.size - totalDeleted) {
            if (current2 == nums[i]) {
                count2++
                if (count2 > 2) {
                    count2 = 0
                    val skippedCount = deletedMap[nums[i]] ?: 0
                    skippedCountTotal += skippedCount
                }
            } else {
                current2 = nums[i]
                count2 = 1
            }

            if (skippedCountTotal > 0) {
                nums[i] = nums[i + skippedCountTotal]
            }
        }

        println("nums : ${nums.contentToString()}")

        return nums.size - totalDeleted
    }

    fun testTemplate(nums: IntArray, answer: Int) {
        val result = removeDuplicates(nums)
        if (result == answer) {
            println("정답입니다 nums : ${nums.contentToString()}")
        } else {
            println("오답입니다 result : $result")
        }

    }
}

fun main() {
    RemoveDuplicatesFromSortedArray2().let {
        it.testTemplate(intArrayOf(1, 1, 1, 2, 2, 3), 5)
        it.testTemplate(intArrayOf(0, 0, 1, 1, 1, 1, 2, 3, 3), 7)
    }
}