// 문제
// 문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 인자 2 : letter
// string 타입의 문자 (letter.length === 1)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.


function countCharacter(str, letter){
    let result = 0;   // 시작 결과값은 0
    for(let i=0; i<str.length; i++){    //객채열에서 찾는것이므로 i는 0에서 시작하고 str길이전까지 확인
      if(str[i] === letter){    //str에서 돌면서 letter와 같은 것이 있는 지 확인
        result +=1    //만약에 있다면 결과값을 1씩 늘려나가기
      }
    }
    return result;
}