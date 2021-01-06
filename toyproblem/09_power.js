// power
// 문제
// 두 수를 입력받아 거듭제곱을 리턴해야 합니다.
//
//     입력
// 인자 1: base
// number 타입의 자연수 (base >= 2)
// 인자 2: exponent
// number 타입의 정수 (exponent >= 0)
// 출력
// number 타입을 리턴해야 합니다.
//     실제 계산 결과를 1000000009로 나눈 나머지를 리턴해야 합니다.
//     주의사항
// Math.pow, 거듭제곱 연산자 사용은 금지됩니다.
//     시간복잡도 O(logN)을 만족해야 합니다.
//     나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 1000000009로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.
//     입출력 예시
// let output = power(3, 40);
// console.log(output); // --> 637940656

// 일반식
// function power(base, exponent) {
//   let count =0
//   let result = 1
//   while(count !== exponent){
//     result *= base
//     if(result >1000000009) result = result % 1000000009
//     count++
//   }
//   return result
// }

/*
 *  O(logN)이 되려면 횟수가 절반씩 줄어야 함
 *
 *  2^8 (짝수)
 *  = 2^4 * 2^4
 *  = 2^2 * 2^2 * 2^2 * 2^2
 *
 *  2^9 (홀수)
 *  = 2 * 2^4 * 2^4
 *  = 2 * 2^2 * 2^2 * 2^2 * 2^2
 */


function power(base, exponent) {
  if(exponent === 0) return 1;

  let halfExp=  Math.floor(exponent/2)
  let recursion = power(base, halfExp)
  let result = recursion * recursion % 1000000009

  if(exponent % 2 === 1) return base * result % 1000000009;
  else return result
}

// function power(base, exponent) {
//   if(exponent === 0) return 1;
//
//   let halfExp=  Math.floor(exponent/2)
//   let recursion = power(base, halfExp)
//   // let result = recursion * recursion % 1000000009
//
//   if(exponent % 2 === 1) return (base * (recursion * recursion % 1000000009))%1000000009;
//   else return recursion * recursion % 1000000009
// }

console.log(power(2, 4))
function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 1000000009;

  if (exponent % 2 === 1) return (base * result) % 1000000009;
  else return result;
}