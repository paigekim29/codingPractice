// 문제
// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// for문 사용은 금지됩니다.
// 숫자(number string) 사이를 '-'로 구분합니다. ('1-3-5-7-9')


function makeDigits2(num){
    let result = '1'; //먼저 결과값에 1을 두고 시작한다
    let i = 2;          //i는 2부터 증감
    while(i<=num){      //i가 num에 도달할 때까지
      result = result + "-" + String(i) //결과값은 문자열 결과값 1과 -를 이용하여 문자열 i값을 더해준다
      i ++
    }
    return result;
}