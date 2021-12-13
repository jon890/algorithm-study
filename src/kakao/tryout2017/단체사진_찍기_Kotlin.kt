package kakao.tryout2017

import kotlin.math.abs

class 단체사진_찍기 {

    fun solution(n: Int, data: Array<String>): Int {
        val friends = Friend.values()

        // 친구들의 순열을 구하기 => 줄 세우기
        var permutations = mutableListOf<List<Friend>>()
        permutation(friends, 0, friends.size, friends.size, permutations)

        for (conditionStr in data) {
            val array = conditionStr.toCharArray()
            val condition = Condition(
                friend1 = Friend.fromCode(array[0]),
                friend2 = Friend.fromCode(array[2]),
                operator = Operator.fromCode(array[3]),
                size = array[4].code - 48
            )

            permutations = permutations.filter {
                val index1 = it.indexOf(condition.friend1)
                val index2 = it.indexOf(condition.friend2)

                return@filter when (condition.operator) {
                    Operator.EQUAL ->
                        if (condition.size != 0) throw IllegalArgumentException("해당 Operator 에서 크기는 0이어야 합니다")
                        else abs(index2 - index1) == 1
                    Operator.GREATER_THAN -> abs(index2 - index1) > condition.size
                    Operator.LESS_THAN -> abs(index2 - index1) < condition.size
                }
            }.toMutableList()
        }

        return permutations.size
    }

    data class Condition(
        val friend1: Friend,
        val friend2: Friend,
        val operator: Operator,
        val size: Int
    )

    enum class Friend(val code: Char) {
        APEACH('A'),
        CORN('C'),
        FRODO('F'),
        JAYJI('J'),
        MUJI('M'),
        NEO('N'),
        RION('R'),
        TUBE('T');

        companion object {
            fun fromCode(code: Char): Friend {
                for (value in values()) {
                    if (value.code == code) {
                        return value
                    }
                }

                throw IllegalArgumentException("지원하지 않는 친구 입니다 : $code")
            }
        }
    }

    enum class Operator(val code: Char) {
        EQUAL('='),
        GREATER_THAN('>'),
        LESS_THAN('<');

        companion object {
            fun fromCode(code: Char): Operator {
                for (value in values()) {
                    if (value.code == code) {
                        return value
                    }
                }

                throw IllegalArgumentException("지원하지 않는 비교 연산자 입니다 : $code")
            }
        }
    }

    private fun <T> permutation(array: Array<T>, depth: Int, n: Int, r: Int, result: MutableList<List<T>>) {
        if (depth == r) {
            val list = mutableListOf<T>()
            for (i in 0 until r) {
                list.add(array[i])
            }
            result.add(list)
            return
        }

        for (i in depth until n) {
            swap(array, depth, i)
            permutation(array, depth + 1, n, r, result)
            swap(array, depth, i)
        }
    }

    private fun <T> swap(array: Array<T>, a: Int, b: Int) {
        val temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }
}

fun main() {
    val obj = 단체사진_찍기()

    obj.solution(2, arrayOf("N~F=0", "R~T>2"))
    obj.solution(2, arrayOf("M-C<2", "C~M>1"))
}