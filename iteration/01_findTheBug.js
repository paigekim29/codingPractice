// 문제
// 문자열을 입력받아 버그('#')의 인덱스를 리턴해야 합니다.

// 입력
// 인자 1 : word
// string 타입의 단어 (word.length >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// '#' 기호가 없는 경우 undefined를 리턴해야 합니다.

function findTheBug(word){
    for(let i=0; i<word.length; i++){ 
      if(word[i]==='#'){ //i가 각 단어를 돌면서 #를 만나면, 만났던 숫자를 리턴하기
        return i;
      }
    }
    return undefined;
}
  