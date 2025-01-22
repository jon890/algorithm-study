package leetcode

/**
 * 1 - 두 수의 합
 *
 * 두 수를 더해서 타겟 넘버를 만들라
 * O(n^2) 보다 빠르게 할 수 있는가?
 */
class TwoSum {

    // O(n^2) 45ms 39.1MB
    fun twoSum(nums: IntArray, target: Int): IntArray {
        for (i in nums.indices) {
            for (j in i + 1 until nums.size) {
                if (nums[i] + nums[j] == target) {
                    return intArrayOf(i, j)
                }
            }
        }

        return intArrayOf()
    }


    // O(n) 7ms, 39.32MB
    fun twoSum2(nums: IntArray, target: Int) : IntArray {
        val map = mutableMapOf<Int, Int>() // value, index map
        for (i in nums.indices) {
            map[nums[i]] = i
        }

        for (i in nums.indices) {
            val findValue = target - nums[i]
            if (map.containsKey(findValue) && map[findValue] != i) {
                return intArrayOf(i, map[findValue]!!)
            }
        }

        return intArrayOf()
    }
}

fun main() {
    TwoSum().let { 
        val ret = it.twoSum2(intArrayOf(2, 7, 11, 15), 9)
        if (ret[0] == 0 && ret[1] == 1) {
            println("정답")
        } else {
            println("오답")
        }

        it
    }.let {
        val ret = it.twoSum2(intArrayOf(3, 2, 4), 6)
        if (ret[0] == 1 && ret[1] == 2) {
            println("정답")
        } else {
            println("오답")
        }

        it
    }.let {
        val ret = it.twoSum2(intArrayOf(3, 3), 6)
        if (ret[0] == 0 && ret[1] == 1) {
            println("정답")
        } else {
            println("오답")
        }

        it
    }
}