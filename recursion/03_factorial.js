// factorial
// 문제
// 수를 입력받아 n-factorial(n!) 값을 리턴해야 합니다.
//
//     입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 1 * 2 * ... * num
// 주의 사항
// 함수 factorial은 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     factorial(0)은 1로 정의됩니다.
//     음수 입력은 들어오지 않습니다.
//     입출력 예시
// let output = factorial(10);
// console.log(output); // --> 3628800

// factorial(4)=4*factorial(3)
// factorial(3)=3*factorial(2)

function factorial(num) {
  if(num<=1){
    return 1
  }
  return factorial(num-1) * num
}


function factorial(num) {
  // 탈출문으로 num1보다 같거나 작을 경우 1을 리턴하기
  //n * (n-1)!
  if(num <= 1){
    return 1;
  }
  return num * factorial(num-1)
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}