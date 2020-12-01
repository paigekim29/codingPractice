// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입의 문자열
// 주의 사항
// 두 칸 이상의 공백은 존재하지 않는다고 가정합니다.
// 입출력 예시
// let output = convertDoubleSpaceToSingle('string  with  double  spaces');
// console.log(output); // --> "string with double spaces"


function convertDoubleSpaceToSingle(str) {
    let result = '';
    let before = '';
    for (let i = 0; i < str.length; i++) {
      // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
      // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
      if (before !== ' ' || str[i] !== ' ') { //전 것도 빈칸이 아니고 이번 것도 빈칸이 아닌경우
        result = result + str[i];
      }
      before = str[i]; //if문 안에 넣을경우, if 조건물에 해당하는 값만 before에 저장되니, 
      //for문 끝나기 전에 넣어야 됨. 현재 문자를 기억하기 위해 할당하고 다음회전에서는 현재문자가 이전문자가 됨
    }
    return result;
}
  
  // return str.replace(/\W+/g, ' ');
  
  //W 문자가 아닌것
  //w 문자인 것
  // W+ 문자가 아닌것을 한개 이상 찾는다
  //g global, apply all
  
  function convertDoubleSpaceToSingle(str) {
    const arr=str.split(''); //[...str] in order to change stirng, better to change into array
    for(let i =0; i<arr.length; i++) {
      if(arr[i]===' ' && arr[i+1] === ' '){
        arr.splice(i, 1)//배열 순회 중 배열 길이를 바꿔주면 인덱스가 바꿔짐
      }
    }
  return arr.join('')
}

function convertDoubleSpaceToSingle(str) {
  let maybeArr = str.split('')
  for(let i=0; i<maybeArr.length; i++){
    if(maybeArr[i+1]===' '&& maybeArr[i+2]=== ' '){
      maybeArr.splice(i+2,1)
    }
  }
  return maybeArr.join('')
}

function convertDoubleSpaceToSingle(str) {
  let result =''
  for(let i=0; i<str.length; i++){
    if(str[i]===' ' && str[i-1]=== ' '){
      continue;
    }
    else{
      result += str[i]
    }
  }
  return result
}