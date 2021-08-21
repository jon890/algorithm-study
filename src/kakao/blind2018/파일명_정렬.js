/**
 * 2021-08-21
 * 사전순 정렬할 때
 * (first > second) - (first < second)는 신기한 테크닉이네
 * 첫번째 것이 앞이라면 false - true => 0 - 1 => -1반환
 * 같다면 false - false => 0 - 0 => 0반환
 * 첫번째 것이 뒤라면 true - false = > 1 - 0 => 1반환
 * 지렸다..
 */

function solution(files) {
  return files
    .map((file, index) => {
      return {
        ...getFileDetail(file),
        index,
      };
    })
    .sort((f1, f2) => {
      // HEAD 부분을 기준으로 사전 순으로 정렬
      // 대소문자 구분 X
      const HEAD1 = f1.head.toLowerCase();
      const HEAD2 = f2.head.toLowerCase();
      if (HEAD1 !== HEAD2) {
        return (HEAD1 > HEAD2) - (HEAD1 < HEAD2);
      } else {
        // 같다면 NUMBER 숫자 순으로 정렬
        // 9 < 10 < 0011 < 012 < 013 < 014
        // 숫자 앞에 0 무시
        const NUMBER1 = parseInt(f1.number);
        const NUMBER2 = parseInt(f2.number);
        if (NUMBER1 !== NUMBER2) {
          return NUMBER1 - NUMBER2;
        } else {
          // HEAD, NUMBER까지 같다면 원래 입력에 주어진 순서 유지
          return f1.index - f2.index;
        }
      }
    })
    .map(({ head, number, tail }) => head + number + tail);
}

function getFileDetail(file) {
  let head = '';
  let number = '';
  let tail = '';

  for (let i = 0; i < file.length; i++) {
    const isDigit = Number.isInteger(parseInt(file[i]));

    // 숫자가 시작되기 전까지 head
    if (number === '' && !isDigit) {
      head += file[i];
      continue;
    }

    if (head !== '' && tail === '' && isDigit) {
      number += file[i];
      continue;
    }

    if (head !== '' && number !== '') {
      tail += file[i];
    }
  }

  return { head, number, tail };
}

// 저장소 서버 => 과거버전
// 이름순으로 오면 불편
// HEAD, NUMBER, TAIL
// HEAD 사전 순 정렬 => 대소문자 구분 X
// HEAD가 대소문자 차이외에는 같다 => NUMBER 숫자 순으로 정렬

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ]),
);

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ]),
);
