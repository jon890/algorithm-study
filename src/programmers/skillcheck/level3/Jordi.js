function solution(n, build_frame) {
    const answer = [];

    build_frame.forEach(([x, y, type, op]) => {
        // x : x좌표
        // y : y좌표
        // type : 0 (기둥), 1(보)
        // op : 0 (삭제), 1(설치)
        // console.log(x, y, type, op);

        if (op === 0) {
            switch (type) {
                case 0 :
                    break;
                case 1:
                    break;
            }
        } else if (op === 1) {
            switch (type) {
                case 0 : // 기둥 설치
                    install_column(x, y, answer);
                    break;
                case 1 :
                    break;
            }
        }
    })

    console.log(answer);
    return answer;
}


// 바닥이거나,
// 다른 기둥 위이거나,
// 보의 한쪽 끝 부분에 있어야 설치할 수 있다.
// 단!! 설치된 부분에 중복 설치는 나오지 않는다.
function install_column(x1, y1, answer) {
    let install = false;

    // 바닥체크
    if (y1 === 0) {
        install = true;
    } else {
        answer.some(([x2, y2, type]) => {
            // 다른 기둥 위 체크
            console.log(x2, y2, type);
            if (type === 0) {
                console.log(`>>> x1 : ${x1}, y1 : ${y1} /// x2 : ${x2}, y2 : ${y2}`);
                if (x1 === x2 && y1 === y2 + 1) {
                    install = true;
                    return false;
                }
                // 보의 한쪽 끝 부분 체크
            } else if (type === 1) {
                if (y1 + 1 === y2 && (x1 === x2 || x1 === x2 + 1)) {
                    install = true;
                    return false;
                }
            }
        });
    }

    if (install) answer[answer.length] = [x1, y1, 0];
    return install;
}

const n_ex1 = 5;
const build_frame_ex1 = [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]];
solution(n_ex1, build_frame_ex1);

/*
시간부족..
와 이걸 어떻게 40분에 풀지..
이해하는데도 오래걸렸다 ㅠㅠ...
연습연습!!
 */