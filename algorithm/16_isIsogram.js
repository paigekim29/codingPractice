// 문제
// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.
// 입출력 예시
// let output = isIsogram('aba');
// console.log(output); // false

// output = isIsogram('Dermatoglyphics');
// console.log(output); // true

// output = isIsogram('moOse');
// console.log(output); // false

function isIsogram(str) {
  str = str.toLowerCase();
  let result = str.split('');
  if (result.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 1 + i; j < str.length; j++) { //i가 0일때, j는 1+0=1부터 길이 전까지. i가 1일때, j는 1+1=2부터~
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

function isIsogram(str) {
  let lowerStr = str.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[lowerStr[i]] === undefined) {
      obj[lowerStr[i]] = true;
    } else {
      return false;
    }
  }
  return true;
}