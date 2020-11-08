// 문제
// 밑(base)과 지수(exponent)를 입력받아 밑의 거듭제곱을 리턴해야 합니다.

// 입력
// 인자 1 : base
// number 타입의 밑
// 인자 2 : exponent
// number 타입의 지수
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// Math.pow, 거듭제곱 연산자 사용은 금지됩니다. (거듭제곱은 자바스크립트 표준 내장 객체인 Math 객체를 통해 쉽게 구할 수 있습니다.)

function computePower(base, exponent){
    let result = 1; //결과는 1로 설정
    for(i=0; i<exponent; i++){    // i는 제곱의 1전까지 1씩 증감
      result = base * result;   //결과는 숫자와 결과값을 곱해주기
    }
    return result;
}