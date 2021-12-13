/**
 * 프로그래머스
 * 코딩테스트 연습
 * 탐욕적 방법 (Greedy)
 *
 * 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
 */
function solution(n, lost, reserve) {

    // 최대한 많은 사람에게 체육복을 빌려주는 방법

    // 현재 체육복이 있는 사람의 수
    let answer = n - lost.length;

    lost.forEach(l => {
        console.log(reserve);
        const index = reserve.findIndex(el => l === el - 1 || l === el + 1);
        if (~index) {
            reserve.splice(index, 1);
            answer++;
        }
    });

    return answer;
}

const n_1 =5;
const lost_1 = [2, 4];
const reserve_1 = [1, 3, 5];
const answer_1 = 5;
console.log(solution(n_1, lost_1, reserve_1));

const n_2 = 5;
const lost_2 = [2, 4];
const reserve_2 = [3];
const answer_2 = 4;
console.log(solution(n_2, lost_2, reserve_2));

// 3	[3]	[1]	2