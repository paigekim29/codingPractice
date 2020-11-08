// 문제
// 수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0) 이상의 정수)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('3691215')
// 3의 배수가 없을 경우, 빈 문자열을 리턴해야 합니다.

function makeMultiplesOfDigit(num){
    let result='';        //결과값은 빈문자열
    for (let i=1; i<=num; i++){     //i가 num까지 계속 1씩 증감
      if(i % 3 === 0){     //i가 3으로 나눠지면, 3의배수라는 뜻
        result = result + String(i)   //결과값에 하나씩 3의배수를 넣어서 줄세움
      }
    }
    return result;
}
  