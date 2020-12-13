// fibonacci
// 문제
// 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
//
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// 입력
// 인자 1 : n
// number 타입의 n (n은 0 이상의 정수)
// 출력
// number 타입을 리턴해야합니다.
//     주의사항
// fibonacci 함수는 재귀함수 형태로 작성해야 합니다.
//     입출력 예시
// let output = fibonacci(0);
// console.log(output); // --> 0
//
// output = fibonacci(1);
// console.log(output); // --> 1
//
// output = fibonacci(5);
// console.log(output); // --> 5
//
// output = fibonacci(9);
// console.log(output); // --> 34
// Advanced
// 재귀함수의 형태를 유지한 채, 메모이제이션(memoization)을 적용하여 Advanced 테스트 케이스를 통과해 보세요

// naive solution
// let fibonacci = function (n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// reference
const memo = [0, 1];
let fibonacci = function (n) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
};


// 내가 푼 방법
function fibonacci(n, memo) {
  memo= memo || {};
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 1) return n
  return memo[n] = (fibonacci(n - 2, memo) + fibonacci(n - 1, memo));
  // 할당문은 객체나, 배열이나 변수에 넣어 주는 것
  // 할당문은 항상 우변에 값을 완료 값으로 가지게 됨 => 항상 우변에 있는 값이 평가가 됨
  // 그리고 return 하게 되면 완료 값이 return 하게 됨
}