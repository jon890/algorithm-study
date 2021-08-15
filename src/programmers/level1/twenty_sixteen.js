/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 연습문제
 * Level 1
 *
 * 2016년
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 */
const twenty_sixteen = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const twenty_sixteen_day_of_week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

function solution(a, b) {
    let day_of_year = 0;
    for (let i = 0; i < a - 1; i++) day_of_year += twenty_sixteen[i];
    day_of_year += b;

    // 7n = 목
    // 7n + 1 = 금
    // 7n + 2 = 토
    // 7n + 3 = 일
    // 7n + 4 = 월
    // 7n + 5 = 화
    // 7n + 6 = 수

    return twenty_sixteen_day_of_week[day_of_year % 7];
}

/*
DAY_OF_YEAR 를 구해서
7로 나눈 나머지를 활용하는 문제
간만에 보는듯..
실제로는 굳이 이렇게 구할필요가 없다!! ㅋㅋ

정확성  테스트
테스트 1 〉	통과 (1.59ms, 37.4MB)
테스트 2 〉	통과 (1.58ms, 37.4MB)
테스트 3 〉	통과 (1.77ms, 37.4MB)
테스트 4 〉	통과 (1.68ms, 37.6MB)
테스트 5 〉	통과 (2.68ms, 37.2MB)
테스트 6 〉	통과 (1.70ms, 37.6MB)
테스트 7 〉	통과 (1.69ms, 37.5MB)
테스트 8 〉	통과 (1.56ms, 37.4MB)
테스트 9 〉	통과 (1.69ms, 37.4MB)
테스트 10 〉	통과 (1.70ms, 37.3MB)
테스트 11 〉	통과 (1.67ms, 37.4MB)
테스트 12 〉	통과 (1.75ms, 37.3MB)
테스트 13 〉	통과 (1.59ms, 37.5MB)
테스트 14 〉	통과 (1.57ms, 37.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */