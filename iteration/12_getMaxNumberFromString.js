// 문제
// 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 숫자 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// str.split 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

function getMaxNumberFromString(str) {
    let result = 0;   // 결과값은 0으로 시작
    for(let i=0; i<str.length; i++){    //i는 객체열에서 찾을꺼니깐 0에서 시작에서 1씩 증감
      if(Number(str[i])>result){    //str을 돌면서 0보다 큰지확인
        result = Number(str[i])   //결과는 제일 큰 값으로 유지시키고, 작은값이 나오면 i증감
      }
    }
    return String(result);    //숫자를 문자열로 전환  
}