// 문제
// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('1234567')

function makeDigits(num){
    let result ='1';        //result는 문자열 1이다
    for(let i=2; i<=num; i++){ //i가 2부터 num까지 계속 하나씩 증가하고
      result = result+ i;       // 결과값은 결과값 1에 i를 증감할때까지 더해서 문자열로 리턴한다
    }
    return result;
}