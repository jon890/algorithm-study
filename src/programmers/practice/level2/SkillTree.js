/**
 * 프로그래머스
 * 코딩 테스트 연습
 * Level 2
 *
 * 스킬 트리
 * https://programmers.co.kr/learn/courses/30/lessons/49993
 */
function solution(skill, skill_trees) {
    
    // 스킬트리에는 선행 순서가 있다
    // 예를 들어
    // 스파크 -> 라이트닝 볼트 -> 썬더 순으로
    // 중간에 무엇이 삽입되도 관계 없음
    
    // skill -> 선행 스킬 트리
    // skill_trees -> 내가 올린 스킬트리
    // 가능한 스킬트리의 갯수를 반환하시오
    const preceding_skill_order = Array.from(skill);

    let answer = 0;
    skill_trees.forEach(s => {
        // 내가 선행 스킬 올린 인덱스를 구한다
        // 인덱스 순서가 올바르면 answer++
        const my_skill_order = [];

        preceding_skill_order.forEach(preceding => {
            const index = Array.from(s).findIndex(el => el === preceding);
            my_skill_order.push(index);
        });

        let check = true;
        // 스킬 트리가 안되는 경우
        // 1. 선행 스킬을 먼저 찍어 버린 경우
        // 2. 선행 스킬을 찍지 않고 그다음 스킬을 찍은 경우
        for (let i = 0; i < my_skill_order.length; i++) {
            const curr = my_skill_order[i];

            // 2. 선행 스킬을 찍지 않고
            if (curr === -1) {
                // 그 다음 스킬을 찍은 경우
                for (let j = i + 1; j < my_skill_order.length; j++) {
                    if (my_skill_order[j] !== -1) {
                        check = false;
                        break;
                    }
                }
                // 1. 선행 스킬의 순서가 안 맞는 경우
            } else {
                for (let j = i + 1; j < my_skill_order.length; j++) {
                    const compare = my_skill_order[j];
                    if (compare !== -1 && curr > compare) {
                        check = false;
                        break;
                    }
                }
            }

            if (!check) {
                break;
            }
        }
        if (check) answer++;
    });
    return answer;
}

const skill_1 = "CBD";
const skill_tress1 = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(`답 : ${solution(skill_1, skill_tress1)}`);

/*
2020-06-04
Array.from(string) 하면 문자열을 배열로 만들어준다
Array.from("abc") === ["a", "b", "c"];

자바스크립트는
Array.forEach를 써도 속도가 그렇게 느려지는것 같지 않네.
Array.find도 속도가 꽤나 빠른것 같다

앞에 스킬트리 순서를 구한다음에
2중 포문 정도로 풀수 있는 문제 였음


채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (2.07ms, 37.5MB)
테스트 2 〉	통과 (2.17ms, 37.3MB)
테스트 3 〉	통과 (2.12ms, 37.5MB)
테스트 4 〉	통과 (2.12ms, 37.5MB)
테스트 5 〉	통과 (2.17ms, 37.6MB)
테스트 6 〉	통과 (2.11ms, 37.5MB)
테스트 7 〉	통과 (2.08ms, 37.4MB)
테스트 8 〉	통과 (2.11ms, 37.5MB)
테스트 9 〉	통과 (2.23ms, 37.6MB)
테스트 10 〉	통과 (2.13ms, 37.5MB)
테스트 11 〉	통과 (2.12ms, 37.5MB)
테스트 12 〉	통과 (3.16ms, 37.9MB)
테스트 13 〉	통과 (2.29ms, 37.6MB)
테스트 14 〉	통과 (2.07ms, 37.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0

 */