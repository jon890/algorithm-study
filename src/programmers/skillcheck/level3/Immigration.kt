package programmers.skillcheck.level3

class Immigration {
    fun solution(n: Int, times: IntArray): Long {
        /*
          입국심사
          각 심사관마다 걸리는 시간이다르다

          한 심사대는 동시에 한 명만 심사
          모든 사람이 심사를 받는데 걸리는 시간 최소화

          쟁점이 되는 부분은 마지막 사람인가?
          그 전까지는 계속 심사대를 사용하는게 좋아보임

          -> 한 사람일때 부터 귀납적으로 생각해보자
          -> 제일 시간이 짧은 심사관으로가서 심사를 받는다.

          -> 쉽게 생각
          -> 탐욕적으로 빌때까지 기다리는 시간 + 입국심사시간이 제일 최소로 걸리는것을 택한다
        */

        var remain_immigration = n
        val processing = BooleanArray(times.size) // 입국심사관이 입국심사중인지 체크
        val remain_time = IntArray(times.size) // 현재 입국심사 남은시간 체크
        val calculate = IntArray(times.size)
//        println(processing.contentToString())

        while (remain_immigration > 0) {
            // 해당 입국심사대에서 심사를 받을경우 걸리는 시간
            for (i in times.indices) {
                calculate[i] = remain_time[i] + times[i]
            }

//            println(calculate.contentToString())

            // 제일 최솟값을 찾는다
            val min_index = calculate.indexOf(calculate.min()!!)

            processing[min_index] = true
            remain_time[min_index] += times[min_index]
            remain_immigration--
        }

//        println(remain_time.contentToString())

        return remain_time.max()!!.toLong()
    }
}

/*
2020-07-15
하다보니 좋은 방법을 찾은것 같았는데 아닌가 보다.. 더 생각!! (40분소요)

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (18.34ms, 62MB)
테스트 2 〉	통과 (22.55ms, 58.3MB)
테스트 3 〉	실패 (69.86ms, 64.8MB)
테스트 4 〉	통과 (8148.63ms, 69MB)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	실패 (시간 초과)
채점 결과
정확성: 16.7
효율성: 0.0
합계: 16.7 / 50
 */