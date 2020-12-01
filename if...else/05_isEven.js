// 수를 입력받아 짝수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 0은 짝수로 간주합니다.

function isEven(num) {
    if (num % 2 === 1){
      return false;
    }
    else {
      return true;
    }
}
  
function isEven(num){
    if(num === 0){
      return true;
    }
    else if(num %2 ===1){
      return false;
    }
    else {
      return true;
    }
}