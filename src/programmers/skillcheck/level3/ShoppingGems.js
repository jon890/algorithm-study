function solution(gems) {
  // 먼저 어떤 종류의 보석이 있는지 종류를 알아봐야할듯?
  const set_of_gems = new Set();
  for (let i = 0; i < gems.length; i++) {
    set_of_gems.add(gems[i]);
  }
  //   console.log(set_of_gems);

  // 어떻게 선택하는게 최소가 될까?
  // 짧은 구간이 여러개라면 시작 진열대 번호가 가장 작은 구간이 답이 된다

  // 최소로 선택해야하는 범위는 x ~ x + set.length
  // 순차적으로 모두 비교 ㄱㄱ
  const answers = [];
  let start = 0;
  let end = start + set_of_gems.size;

  const new_set = new Set();
  while (true) {
    for (let i = start; i < end; i++) {
      new_set.add(gems[i]);
    }

    if (new_set.size === set_of_gems.size) {
      answers.push({
        start,
        end,
        length: end - start,
      });
    }
    new_set.clear();

    // end가 끝에 도달
    end++;
    if (end > gems.length) {
      // start + 1
      start++;
      end = start + set_of_gems.size;
      if (start + set_of_gems.size > gems.length) {
        break;
      }
    }
  }

  // console.log(answers);
  // length 가 제일 짧은 것 찾기
  let compare_length = gems.length;
  for (let i = 0; i < answers.length; i++) {
    if (compare_length > answers[i].length) {
      compare_length = answers[i].length;
    }
  }

  const new_answer = answers.find(({ length }) => length === compare_length);
  return [new_answer.start + 1, new_answer.end];
}

// console.log(
// solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
// );
// console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
// console.log(solution(["XYZ", "XYZ", "XYZ"]));
// console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));

/**
 * 2021 - 01 - 18
 * 역시나 이중포문으로 모든 경우를 검사하는 경우는 답이 아니겠지..
 * 어떤 방식으로 접근해야할지 모르겠다
 * 해설을 참고해보자..
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.43ms, 30MB)
테스트 2 〉	통과 (8.51ms, 33.8MB)
테스트 3 〉	통과 (97.39ms, 41.2MB)
테스트 4 〉	통과 (0.38ms, 29.9MB)
테스트 5 〉	통과 (238.06ms, 47.8MB)
테스트 6 〉	통과 (0.23ms, 30.1MB)
테스트 7 〉	통과 (0.29ms, 29.8MB)
테스트 8 〉	통과 (1766.51ms, 51MB)
테스트 9 〉	통과 (2385.80ms, 62MB)
테스트 10 〉	통과 (2290.98ms, 35.1MB)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
효율성  테스트
테스트 1 〉	실패 (시간 초과)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	실패 (시간 초과)
테스트 10 〉	실패 (시간 초과)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
채점 결과
정확성: 22.2
효율성: 0.0
합계: 22.2 / 100.0
채점 결과
정확성: 22.2
효율성: 0.0
합계: 22.2 / 100.0
 */
