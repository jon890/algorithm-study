function solution(block, board) {
    const OP_PUT = 1; // 상수, 블럭을 보드에 끼우는 작업
    const OP_REMOVE = -1; // 상수, 블럭을 보드에서 빼는 작업

    let max = 0; // 지워지는 최대 라인의수를 기록

    // board에 블럭을 차례차례 끼워본다
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // 이 칸에 블록을 끼울수 있는지 확인
            // 완탐의 시간을 줄이기 위해서
            const ok = isAvailablePutBlock(i, j, block, board);
            if (!ok) continue;

            // 블럭을 끼운다
            operateBlockAndBoard(OP_PUT, i, j, block, board);

            // 지워지는 줄을 계산하고 max보다 크면 기록
            const count = calcRemoveLines(board);
            if (count > max) max = count;

            // 다시 블록을 빼낸다 => 다음 연산을 위해서 원래대로 돌림
            operateBlockAndBoard(OP_REMOVE, i, j, block, board);
        }
    }

    console.log(max);
    return max;
}

// 블럭이 보드에 끼워지는지 검사
function isAvailablePutBlock(row, col, block, board) {
    let a, b, c;
    let length = board.length;

    if (block === 0) {
        // 현재 칸부터 아래로 세칸이 비어있는지 확인
        if (row + 2 >= length) return false;
        a = board[row][col];
        b = board[row + 1][col];
        c = board[row + 2][col];
    } else if (block === 1) {
        // 현재 칸으로 오른쪽으로 세칸이 비어있는지 확인
        if (col + 2 >= length) return false;
        a = board[row][col];
        b = board[row][col + 1];
        c = board[row][col + 2];
    } else if (block === 2) {
        // ㄴ 모양
        if (row + 1 >= length || col + 1 >= length) return false;
        a = board[row][col];
        b = board[row + 1][col];
        c = board[row + 1][col + 1];
    } else if (block === 3) {
        // 180도 뒤집은 ㄴ모양
        if (row + 1 >= length || col + 1 >= length) return false;
        a = board[row][col + 1];
        b = board[row + 1][col];
        c = board[row + 1][col + 1];
    } else if (block === 4) {
        // ㄱ 모양
        if (row + 1 >= length || col + 1 >= length) return false;
        a = board[row][col];
        b = board[row][col + 1];
        c = board[row + 1][col + 1];
    } else if (block === 5) {
        // 180도 뒤집은 ㄱ 모양
        if (row + 1 >= length || col + 1 >= length) return false;
        a = board[row][col];
        b = board[row][col + 1];
        c = board[row + 1][col];
    }

    if (a === 0 && b === 0 & c === 0) return true;
    return false;
}

// 블럭을 빼거나, 끼우는 작업
// op OP_PUT, OP_REMOVE를 참고하여라
function operateBlockAndBoard(op, row, col, block, board) {
    // 1이면 끼워, -1이면 빼
    
    if (block === 0) {
        board[row][col] += op * 1;
        board[row + 1][col] += op * 1;
        board[row + 2][col] += op * 1;
    } else if (block === 1) {
        a = board[row][col] += op * 1;
        b = board[row][col + 1] += op * 1;
        c = board[row][col + 2] += op * 1;
    } else if (block === 2) {
        a = board[row][col] += op * 1;
        b = board[row + 1][col] += op * 1;
        c = board[row + 1][col + 1] += op * 1;
    } else if (block === 3) {
        a = board[row][col + 1] += op * 1;
        b = board[row + 1][col] += op * 1;
        c = board[row + 1][col + 1] += op * 1;
    } else if (block === 4) {
        a = board[row][col] += op * 1;
        b = board[row][col + 1] += op * 1;
        c = board[row + 1][col + 1] += op * 1;
    } else if (block === 5) {
        a = board[row][col] += op * 1;
        b = board[row][col + 1] += op * 1;
        c = board[row + 1][col] += op * 1;
    }
}

// 지워지는 라인의 수를 리턴
function calcRemoveLines(board) {
    let count = 0;

    for (let i = 0; i < board.length; i++) {
        let check = true;

        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 0) {
                check = false;
                break;
            }
        }

        if (check) count++;
    }

    return count;
}

solution(0, [[1,0,0,0],[1,0,0,1],[1,1,0,1],[1,1,0,1]]);