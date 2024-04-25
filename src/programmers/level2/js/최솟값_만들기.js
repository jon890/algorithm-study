function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i] * B[i];
    }

    return sum;
}

// 각각 한 개씩 뽑아 두 수를 곱한다
// 그 값을 더한다
// 누적된 값이 최소
// 큰 x 작 

// 직관적으로 풀긴했지만
// 증명은 아래를 참고하자
// https://velog.io/@injoon2019/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B5%9C%EC%86%9F%EA%B0%92-%EB%A7%8C%EB%93%A4%EA%B8%B0