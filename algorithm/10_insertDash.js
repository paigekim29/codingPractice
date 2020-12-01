// 문제
// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 숫자 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 0은 짝수로 간주합니다.
// 입출력 예시
// let output = insertDash('454793');
// console.log(output); // --> 4547-9-3


function insertDash(str) {
    let result = str[0];
    for(let i=1; i<str.length; i++){
      if(Number(str[i-1]) % 2 === 1 && Number(str[i]) % 2 === 1) {
        // ===1 생략 가능 이유는 true가 1이고 false가 0이기 때문이다
        //하지만, 여기서는 쓸래!!!!
        result = result + '-'
      }
      result = result + str[i];
    }
    return result;
  }
  
  function insertDash(str) {
    let result = '';
    for(let i=0; i < str.length-1; i++){ //배열 길이를 넘으면 안됨으로
      if(str[i] % 2 && str[i+1] % 2){
        result += `${str[i]}-`
      }
      else {
        result += str[i]
      } 
    }
    result += str[str.length-1]; // 결과 값에 마지막 값을 추가함
    return result;
  }
  
  function insertDash(str) {
    let result = '';
    for(let i = 0; i<str.length -1; i++){
      if(str[i]%2 && str[i+1]%2){
        result += `${str[i]}-`
      }
      else{
        result += str[i];
      }
    }
    result += str[str.length-1];
    return result;
  }