package toss

/**
 * 부가가치세 계산기
 *
 * 과세 금액 10% 첫째자리 올림처리
 * 과세금액 = 공급가액 - 비과세금액
 * 공급가액 + 부가가치세 = 공급대가
 * 과세 금액 = 공급가액 - 비과세 금액
 * 대가 = 부가 + 비과세 금액 + 과세 금액
 * 주문금액
 */
class Solution5 {
    fun solution(orderAmount: Long, taxFreeAmount: Long, serviceFee: Long): Long {
        var 공급대가 = orderAmount
        if (serviceFee > 0) {
            공급대가 -= serviceFee
        }
        // 공급가액 + 부가가치세 = 공급대가
        // 과세 금액 = 공급가액 - 비과세 금액
        // 대가 = 부가 + 비과세 금액 + 과세 금액
        val 부가_플러스_과세금액 = 공급대가 - taxFreeAmount

        // orderAmount : 주문금액
        // taxFreeAmount : 비과세금액
        // serviceFee : 봉사료
        return 0
    }

    fun testTemplate(orderAmount: Long, taxFreeAmount: Long, serviceFee: Long, answer: Long) {
        val ret = solution(orderAmount, taxFreeAmount, serviceFee)
        if (answer == ret) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    Solution5().let {

    }
}