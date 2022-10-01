package dev_matching.backend2022.test

class Solution1 {
    fun solution(registered_list: Array<String>, new_id: String): String {
        val notExist = registered_list.find { it == new_id } == null
        if (notExist) return new_id

        val boundIndex = new_id.toCharArray().indexOfFirst { it in '0'..'9' }
        val S = if (boundIndex == -1) new_id.take(new_id.length) else new_id.substring(0, boundIndex)
        val N = if (boundIndex == -1) 0 else new_id.substring(boundIndex).toInt()

        var next = 1
        while (true) {
            val id = "$S${N + next}"
            if (registered_list
                    .filter { it.startsWith(S) }
                    .find { it == id } == null
            ) {
                return id
            } else {
                next++
            }
        }
    }
}

fun main(args: Array<String>) {
    val obj = Solution1()
//    obj.solution(arrayOf("card", "ace13", "ace16", "banker", "ace17", "ace14"), "ace15")
    obj.solution(arrayOf("cow", "cow1", "cow2", "cow3", "cow4", "cow9", "cow8", "cow7", "cow6", "cow5"), "cow")
}