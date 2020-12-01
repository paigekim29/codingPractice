// 문제
// 문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// str.slice, str.substr, str.substring 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

function makeMarginalString(str){
    let result = '';    //결과를 빈 문자열로 주기
    for (let i=0; i<str.length; i++){   //i는 하나씩 늘려나가기
      for(let k=0; k<=i; k++){    //k도 0부터 시작해서 i가 있는 값으로 까지 1씩 증감
        result = result + str[k]; //결과는 하나씩 추가
      }
    }
    return result;
}