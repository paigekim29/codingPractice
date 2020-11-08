// 문제
// 수를 입력받아 n-factorial(n!) 값을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 1 * 2 * ... * num
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// factorial(0)은 1로 정의됩니다.
// 음수 입력은 들어오지 않습니다.


function factorial(num){
    let result= 1;
    for(let i=1; i<=num; i++){
      result= result*i; //1부터 숫자까지 하나씩 계속 곱해주기
    }
    return result;
}