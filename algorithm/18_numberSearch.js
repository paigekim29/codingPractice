// 문제
// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// number 타입을 리턴해야 합니다 (0 이상의 정수)
// 주의 사항
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.
// 입출력 예시
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2
// 힌트
// 주어진 문자(길이 1의 문자열)이 숫자(digit)인지 판단하는 방법은 여러 가지 입니다.
// 그 중 하나는 해당 문자가 숫자들의 집합(문자열 또는 배열)에 속하는 지를 판단하는 것입니다.
// 이와 관련해서 js includes를 검색해 봅니다.


function numberSearch(str) {
    // str에서 숫자 찾고 result += num
    // str.length에서 공백과 숫자 빼고 길이 구해서
    // 반올림으로 리턴
    let sum = 0;
    let length = 0;
    if(str.length === 0){
      return 0;
    }
    for(let i = 0; i < str.length; i++){
      if(Number(str[i]) || str[i] === 0){ //Number(0)인 falsy니깐 바로 넘어가니깐 넘버인 애들이랑 0인 애들도 더해줘야 else if 로 안넘어감
        sum += Number(str[i]);
      }
      else if(str[i]!==' '){ //공백이랑 문자자가 아닌 애들
        length ++;
      }
    }
    sum = Math.round(sum/length);
    return sum;
  }

function numberSearch(str) {
  const digits = '0123456789';

  if (str === '') {
    return 0;
  }

  let sum = 0;
  let pureStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      // 숫자인 경우
      sum = sum + Number(str[i]);
    } else if (str[i] !== ' ') {
      // 숫자도 공백도 아닌 경우
      pureStr = pureStr + str[i];
    }
  }

  // 결과를 반올림 한다.
  return Math.round(sum / pureStr.length);
}