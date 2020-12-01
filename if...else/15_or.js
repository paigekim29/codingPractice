// 문제
// 두 개의 boolean 값을 입력받아 or 연산을 적용한 것과 같은 결과를 리턴해야 합니다.

// 입력
// 인자 1 : expression1
// boolean 타입의 값
// 인자 2 : expression2
// boolean 타입의 값
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// || 연산자 사용은 금지됩니다.

function or(expression1, expression2) {
    if (expression1 && !expression2){
      return true;
    }
    else if (expression1 && expression2){
      return true;
    }
    else if (!expression1 && !expression2){
      return false;
    }
    return true;
}
  
function or(expression1, expression2) {
    if (expression1 === true && expression2 === true) {
      return true;
    } else if (expression1 === true && expression2 !== true) {
      return true;
    } else if (expression1 !== true && expression2 === true) {
      return true;
    } else if (expression1 !== true && expression2 !== true) {
      return false;
    }
}
