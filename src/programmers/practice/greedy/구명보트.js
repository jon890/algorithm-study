function solution(people, limit) {
  people.sort((a, b) => b - a); // 큰 순으로 정렬
  let start = 0;
  let end = people.length - 1;
  let answer = 0;

  while (start <= end) {
    // 앞과 뒤를 짝지어봄
    if (people[start] + people[end] <= limit) {
      // 둘다 태움
      start++;
      end--;
    } else {
      start++; // 앞만 태움
    }
    answer++; // 보트 출발
  }

  console.log(answer);
  return answer;
}

solution([70, 50, 80, 50], 100);
solution([70, 80, 50], 100);
