// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

function makePermutations(str) {
    let result = '';    // 결과는 빈 문자열
    for(let i=0; i<str.length; i++){    //i는 0부터 시작해서 str길이만큼 1씩 증감
      for (let k=0; k<str.length; k++){   //k도 0부터 시작해서 str 길이만큼 1씩 증감
        result = result + str[i]+ str[k] + ','    //결과는 도출한 값을 ,로 이어붙이기 =을 쓰면 더 늘어남
      }
    }
    return result.slice(0, result.length-1);    //마지막 ,빼기위해 슬라이스 사용
}
  
