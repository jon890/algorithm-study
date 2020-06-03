/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * HanoiTop (하노이 탑)
 * challenge_id=885
 *
 */
function solution(n) {
    const result_array = [];
    hanoi(n, 1, 3, 2, result_array);
    // console.log(result_array);
    return result_array;
}

function hanoi(N, start, to, via, result) {
    if (N === 1) {
        move(1, start, to, result);
    } else {
        hanoi(N - 1, start, via, to, result);
        move(N, start, to, result)
        hanoi(N - 1, via, to, start, result);
    }
}

function move(N, start, to, result) {
    result[result.length] = [start, to];
}

solution(2);

/*
알고리즘 수업시간 때 들어봤던것인데..
접근하는 방식이 재귀인것을 파악하지 못했다..
일단 인터넷에서 공부!!
 */