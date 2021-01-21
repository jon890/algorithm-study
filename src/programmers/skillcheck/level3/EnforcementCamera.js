/**
 * 프로그래머스
 * Level 3
 * 단속카메라
 * https://programmers.co.kr/learn/courses/30/lessons/42884
 */
function solution(routes) {
  const cars = routes.map(([start, end]) => {
    return {
      start,
      end,
    };
  });

  const range = [
    Math.min(...routes.map(([start]) => start)),
    Math.max(...routes.map(([_, end]) => end)),
  ];

  console.log(cars);
  console.log(range);

  // greedy? 최대한으로 많이 커버할 수 있는곳에 놓기
  var answer = 0;
  return answer;
}

solution([
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
