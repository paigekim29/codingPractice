// 문제
// 수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수
// 출력
// boolean 타입을 리턴해야 합니다.

function isPrime(num) {
  isNumPrime = true;    // 먼저 불리언값 설정
  for (let i = 2; i < num; i++) {    //소수는 2부터 시작되어야 하니깐 i를 2부터 Num까지 1씩 증감설정
    if (num % i === 0) {    //num이 i로 나눠지는 것은 소수가 아니므로
      isNumPrime = false;   //false가 되어버림
    }
  }
  return isNumPrime;
}

function isPrime(num) {
  let sqrt = parseInt(Math.sqrt(num));

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}