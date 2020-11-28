// 문제
// 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.

// 입력
// 인자 1 : records
// 객체를 요소로 갖는 배열
// 인자 2 : value
// string 타입의 문자열
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
// 입출력 예시
// const records = [
//   {
//     score: 63,
//     animal: 'dog',
//   },
//   {
//     score: 75,
//     animal: 'dog',
//   },
//   {
//     score: 87,
//     animal: 'cat',
//   },
//   {
//     score: 98,
//     animal: 'cat',
//   },
//   {
//     score: 24,
//     animal: 'dog',
//   },
// ];

let output = calculateScore(records, 'cat');
console.log(output); // --> 185

output = calculateScore(records, 'dog');
console.log(output); // --> 162

output = calculateScore([], 'dog');
console.log(output); // --> 0

output = calculateScore(records, 'mouse');
console.log(output); // --> 0

function calculateScore(records, value) {
  return records.filter(el => el.animal === value).
      reduce((acc, cur) => acc + cur.score, 0);
}

function calculateScore(records, value) {
  return records.reduce(
      (acc, cur) => cur.animal === value ? acc + cur.score : acc, 0);
}

function calculateScore(records, value) {
  const sum = records.reduce(function(acc, cur) {
    if (cur.animal === value) {
      return acc + cur.score;
    } else {
      return acc; // 아무것도 하지 않았다.
    }
  }, 0);
  return sum;
}

function calculateScore(records, value) {
  return records.filter(function(val) {
    return val.animal === value;
  }).reduce(function(acc, val) {
    return acc + val.score;
  }, 0);
}

function calculateScore(records, value) {
  const isAnimalEqual = function(record) {
    return record.animal === value;
  };
  const filteredRecords = records.filter(isAnimalEqual); // record 분류. 주어진 요소의 animal이 value와 같은지
  // 각 요소의 'animal' 속성값이 문자열과 일치할 경우
  const result = filteredRecords.reduce(function(sum, record) {
    return sum + record.score;
  }, 0);
  return result;
}

function calculateScore(records, value) {
  let list = records.filter(function(record) {
    return record.animal === value; // check whether animal name matches up
  });
  return list.reduce(function(acc, record) { // has to be same parameter as above to add up what they ask
    return acc + record.score; // if it matches, start add up its score
  }, 0);
}

function calculateScore(records, value) {
  return records.reduce(function(acc, cur) {
    if (cur.animal === value) {
      return acc + cur.score;
    } else {
      return acc;
    } // 동물이 다를 때, undefined가 뜨니깐 else로 acc를 받아줘야 된다
  }, 0);
}