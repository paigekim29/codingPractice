// sumTo
// 문제
// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
//
//     입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 1 + 2 + ... + num
// 주의 사항
// 함수 sumTo는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     n * (n + 1) / 2 와 같은 공식의 사용은 금지됩니다.
//     음수 입력은 들어오지 않습니다.
//     입출력 예시
// let output = sumTo(10);
// console.log(output); // --> 55
// 힌트
// sumTo(n)은 자연수 1부터 n까지의 합을 계산하는 함수입니다.
//     sumTo(1) = 1
// sumTo(2) = 1 + 2 = 3
// sumTo(3) = 1 + 2 + 3 = 6
// sumTo(4) = 1 + 2 + 3 + 4 = 10

// input값이 5일 때, 1씩 감소
// 결과값이 1보다 작을 때는, 리턴을 0으로 하고 탈출
// num이 1일 됐을 때, 1을 리턴하고 탈출


// sumTo(4)=4+sumTo(3) // self plus previous function
// sumTo(3)=3+sumTo(2) // self plus previous function
// sumTo(2)=2+sumTo(1) // self plus previous function

function sumTo(num) {
  if(num===1){
    return 1
  }
  return sumTo(num-1) + num
}

let output = sumTo(4)
console.log(output)

// function sumTo(num) {
//   if(num === 0){
//     return 0;
//   }
//   return num + sumTo(num-1)
//   // 5+ (5-1) + (4-1) + ...
// }
//
// function sumTo(num) {
//   if (num <= 1) {
//     return num;
//   }
//   return num + sumTo(num - 1);
// }

// 1. 재귀 함수의 입력값과 출렵값 정의하기
// sumTo: num => num
//
// 2. 문제를 쪼개고 경우의 수 나누기
// 1부터 num까지의 합
// 문제를 쪼갤 수 없는 경우 => num이 1인 경우
// Num이 1인 경우 => 0+1=>num이 0인 경우 +1
// num이 2인 경우 => 0+1+2=> num이 1인 경우 +2
// 문제를 푸는 방식이 같다 쪼갤 수 있다
//
// 3. base case
// 문제를 쪼갤 수 없는 경우 => num이 0인 경우
//
// 4. 복잡한 문제 해결하기
// num이 n인 경우 = num이 n-1 인 경우 +ㅜ
//
// 5. 코드 구현하기
// if(num <= 0){
//   return num;
// }
// return num + sumTo(num-1);
// }

// 연산을 위해서 한 번 더 재귀함수 호출해야 됨
// 0일 때, 재귀 호출이 한 번 더 됨


