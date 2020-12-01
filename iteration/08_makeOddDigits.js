// 문제
// 수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('13579')

function makeOddDigits(num) {
    let result = '';        //결과값은 빈문자열
    let i =1;               //i는 1부터 시작
    while(i<=num*2){        //i는 num의 2배가 되는 숫자까지 진행
      result = result + String(i);  //결과값은 결과값과 2씩 늘어나는 i값을 옆에다가 붙여주기
      i  = i+2;
    }
    return result;
}