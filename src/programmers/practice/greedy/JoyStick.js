function solution(name) {
    /**
     * 조이스틱 조작횟수의 최솟값 구하기
     * 알파벳을 바꿀수 있는 최소 횟수,
     * and 왼쪽 오른쪽 이동 최소화
     * 
     */
    const change_alphabet = {
        "A" : 0,
        "B" : 1,
        "C" : 2,
        "D" : 3,
        "E" : 4,
        "F" : 5,
        "G" : 6,
        "H" : 7,
        "I" : 8,
        "J" : 9,
        "K" : 10,
        "L" : 11,
        "M" : 12,
        "N" : 13,
        "O" : 12,
        "P" : 11,
        "Q" : 10,
        "R" : 9,
        "S" : 8,   
        "T" : 7,   
        "U" : 6,   
        "V" : 5,   
        "W" : 4,   
        "X" : 3,   
        "Y" : 2,   
        "Z" : 1,   
    }

    let answer = 0;
    let all_character_is_A = true; // 이름 전체가 A로 구성된 경우

    for (let i = 0; i < name.length; i++) {
        if (name[i] !== "A") 
        all_character_is_A = false;

        const count_change_alphabet = change_alphabet[name[i]];
        // console.log(name[i]);
        // console.log(`${name[i]} : ${count_change_alphabet}`);
        answer += count_change_alphabet;
    }

    // 이름 전체가 A로 구성된 경우
    if (all_character_is_A) {
        // not to do
    } else {
    // 2번째에 A가 등장할경우 뒤로 이동하면 이득인가?
        if (name[1] === "A") {
            answer += name.length - 2; // 뒤로 이동 후 나머지 숫자를 이동
        } else {
            answer += name.length - 1; // 옆으로 이동
        }
    }

    // console.log(`${name} : ${answer}`);
    return answer;
}

solution("JEROEN");
solution("JAN");

/**
 * 2020 - 01 - 08
 * 내가 미처 생각하지 못한 부분도 있지만
 * 문제도 불완전하다는 많은 의견을 발견..
 * 
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.13ms, 30.1MB)
테스트 2 〉	통과 (0.13ms, 30MB)
테스트 3 〉	통과 (0.13ms, 30MB)
테스트 4 〉	통과 (0.15ms, 30MB)
테스트 5 〉	통과 (0.16ms, 30.3MB)
테스트 6 〉	통과 (0.14ms, 30MB)
테스트 7 〉	통과 (0.14ms, 30.1MB)
테스트 8 〉	통과 (0.13ms, 30MB)
테스트 9 〉	통과 (0.13ms, 30MB)
테스트 10 〉	실패 (0.22ms, 30.1MB)
테스트 11 〉	실패 (0.14ms, 30.1MB)
채점 결과
정확성: 81.8
 */
