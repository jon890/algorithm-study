package leetcode

import java.math.BigInteger


/**
 * 2. 두 수 더하기
 * 끝까지 깊이 들어가 string 으로 합친후 뒤집어서 수로 변환
 *
 * todo 변환없이 바로 덧셈하는 방식 고려해보자
 */
class AddTwoNumbers {

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        val num1 = l1?.let { getNumber(it) } ?: BigInteger.ZERO
        val num2 = l2?.let { getNumber(it) } ?: BigInteger.ZERO
        return toListNode(num1 + num2)
    }

    fun getNumber(listNode: ListNode): BigInteger {
        var current = listNode
        val str = StringBuffer()
        while (true) {
            str.append(current.`val`)
            if (current.next == null) {
                break
            } else {
                current = current.next!!
            }
        }
        return BigInteger(str.reverse().toString())
    }

    fun toListNode(bigint: BigInteger): ListNode {
        val str = bigint.toString()

        val node = ListNode(Character.getNumericValue(str.last()))
        var currentNode: ListNode = node

        for (i in str.length - 2 downTo 0) {
            val value = str[i]
            currentNode.next = ListNode(Character.getNumericValue(value))
            currentNode = currentNode.next!!
        }

        return node
    }
}

class ListNode(var `val`: Int) {
    var next: ListNode? = null

}

fun main() {
    AddTwoNumbers().let {
        val l1 = ListNode(2).apply {
            next = ListNode(4).apply {
                next = ListNode(3)
            }
        }

        val l2 = ListNode(5).apply {
            next = ListNode(6).apply {
                next = ListNode(4)
            }
        }

        val ret = it.addTwoNumbers(l1, l2)
        println(ret)
    }
}