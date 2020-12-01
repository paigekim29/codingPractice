// 문제
// 임의의 값을 입력받아 수(number)의 형태로 리턴해야 합니다.

// 입력
// 인자 1 : anything
// 임의의 값
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// number, string, boolean 타입만 입력됩니다.
// 입력값을 수로 변환할 수 없는 경우, NaN을 리턴해야 합니다.
// NaN은 수가 아님을 나타내는 특수한 값으로, 문자열이 아닙니다.

function convertToNumber(anything) {
    anything = Number(anything);
    return anything;
  }