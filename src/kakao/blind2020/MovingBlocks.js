/**
 * 2020 카카오 블라인드
 * 블록 이동하기
 *
 * https://programmers.co.kr/learn/courses/30/lessons/60063
 */
function solution(board) {
    // 로봇크기 2 x 1
    // 0과 1로 이루어진 N x N 지도
    // 가장 왼쪽, 상단의 좌표 1, 1
    // 0 - 빈칸, 1 - 벽
    // 벽과 지도 밖으로는 이동 불가
    // 초기 위치 (1, 1)에서 가로방향으로 놓여있음
    // 앞뒤 구분없이 움직일 수 있다

    // 벽이 엎는 곳에서 90도 회전 가능
    // 로봇이 이동하거나 회전하는데 1초 걸림
    // (N, N)에 도착해야함
    // 이동하는데 걸리는 최소시간

    // 이동은 오른쪽 아래로 계속해서 이동해야하네
    // bfs로 모든 경우를 고려해볼까?
    // 무조건 오른쪽, 아래, 회전을 하면서 계속 진행하자

    const init_position = [[0, 0], [1, 0]];
    const answers = [];
    bfs(init_position, board, 0, answers);
    answers.sort((a, b) => b - a);
    return answers[0];
}


const bfs = ([[x1, y1], [x2, y2]], board, time, answers) => {

    console.log(`x1 : ${x1}, y1 : ${y1} // x2 : ${x2}, y2 : ${y2}`);

    const maximum = board.length - 1;
    const nextTime = time + 1;

    // 오른쪽 이동 체크
    // ㅡ 의 경우
    if (x1 + 1 === x2) {
        const moveRight = x2 + 1;
        if (moveRight <= maximum && // 이동해도 길위에 있는가?
            board[y1][moveRight] === 0) { // 이동하려는 곳이 빈 칸인가?) {

            // 이동 후 종료 체크
            if (moveRight === maximum && y1 === maximum) {
                answers.push(nextTime);
                return;
            }

            // 종료되지 않으면 시간을 늘리고 계속해서 진행한다
            const position = [[x2, y1], [moveRight, y1]];
            bfs(position, board, nextTime, answers);
        }
        // | 의 경우
    } else {
        const moveRight = x2 + 1;
        if (moveRight <= maximum &&
            board[y1][moveRight] === 0 &&
            board[y2][moveRight] === 0) {

            if (moveRight === maximum && y2 === maximum) {
                answers.push(nextTime);
                return;
            }

            const posiion = [[moveRight, y1], [moveRight, y2]];
            bfs(posiion, board, nextTime, answers);
        }
    }
    // FIXME KBT - 로직이 거의 비슷하므로 나중에 리팩토링 할것


    // 아래쪽 이동 체크
    // ㅡ 의 경우
    if (x1 + 1 === x2) {
        const moveDown = y2 + 1;
        if (moveDown <= maximum &&
            board[moveDown][x1] === 0 &&
            board[moveDown][x2] === 0) {

            // 이동 후 종료 체크
            if (moveDown === maximum && x2 === maximum) {
                answers.push(nextTime);
                return;
            }

            const position = [[x1, moveDown], [x2, moveDown]];
            bfs(position, board, nextTime, answers);
        }
        // | 의 경우
    } else {
        const moveDown = y2 + 1;
        if (moveDown <= maximum && board[moveDown][x1] === 0) {

            // 이동 후 종료 체크
            if (moveDown === maximum && x1 === maximum) {
                answers.push(nextTime);
                return;
            }

            const position = [[x1, y2], [x1, moveDown]];
            bfs(position, board, nextTime, answers);
        }
    }

    // 회전 체크
    // ㅡ 를 |로 회전
    // |를 ㅡ로 회전 2가지 케이스를 고려해야하네

    // ㅡ 를 | 로 회전
    if (x1 + 1 === x2) {
        // 회전 가능 체크
        // 내 아래쪽 두개의 좌표가 모두 비워져 있어야 회전 가능
        const rotate = y1 + 1;
        if (rotate <= maximum &&
            board[rotate][x1] === 0 &&
            board[rotate][x2] === 0) {

            // 이동 후 종료 체크
            if (rotate === maximum && x2 === maximum) {
                answers.push(nextTime);
                return;
            }

            const position = [[x2, y1], [x2, rotate]];
            bfs(position, board, nextTime, answers);
        }
        // | 를 ㅡ로 회전
    } else {
        // 회전 가능 체크
        // 내 오른쪽 두개의 좌표가 모두 비워져 있어야 회전 가능
        const rotate = x1 + 1;
        if (rotate <= maximum &&
            board[y1][rotate] === 0 &&
            board[y2][rotate] === 0) {

            // 이동 후 종료 체크
            if (rotate === maximum && y2 === maximum) {
                answers.push(nextTime);
                return;
            }

            const position = [[x1, y2], [rotate, y2]];
            bfs(position, board, nextTime, answers);
        }
    }
}


const board_1 =[[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]];
const answer_1 = solution(board_1);
console.log(answer_1);

/*
2020-06-04
음.. 방법 접근 부터가 어렵다
bfs 접근이 잘못되었으려나..?
한 시간 반 고민했는데 일단 오늘은 여기까지..

 */