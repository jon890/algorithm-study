function solution(str1, str2) {
  const CORRECTION = 65536;

  const array1 = getMultipleSet(str1);
  const array2 = getMultipleSet(str2);
  if (!array1.length && !array2.length) return CORRECTION;

  const intersection = getIntersection(array1, array2);
  const union = getUnion(array1, array2);
  const jaccard = (intersection.length * CORRECTION) / union.length;
  return parseInt(jaccard);
}

function getMultipleSet(str) {
  const newStr = str.toLowerCase();
  const array = [];
  for (let i = 0; i < newStr.length - 1; i++) {
    if (newStr[i] < 'a' || newStr[i] > 'z') continue;
    if (newStr[i + 1] < 'a' || newStr[i + 1] > 'z') continue;
    const word = newStr[i] + newStr[i + 1];
    array.push(word);
  }
  return array;
}

function getIntersection(array1, array2) {
  const duplicateElements = array1.filter((x) => array2.includes(x));
  const set = new Set(duplicateElements);
  const result = [];

  for (const element of set) {
    // 해당 원소의 갯수중 적은것을 택해야함
    const count = Math.min(
      getCount(element, array1),
      getCount(element, array2),
    );
    // 해당 원소를 반복해서 넣음
    for (let i = 0; i < count; i++) {
      result.push(element);
    }
  }

  return result;
}

function getUnion(array1, array2) {
  const result = [];

  const intersect = new Set(array1.filter((x) => array2.includes(x)));
  for (const element of intersect) {
    // 해당 원소의 갯수중 많은것 택해야함
    const count = Math.max(
      getCount(element, array1),
      getCount(element, array2),
    );
    // 해당 원소를 반복해서 넣음
    for (let i = 0; i < count; i++) {
      result.push(element);
    }
  }

  // (A - B) U (B - A)
  const remain = [
    ...array1.filter((x) => !array2.includes(x)), // A - B
    ...array2.filter((x) => !array1.includes(x)), // B - A
  ];
  for (const el of remain) {
    result.push(el);
  }

  return result;
}

function getCount(target, array) {
  array.sort();

  const start = array.findIndex((value) => target === value);
  if (start === -1) return 0;

  let count = 0;
  for (let i = start; i < array.length; i++) {
    if (array[i] === target) count++;
    else break;
  }
  return count;
}

console.log(solution('FRANCE', 'french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('aa1+aa2', 'AAAA12'));
console.log(solution('E=M*C^2', 'e=m*c^2'));

/**
 * 2021-07-01
 * 다중집합의 합집합, 교집합
 * 구현하라는데로 하면 어렵진 않은거같은데
 * 혼자 생각하다가 잘못구현한게 많았다. 아쉽다
 */
