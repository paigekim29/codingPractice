// 문제
// 수(num)와 문자열을 입력받아 차례대로 num개의 문자로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 인자 2 : str
// 임의의 길이의 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// num과 str.length 중 최대값만큼 저장(take)합니다.

function takeLetters(num, str) {
    return str.substring(0, num);
}
  
function takeLetters(num, str) {
    if(num >=str.length ||str === ''){
      return str;
    }
    return str.slice(0, num)
}