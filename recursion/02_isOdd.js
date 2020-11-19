// isOdd
// 문제
// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.
//
//     입력
// 인자 1 : num
// number 타입의 정수
// 출력
// boolean 타입을 리턴해야 합니다.
//     주의 사항
// 함수 isOdd는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.
//     입출력 예시
// let output = isOdd(17);
// console.log(output); // --> true
//
// output = isOdd(-8);
// console.log(output); // --> false

// while처럼 생각
// 1. 탈출 num=1 true or num=0 false 홀수 찾는 법

function isOdd(num) {
  num = Math.abs(num)
  function recursion(num){
    if(num===1){
      return true;
    }
    if(num===0){
      return false;
    }
    return isOdd(num-2) // 2씩 계속 빼라 하지만 언젠간 멈춰라
  }
  return recursion(num)
}


function isOdd(num) {
  //num에서 계속 2를 빼서 1이 나오면 홀수
  //0이 나오면 짝수
  num = Math.abs(num)
  if(num === 1){
    return true;
  }
  if(num === 0){
    return false;
  }

  return isOdd(num-2)
  //(15-2) -> (13-2) -> (11-2) -> ...
}

function isOdd(num) {
  if (num === 0) {
    return false;
  } else if (num === 1) {
    return true;
  }
  //탈출문

  if (num < 0) {
    return isOdd(-num);
  }
  //음수일 경우
  return isOdd(num - 2);
}
