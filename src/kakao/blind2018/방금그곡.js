/**
 * 2021-08-19
 * 테스트케이스 12번을 통과 못하는중!!
 * 같은 노래 검출에서 cdcdf cdcdcdf를 검출하지 못하고 있음
 * 완료!!!!
 */

function solution(m, musicinfos) {
  const memoryNoteArray = handleMusicString(m); // 기억하고 있는 악보의 배열

  const result = musicinfos.map((it) => {
    const [startTime, endTime, title, music] = it.split(',');

    const playingTime = getDifferenceTime(startTime, endTime); // 재생시간
    const noteArray = handleMusicString(music); // 악보의 배열

    const playedNoteArray = []; // 재생된 악보의 배열
    for (let i = 0; i < playingTime; i++) {
      playedNoteArray.push(noteArray[i % noteArray.length]);
    }

    //console.log(memoryNoteArray, playedNoteArray);

    return {
      playingTime,
      title,
      isPlaying: compareInclusiveRelationship(memoryNoteArray, playedNoteArray),
    };
  });

  //console.log(result);

  const find = result
    .filter((it) => it.isPlaying)
    .sort((a, b) => {
      // 재생시간 순으로 정렬
      if (a.playingTime !== b.playingTime) {
        return b.playingTime - a.playingTime;
      } else {
        // 먼저 입력된 음악순으로 정렬
        return a.title - b.title;
      }
    });

  //console.log(find);

  return find[0] ? find[0].title : '(None)';
}

// target array가
// source array에 완전히 포함되어 있는지 확인하는 메소드
function compareInclusiveRelationship(target, source) {
  let count = 0;

  for (let i = 0; i <= source.length - target.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (source[i + j] === target[j]) {
        count++;
      } else {
        count = 0;
        break;
      }
    }

    if (count === target.length) break;
  }

  return count === target.length;
}

function getDifferenceTime(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':');
  const [endHour, endMinute] = endTime.split(':');
  return (endHour - startHour) * 60 + (endMinute - startMinute) + 1;
}

function handleMusicString(music) {
  const noteArray = [];

  let index = 0;
  while (index < music.length) {
    let currNote = music[index];
    const nextNote = music[index + 1];

    if (currNote !== '#') {
      if (nextNote === '#') currNote += nextNote;
      noteArray.push(currNote);
    }

    index++;
  }

  return noteArray;
}

console.log(
  compareInclusiveRelationship(
    ['c', 'd', 'c', 'd', 'f'],
    ['c', 'd', 'c', 'd', 'c', 'd', 'f'],
  ),
);
