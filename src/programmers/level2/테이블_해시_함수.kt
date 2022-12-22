package programmers.level2

class 테이블_해시_함수 {

    /**
     * col 번째 값으로 오름차순 정렬
     * 동일하면 기본키인 첫 번째 컬럼의 값은 기준으로 내림차순 정렬
     * S_i = 각 컬럼의 값을 i로 나는 나머지
     * row_begin <= i <= row_end 를 모두 누적하여  bitwise XOR 값을 해시 값으로 반환
     */
    fun solution(data: Array<IntArray>, col: Int, row_begin: Int, row_end: Int): Int {
        return data.sortedWith(compareBy({ it[col - 1] }, { -it[0] }))
            .mapIndexed { index, tuple ->
                if (index < row_begin - 1 || index > row_end - 1) {
                    -1
                } else {
                    tuple.fold(0) { acc, value -> acc + value % (index + 1) }
                }
            }
            .filter { v -> v != -1 }
            .reduce { acc, s -> acc.xor(s) }
    }

    fun test1() {
        val data = arrayOf(intArrayOf(2, 2, 6), intArrayOf(1, 5, 10), intArrayOf(4, 2, 9), intArrayOf(3, 8, 3))
        val result = solution(data, 2, 2, 3)
        val expected = 4
        if (result == expected) {
            println("테스트 성공")
        } else {
            throw RuntimeException("실패했습니다! 결과: ${result}, 예상: ${expected}")
        }
    }
}

fun main() {
    테이블_해시_함수().let {
        it.test1()
    }
}

/**
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (21.83ms, 64MB)
 * 테스트 2 〉	통과 (20.79ms, 64.5MB)
 * 테스트 3 〉	통과 (19.75ms, 64.5MB)
 * 테스트 4 〉	통과 (20.33ms, 64.3MB)
 * 테스트 5 〉	통과 (22.69ms, 68.4MB)
 * 테스트 6 〉	통과 (41.63ms, 124MB)
 * 테스트 7 〉	통과 (33.96ms, 122MB)
 * 테스트 8 〉	통과 (41.22ms, 122MB)
 * 테스트 9 〉	통과 (37.85ms, 123MB)
 * 테스트 10 〉	통과 (34.30ms, 118MB)
 * 테스트 11 〉	통과 (20.02ms, 63.6MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */