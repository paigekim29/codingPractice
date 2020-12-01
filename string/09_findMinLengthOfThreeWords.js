// 문제
// 세 개의 단어를 입력받아 그 중 가장 짧은 단어의 길이를 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열 (word1.length <= 20)
// 인자 2 : word2
// string 타입의 문자열 (word2.length <= 20)
// 인자 3 : word3
// string 타입의 문자열 (word3.length <= 20)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 단어들의 길이가 모두 같은 경우, 그 길이를 리턴해야 합니다.


function findMinLengthOfThreeWords(word1, word2, word3) {
    let a=word1.length;
    let b=word2.length;
    let c=word3.length;
    if(a<b && a<c){
      return a;
    }
    else if (b <c && b<a){
      return b;
    }
    else{
      return c;
    }
}
