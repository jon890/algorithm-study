/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 해쉬
 *
 * 완주하지 못한 선수
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 */
function solution(participant, completion) {
    const map = new Map();

    participant.forEach(name => {
        if (map.has(name)) {
            map.set(name, map.get(name) + 1);
        } else {
            map.set(name, 1);
        }
    });


    completion.forEach(name => {
        if (map.has(name))
            map.set(name, map.get(name) - 1);
    });

    let answer;
    map.forEach((complete, name) => {
        if (!!complete) {
            answer = name;
            return false;
        }
    });

    return answer;
}