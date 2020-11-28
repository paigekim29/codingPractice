// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output1 = letterCapitalize('hello world');
// console.log(output1); // "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy "

function letterCapitalize(str) {
    let words =  str.split(' ');//배열 만들 때 공백대로 자르기
    for(let i = 0; i < words.length; i++){
      if(words[i].length > 0){ //in order to skip space
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    }
    return words.join(' '); //공백대로 잘랐으니깐 공백있이 string을 만들기 위해
}
  
  // 1. 글자 본인이 ' '이 아니다
  // 2. 공백 뒤에 오는 글자
  // 예외: str[0] !== ' ' => 첫번째 글자
  
  // 단어의 시작: 이전 글자가 빈칸이고 현재 위치가 글자이고, 뒤의 글자도 글자일 때
  
function letterCapitalize(str) {
    let arr = str.split(''); //하나의 배열에 공백 포함해서 만들기 [...str]
    for(let i=0; i<arr.length;i ++){
      if(arr[i-1]==' '){
        arr[i] = arr[i].toUpperCase();
      }
      else if(i===0){
        arr[0]=arr[0].toUpperCase(); //if문 두개가 나은지 else if가 나은지
      }
    }
    return arr.join('')
}


function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result =''
  for(let i=0; i<str.length; i++){
    if(i===0){
      result += str[0].toUpperCase()
    }
    else if(str[i-1]===' '){
      result += str[i].toUpperCase()
    }
    else{
      result +=str[i]
    }
  }
  return result
}

function letterCapitalize(str) {
  let previousStr = ' '
  let result =''
  for(let i=0; i<str.length; i++){
    if(previousStr===' '){
      result += str[i].toUpperCase()
    }
    else{
      result +=str[i]
    }
    previousStr =str[i]
  }
  return result
}
