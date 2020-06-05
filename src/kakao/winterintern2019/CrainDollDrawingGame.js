/**
 * 2019 카카오 개발자 겨울 인턴쉽
 * 크레인 인형뽑기 게임

 Level 1
 https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
 */
function solution(board, moves) {
    const semantic_board = [];
    // 인형이 들어 있는 것을 의미 있게 바꾼다
    // 아랫줄부터 읽어 나가기
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board.length; j++) {
            // 배열이 없다면 생성해줌
            if (semantic_board[j] == null) {
                semantic_board[j] = [];
            }

            // 0은 지나감
            if (board[i][j] === 0) {
                continue;
            }

            semantic_board[j].push(board[i][j]);
        }
    }

    console.log(semantic_board);

    // 크레인에서 내 인형 바구니로 옮긴다
    let my_dolls = [];
    moves.some(index => {
        const doll = semantic_board[index - 1].pop();
        if (doll == null || doll === 0) return false; // continue;
        my_dolls.push(doll);
    });


    // 내 인형 바구니에서 연속된 인형을 터뜨리고 갯수를 구한다
    let answer = 0;
    while (true) {
        const prev_answer = answer;

        my_dolls.forEach((cur_item, index) => {
            const next_item = my_dolls[index + 1];

            if (cur_item === next_item) {
                answer += 2;
                my_dolls[index] = -1;
                my_dolls[index + 1] = -1;
            }
        });

        // 더이상 터뜨릴 인형이 없는 경우 종료
        if (prev_answer === answer) break;

        let copied = [];
        my_dolls.forEach(item => {
            if (item !== -1) copied.push(item);
        });

        my_dolls = copied;
    }

    return answer;
}

const board_1 = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves_1 = [1,5,3,5,1,2,1,4];
const answer_1 = solution(board_1, moves_1);
console.log(answer_1);

/*
2020-06-04
내가 생각하는 포인트
1. 주어진 배열이 우리 생각대로 데이터 구조가 되있지 않음
    (Array.pop() 메소드를 사용하게 끔 의미있게 데이터 구조를 만들어줌)

2. 인형을 한번 터뜨리고 끝나는게 아니고
터뜨릴수 없을때까지 계속 터뜨려야함.
여기를 체크하지 못할 수도 있겠다.

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (3.96ms, 37.6MB)
테스트 2 〉	통과 (3.81ms, 37.5MB)
테스트 3 〉	통과 (3.92ms, 37.6MB)
테스트 4 〉	통과 (5.01ms, 38.1MB)
테스트 5 〉	통과 (3.96ms, 37.4MB)
테스트 6 〉	통과 (3.98ms, 37.5MB)
테스트 7 〉	통과 (4.07ms, 37.4MB)
테스트 8 〉	통과 (4.43ms, 37.4MB)
테스트 9 〉	통과 (4.56ms, 37.9MB)
테스트 10 〉	통과 (4.88ms, 38MB)
테스트 11 〉	통과 (5.21ms, 38MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */