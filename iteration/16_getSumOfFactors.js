// 문제
// 수를 입력받아 약수(factor)의 합을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수
// 출력
// number 타입을 리턴해야 합니다.


function getSumOfFactors(num){
    let result =0;    // 결과는 0으로 시작
    for(i=1; i<=num; i++){    // i는 1부터 num까지 1씩 증감
      if(num % i === 0){    // num이 i로 나머지값없이 나눠지는 것은 약수라는 뜻
        result = result + i;    // 결과는 결과에다가 나눠지는 i값을 계속 더해나가기
      }
    }
    return result;
}