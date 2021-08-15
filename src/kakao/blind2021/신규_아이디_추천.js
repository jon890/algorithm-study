function solution(new_id) {
  let change_id = new_id;

  // 1단계 대문자를 소문자로
  change_id = change_id.toLowerCase();

  // 2단계 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 문자 제거
  const convert = [];
  for (const char of change_id) {
    if (
      (char >= 'a' && char <= 'z') ||
      (char >= '0' && char <= '9') ||
      char === '-' ||
      char === '_' ||
      char === '.'
    )
      convert.push(char);
  }
  change_id = convert.join('');
  //   console.log(`2단계 : ${change_id}`);

  // 3단계 연속된 마침표를 하나로 만들기
  const dotRegExp = /\.{2,}/g;
  change_id = change_id.replace(dotRegExp, '.');
  //   console.log(`3단계 : ${change_id}`);

  // 4단계 맨앞 맨뒤 마침표 제거
  if (change_id[0] === '.') change_id = change_id.substring(1);
  if (change_id[change_id.length - 1] === '.')
    change_id = change_id.substring(0, change_id.length - 1);
  //   console.log(`4단계 : ${change_id}`);

  // 5단계 빈문자열이면 a를 대입
  if (!change_id.length) change_id = 'a';

  // 6단계 16자 이상이면, 15개만 남기고 제거
  if (change_id.length >= 16) {
    change_id = change_id.substring(0, 15);

    // 제거 후 끝 문자가 마침표라면 마침표 제거
    if (change_id[change_id.length - 1] === '.')
      change_id = change_id.substring(0, change_id.length - 1);
  }

  // 7단계 2자 이하라면 마지막 문자를 길이가 3이될때까지 붙인다
  if (change_id.length <= 2) {
    for (let i = change_id.length; i < 3; i++) {
      change_id += change_id[change_id.length - 1];
    }
  }

  console.log(change_id);
  return change_id;
}

solution('...!@BaT#*..y.abcdefghijklm');
solution('z-+.^.');
solution('=.=');
solution('123_.def');
solution('abcdefghijklmn.p');

/**
 * 2021-06-30
 * 20분 통과
 */
