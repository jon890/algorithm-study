function solution(s) {
    const answer = [];
    const str_length = s.length;

    for (let split_unit = 1; split_unit <= str_length; split_unit++) {

        // 자른 문자열을 담을 변수
        const splited_string = [];

        // 문자열 자르기 반복횟수
        let iter = str_length / split_unit;
        if (str_length % split_unit !== 0) iter++;

        // 문자열을 split_unit 의 길이로 자른다
        for (let i = 0; i < iter; i++) {
            splited_string[i] = s.substring(split_unit * i, split_unit * (i + 1));
        }

        // console.log(splited_string);

        // 잘린 문자열 처리
        // 중복되는 문자를 제거하여
        // 원하는 결과를 만든다
        let duplicate_count = 1; // 문자열 중복 갯수
        let processed_string = ""; // 처리후 문자

        for (let i = 0; i < splited_string.length; i++) {

            // 현재 문자와 다음 문자가 같다
            // 중복되는 문자와, 갯수를 저장
            if (splited_string[i] === splited_string[i + 1]) {
                duplicate_count++;
                // 현재 문자와 다음 문자가 다르다
            } else {
                // 이전 문자의 중복이 끝났다
                if (duplicate_count > 1) {
                    processed_string += duplicate_count + splited_string[i - 1];
                    duplicate_count = 1;
                    // 이전 문자는 중복이 아니다
                } else {
                    processed_string += splited_string[i];
                }
            }
        }
        answer.push(processed_string);
    }

    // console.log(answer);
    let minimum_length = str_length;
    answer.forEach(str => {
        if (str.length < minimum_length) minimum_length = str.length;
    });

    return minimum_length;
}

/*
2020-06-02
자바스크립트에서는 배열의 원소가 없는 상태여도
Array.length보다 큰 원소에 접근해도 에러가 나지않고
값이 undefined로 나온다.
깔끔하게 잘푼듯하다.. 사실 작년에 테스트 본거긴하지만
실력이 그래도 조금 오른거같은 느낌이다 ㅎㅎ

정확성  테스트
테스트 1 〉	통과 (1.76ms, 37.5MB)
테스트 2 〉	통과 (2.06ms, 37.5MB)
테스트 3 〉	통과 (1.97ms, 37.6MB)
테스트 4 〉	통과 (1.75ms, 37.5MB)
테스트 5 〉	통과 (1.71ms, 37.5MB)
테스트 6 〉	통과 (1.70ms, 37.7MB)
테스트 7 〉	통과 (2.22ms, 37.9MB)
테스트 8 〉	통과 (2.09ms, 37.6MB)
테스트 9 〉	통과 (2.28ms, 37.7MB)
테스트 10 〉	통과 (5.61ms, 38.2MB)
테스트 11 〉	통과 (1.97ms, 37.4MB)
테스트 12 〉	통과 (1.87ms, 37.5MB)
테스트 13 〉	통과 (1.80ms, 37.5MB)
테스트 14 〉	통과 (2.19ms, 37.6MB)
테스트 15 〉	통과 (1.86ms, 37.4MB)
테스트 16 〉	통과 (1.72ms, 37.5MB)
테스트 17 〉	통과 (2.60ms, 37.8MB)
테스트 18 〉	통과 (2.47ms, 37.9MB)
테스트 19 〉	통과 (2.56ms, 37.8MB)
테스트 20 〉	통과 (5.98ms, 38.5MB)
테스트 21 〉	통과 (5.57ms, 38.2MB)
테스트 22 〉	통과 (5.76ms, 38.5MB)
테스트 23 〉	통과 (5.71ms, 38.1MB)
테스트 24 〉	통과 (5.68ms, 38.2MB)
테스트 25 〉	통과 (5.63ms, 38.4MB)
테스트 26 〉	통과 (5.58ms, 38.2MB)
테스트 27 〉	통과 (5.66ms, 38.2MB)
테스트 28 〉	통과 (1.79ms, 37.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */