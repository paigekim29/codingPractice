// 문제
// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴해야 합니다.
// 배열에는 문자열 외에 다른 요소들이 있을 수 있습니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output = findShortestWord([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

function findShortestWord(arr) {
  return arr => arr.filter(v => typeof v === 'string').
      sort((a, b) => a.length - b.length)[0] || '';
}

function findShortestWord(arr) {
  if (arr.length === 0) return '';
  const filtered = arr.filter(el => typeof el === 'string');
  if (filtered.length === 0) {
    return '';
  }
  return filtered.reduce((acc, cur) => acc.length <= cur.length ? acc : cur);
}

function findShortestWord(arr) {
  let words = arr.filter(function(el) {
    return typeof el === 'string';
  });
  if (words.length === 0) {
    return '';
  }
  return words.reduce(function(acc, cur) {
    if (acc.length <= cur.length) {
      return acc;
    } else {
      return cur;
    }
  }); // cannot put inital value as '' because it will intervene if statement and give all ''
}

function findShortestWord(arr) {
  const list = arr.filter(function(v) {
    return typeof v === 'string';
  });
  if (list.length === 0) {
    return '';
  }
  const callback = function(acc, cur) {
    if (acc.length <= cur.length) {
      return acc;
    } else {
      return cur;
    }
  };
  return list.reduce(callback);
}