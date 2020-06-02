/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Jordi
 * chanllenge_id=4376
 *
 * 죠르디의 2차원 가상 벽면 구조물 설치
 */
function solution(n, build_frame) {
    const answer = [];

    build_frame.forEach(([x, y, type, op]) => {
        // x : x좌표
        // y : y좌표
        // type : 0 (기둥), 1(보)
        // op : 0 (삭제), 1(설치)

        if (op === 0) {
            switch (type) {
                case 0 :
                    delete_column(x, y, answer);
                    break;
                case 1:
                    delete_row(x, y, answer);
                    break;
            }
        } else if (op === 1) {
            switch (type) {
                case 0 :
                    install_column(x, y, answer);
                    break;
                case 1 :
                    install_row(x, y, answer);
                    break;
            }
        }
    })

    // 구조물 프린트 순서 정렬
    // 1. x 좌표 오름차순
    answer.sort(([x1], [x2]) => x1 - x2);
//    console.log("SORT ##########");
//    console.log("SORT 1. x 좌표 오름차순");
//    console.log(answer);
//    console.log("\n\n");

    // 2. x 좌표가 같다면 y 좌표 오름차순
    answer.sort(([x1, y1], [x2, y2]) => {
        if (x1 === x2) {
            return y1 - y2;
        }
    });
//    console.log("SORT ##########");
//    console.log("SORT 2. y 좌표 오름차순");
//    console.log(answer);
//    console.log("\n\n");

    // 3. x, y 둘다 같다면 기둥 -> 보
    answer.sort(([x1, y1, type1], [x2, y2, type2]) => {
        if (x1 === x2 && y1 === y2) {
            return type1 - type2;
        }
    });
//    console.log("SORT ##########");
//    console.log("SORT 3. type 오름차순");
//    console.log(answer);
//    console.log("\n\n");

    return answer;
}


// 기둥 설치 함수
// 바닥 이거나,
// 다른 기둥 위 이거나,
// 보의 한쪽 끝 부분에 있어야 설치할 수 있다.
function install_column(x1, y1, answer) {
    let install = false;

    // 바닥 체크
    if (y1 === 0) {
        install = true;
    } else {
        answer.some(([x2, y2, type]) => {
            // 다른 기둥 위 체크
            if (type === 0) {
                if (x1 === x2 && y1 === y2 + 1) {
                    install = true;
                    return false;
                }
            // 보의 한쪽 끝 부분 체크
            } else if (type === 1) {
                if (y1 === y2 && (x1 === x2 || x1 === x2 + 1)) {
                    install = true;
                    return false;
                }
            }
        });
    }

    if (install) answer[answer.length] = [x1, y1, 0];
}


// 보 설치
// 한쪽 끝 부분이 기둥 위 이거나,
// 양쪽 끝이 다른 보와 동시에 연결 되어야 설치할 수 있다
function install_row(x1, y1, answer) {
    let ABOVE_COL = false;
    let LEFT_ROW_INSTALLED = false;
    let RIGHT_ROW_INSTALLED = false;

    answer.some(([x2, y2, type]) => {
        // 양쪽 끝이 다른 보와 동시에 연결 체크
        if (LEFT_ROW_INSTALLED && RIGHT_ROW_INSTALLED) {
            return false;
        }

        // 한 쪽 끝 부분이 기둥 위 체크
        if (type === 0) {
            if (y1 - 1 === y2 && (x1 === x2 || x1 + 1 === x2)) {
                ABOVE_COL = true;
                return false;
            }
        // 양쪽 끝이 다른 보와 동시에 연결 체크
        } else if (type === 1) {
            if (y1 === y2 && (x1 - 1 === x2)) {
                LEFT_ROW_INSTALLED = true;
            } else if (y1 === y2 && (x1 + 1 === x2)) {
                RIGHT_ROW_INSTALLED = true;
            }
        }
    });

    if (ABOVE_COL || (LEFT_ROW_INSTALLED && RIGHT_ROW_INSTALLED)) answer[answer.length] = [x1, y1, 1];
}


// 기둥 삭제
// 기둥 위에 양 옆으로 보가 존재할 경우,
// 기둥을 제거 해도 안전 하다
function delete_column(x1, y1, answer) {
    let LEFT_ROW_INSTALLED = false;
    let RIGHT_ROW_INSTALLED = false;

    answer.some((x2, y2, type) => {
        // 양쪽 끝이 다른 보와 동시에 연결 체크
        if (LEFT_ROW_INSTALLED && RIGHT_ROW_INSTALLED) {
            return false;
        }

        // 양쪽 끝이 다른 보와 동시에 연결 체크
        if (type === 1) {
            if (y1 + 1 === y2 && (x1 - 1 === x2)) {
                LEFT_ROW_INSTALLED = true;
            } else if (y1 + 1 === y2 && (x1 + 1 === x2)) {
                RIGHT_ROW_INSTALLED = true;
            }
        }
    });

    // 기둥 제거
    if (LEFT_ROW_INSTALLED && RIGHT_ROW_INSTALLED) {
        const delete_index = answer.findIndex(([x2, y2, type]) => (x1 == x2) && (y1 === y2) && (type === 0))
        answer.splice(delete_index, 1);
    }
}


// 보 삭제
//
function delete_row(x1, y1, answer) {

}


const n_ex1 = 5;
const build_frame_ex1 = [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]];
solution(n_ex1, build_frame_ex1);


/*
1차 시도

시간부족..
와 이걸 어떻게 40분에 풀지..
이해하는데도 오래걸렸다 ㅠㅠ...
연습연습!!



2차 시도 - 06.02 (1사간 소요)
보 삭제를 아직 구현 X
 */
