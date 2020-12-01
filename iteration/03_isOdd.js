// 문제
// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// for문 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.

function isOdd(num){
    num = Math.abs(num); //음수일 수도 있으니, 항상 절대값으로 숫자 변경
    while(num>2){ //num이 2보다 큰경우
      num = num -2; //num을 계속 2를 빼준다
    }
    if (num === 1){
      return true;
    }
    else{
      return false;
    }
}