// fibonacci
// 문제
// 수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.
//
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
//
// 입력
// 인자 1 : num
// number 타입의 num (num은 0 이상 15 이하의 정수)
// 출력
// number 타입을 리턴해야 합니다. (num 번째 피보나치 수)
// 주의 사항
// 함수 fibonacci는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     피보나치 수열은 0번부터 시작합니다.
//     입출력 예시
// let output = fibonacci(5);
// console.log(output); // --> 5
//
// output = fibonacci(9);
// console.log(output); // --> 34


// fibonacci(0)=0
// fibonacci(1)=1
// fibonacci(2)=1 //fibonacci(0) + fibonacci(1)
// fibonacci(3)=2 //fibonacci(1) + fibonacci(2)
// fibonacci(4)=3 //fibonacci(2) + fibonacci(3)
// fibonacci(5)=5 //fibonacci(3) + fibonacci(4)

function fibonacci(num) {
  if(num <= 1){
    return num;
  }
  return fibonacci(num-2)+fibonacci(num-1)
}
let output = fibonacci(4)
console.log(output)

//
// function fibonacci(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 별도의 최적화 기법(memoization)은 금지됩니다.
//   // n=0 -> 0
//   // n=1 -> 1
//   // n=2 -> 1
//   // n=3 -> 2
//   // n=4 -> 3
//   // for(let i =2; i<num; i++){
//   //   num -2 + num -1
//   //   //2-2- +2-1 =1
//   //   //3-2 + 3-1 =3
//   // }
//   if(num===0){
//     return 0
//   }
//   if(num===1){
//     return 1
//   }
//   return fibonacci(num-2) + fibonacci(num-1)
// }
//
// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   }
//
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
// // fibonacci(5)=>
// // f(3)+f(4)
// // f(3)=f(1)+f(2)=f(1)+ (f(1)+f(0))=2
// // f(4)=f(2)+f(3)=(f(1)+f(0)) + (f(2)+f(1)) =(f(1)+f(0)) + (f(1)+f(0)) + f(1)=3
// // f(5) = 2+3 =5