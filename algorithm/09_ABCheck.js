// 문제
// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열
// 입력
// 인자 1 : str
// string 타입의 알파벳 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 대소문자를 구분하지 않습니다.
// 공백도 한 글자로 취급합니다.
// 'a'와 'b'는 중복해서 등장할 수 있습니다.
// 입출력 예시
// let output = ABCheck('lane Borrowed');
// console.log(output); // --> true


function ABCheck(str) {
    str = str.toLowerCase();
  
    for (let i = 0 ; i < str.length - 4; i++) { // 배열 길이를 넘지 않는다
      if((str[i] === 'a' && str[i + 4] === 'b') || // +4를 하면 문자열 범위를 넘어갈 수 있음
      (str[i] === 'b' && str[i + 4] === 'a')){
        return true;
      }
    }
    return false; // 만약에 for문 안에 return false를 준다면, 처음 a나 b를 만나고 안될경우 바로 else문으로
    //넘어가 버림. 하지만 끝까지 문자 전체를 돌아가며 확인해야되니, return false는 for문 바깥쪽에 넣어야 됨
    //그래야 for문에서 부합하지 않는애가 false가 되기 때문이다.
  }
  // \w word character
  
  // function ABCheck(str) {
  //   str = str.toLowerCase();
  
  //   const patternA = new RegExp(/a.{3}b/, 'g'); 
  //   const patternB = new RegExp(/b.{3}b/, 'g');
  
  //   return patternA.test(str) || patternB.test(str);
  // }
  // function ABCheck(str) {
  //   if (str === undefined) {
  //     return false;
  //   }
  
  //   str = str.toLowerCase();
  
  //   for (let i = 4; i < str.length; i++) { //i=0; str.length-4
  //     if (
  //       (str[i] === 'a' && str[i - 4] === 'b') ||
  //       (str[i] === 'b' && str[i - 4] === 'a')
  //     ) {
  //       return true;
  //     }
  //   }
  
  //   return false;
  // }
  
  function ABCheck(str) {
    str = str.toLowerCase();
    for(let i =0; i<str.length-4; i++){
      if((str[i]==='a' && str[i+4]==='b') || 
      (str[i]==='b' && str[i+4]==='a')){
        return true;
      }
    }
    return false;
  }