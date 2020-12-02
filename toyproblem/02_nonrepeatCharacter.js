// 02_nonrepeatCharacter
// firstNonRepeatedCharacter
// 문제
// 임의의 문자열을 입력받아 문자열 내에서 한 번만 등장하는 문자를 리턴해야 합니다.
//     입력
// 인자 1 : str
// string 타입의 공백이 없는 문자열
// 출력
// string 타입을 리턴해야 합니다.
//     주의사항
// 조건을 만족하는 문자 중 가장 먼저 위치한 문자를 리턴해야 합니다.
//     조건을 만족하는 문자가 없는 경우, null을 리턴해야 합니다.
//     입출력 예시
// let ouput = firstNonRepeatedCharacter('ABA');
// console.log(output); // --> 'B'
//
// output = firstNonRepeatedCharacter('AACBDBC');
// console.log(output); // --> 'D'

const firstNonRepeatedCharacter = function (str) {
  let obj = {};
  for(let i = 0; i<str.length; i++){
    if(obj[str[i]]=== undefined)obj[str[i]]=0
    obj[str[i]] ++;
  }
  let arr = Object.entries(obj).filter(v=> v[1] ===1);
  if(arr.length === 0){
    return null;
  }
  else{
    return arr[0][0]
  }
};

const firstNonRepeatedCharacter = function (str) {
  const mem = {};
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (mem[chr] === undefined) mem[chr] = 1;
    else mem[chr]++;
  }
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (mem[chr] === 1) return chr;
  }
  return null;
};

console.log(firstNonRepeatedCharacter('ABA'))