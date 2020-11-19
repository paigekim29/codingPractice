// 문제
// 수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)
// 출력
// string 타입을 리턴해야 합니다.
// 2-3-5-7의 형식으로 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.


function listPrimes(num){
    let result = '2';   //소수니깐 결과는 2부터 시작
    for (let i=3; i<=num; i++){   //결과가 2부터 시작하니깐 i 는 3부터 num까지
      let isPrime =true;    // 불리언 설정
      for (let k = 2; k<i; k++){    //k는 나누는 값이므로 i보다 작아야 됨
        if (i %k === 0){    //i가 k로 나눠지면 소수가 아님
          isPrime = false;    //소수는 거짓이고 더이상 for이 돌지 않음
          break;
        }
      }
      if (isPrime){   //소수가 맞으면 
        result = result + '-' + i;    //결과에 -로 숫자 이어붙이기
      }
    }
    return result;
}


function listPrimes(num) {
  let result = '2';
  for (let candi = 3; candi <= num; candi += 2) {
    let isPrime = true;
    let sqrt = parseInt(Math.sqrt(candi));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (candi % divider === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result = `${result}-${candi}`;
    }
  }

  return result;
}