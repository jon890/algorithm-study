/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Origami (종이접기)
 * chanllenge_id=648
 *
 */
function solution(n) {
    let answer = [0];

    if (n === 1) {
        return answer;
    }

    for (let i = 1; i < n; i++) {
        // 배열의 길이 저장
        let array_length = answer.length;
        
        // 중간에 이어지는 공간은 0으로 채운다
        answer[answer.length] = 0;

        // console.log(answer);

        // 앞의 배열을 뒤집어서 추가한다.
        for (let j = 0; j < array_length; j++) {
            // 첫 항부터 가져오기 시작
            let element = answer[j];

            // 가져온항을 반대로 바꾼다
            // 0이면 1, 1이면 0
            let add;

            if (element === 1) {
                add = 0;
            } else {
                add = 1;
            }

            // 가져온 항을 추가한다.
            answer[array_length * 2 - j] = add;
        }

        // console.log(answer);
    }

    return answer;
}

/*
수학적인 규칙을 추론하는게 우선인문제?
수학적인 규칙찾기 + 피보나치 (동적계획법) 시간고려까지..
오 되게 신선한 느낌이다
간만에 수학문제 푸는거같아서 재밌었다..!!

규칙을 못찾아내면 아예 손부터 댈 수 없는문제
비즈니스 로직도 마찬가지겠지...?
46분.... 걸림
 */