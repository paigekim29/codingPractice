// 문제
// 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

// 입력
// 인자 1 : num1
// number 타입의 정수 (num1 >= 0)
// 인자 2 : num2
// number 타입의 정수 (num2 >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// num1이 num2보다 작지 않을 수도 있습니다.
// 0은 2의 배수가 아니라고 가정합니다.


function makeMultiplesOfDigit2(num1, num2){
    let a = Math.max(num1, num2);   //a를 arguments의 제일 큰 값으로 설정
    let b=Math.min(num1, num2);     //b를 arguments의 제일 작은 값으로 설정
    let result = 0;   //결과는 0에서 시작
    if (b === 0) {    //제일 작은 값이 0이면, 작은값을 1로 변경
      b =1;
    }
    for(let i=b; i<=a; i++){    //i는 작은값이고 큰값까지 하나씩 증감
      if (i %2 ===0){   //i가 2로 나눠지면, 2의 배수라는 뜻
        result +=1;   //결과값은 1씩 증감
      }
    }
    return result;
}