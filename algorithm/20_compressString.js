// 문제
// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.
// 입출력 예시
// let output = compressString('abc');
// console.log(output); // --> abc

// output = compressString('wwwggoppopppp');
// console.log(output); // --> 3wggoppo4p

// function compressString(str) {
// 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴 => 3개 이상 연속되는 문자만 압축
//'wwwggoppopppp' => 3wggoppo4p
// 이번 글자는 w야 => 저장
// w가 몇번 반복 되었니? => 저장 count ++;
// 반복되는 글자가 무엇이고, 몇번 반복되었는지 알면, 그 시점에 기록할 수 있을 것 =>3w,gg
// for문을 한 번만 사용한다면
// 0 => w // 이번 글자는 w야, 1번 반복
// 1 => w // 이번 글자는 w야(아까 저장했던 값과 현재 i번째가 같은 경우), 2번 반복
// 2 => w // 이번 글자는 w야(아까 저장했던 값과 현재 i번째가 같은 경우), 3번 반복
// 이 시점에서 기록 => result
// 3 => g // 이번 글자는 g야(아까 저장했던 값과 현재 i번째가 다른 경우), 1번 방복
// ...

function compressString(str) {
  let count = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count >= 3) {
        result += count + str[i];
      } else {
        result += str[i].repeat(count);
      }
      count = 1;
    }
  }
  return result;
}

function compressString(str) {
  let result = '';
  let count = 1;
  str= str+ ' '
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count >= 3) {
        result += count + str[i - 1];
      }
      else{
        result += str[i-1].repeat(count)
      }
      count =1
    }
  }
  return result;
}

console.log(compressString('w'));
console.log(compressString('ww'));
console.log(compressString('wwwqqq'));
console.log(compressString('wwww'));
console.log(compressString('wwwww'));
// console.log(output); // --> abc
//
// output = compressString('wwwggoppopppp');
// console.log(output); // --> 3wggoppo4p





