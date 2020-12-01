// 문제
// 수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.

function sumTo(num){
    let sum = 0;
    for(i=1; i<=num; i++){ 
      sum = sum+ i; //0부터 하나씩 커지는 숫자를 더하기.
    }
    return sum;
}