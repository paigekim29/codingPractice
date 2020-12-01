// 문제
// 두 개의 문자열을 입력받아 대소문자를 구분하지 않고(case insensitive) 서로 같은지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : str1
// string 타입의 문자열
// 인자 2 : str2
// string 타입의 문자열
// 출력
// boolean 타입을 리턴해야 합니다.


function compareOnlyAlphabet(str1, str2) {
    let a = str1.toLowerCase();
    let b= str2.toLowerCase();
    return a===b;
}

function compareOnlyAlphabet(str1, str2){
  if(str1.toLowerCase() === str2.toLowerCase()){
    return true;
  }
  return false;
}