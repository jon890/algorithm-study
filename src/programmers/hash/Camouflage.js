/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 해쉬
 *
 * 위장 (Camouflage)
 * https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
 */
function solution(clothes) {
    const map = new Map();
    clothes.forEach(([name, type]) => {
        let array;
        if (map.has(type)) {
            array = map.get(type);
        } else {
            array = [];
        }
        array.push(name);
        map.set(type, array);
    });

    let answer = 0;
    for (let i = 0; i < map.size; i++) {
        map.forEach(v => {

        });
    }
    return answer;
}

const clothes_1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
solution(clothes_1);