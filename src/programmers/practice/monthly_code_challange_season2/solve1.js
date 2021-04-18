function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    let numberString = signs[i] ? absolutes[i] : "-" + absolutes[i];
    answer += parseInt(numberString);
    // console.log(answer, numberString);
  }

  return answer;
}

solution([4, 7, 12], [true, false, true]);
