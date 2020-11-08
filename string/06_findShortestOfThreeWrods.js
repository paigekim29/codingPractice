// 문제
// 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열 (word1.length <= 10)
// 인자 2 : word2
// string 타입의 문자열 (word2.length <= 10)
// 인자 3 : word3
// string 타입의 문자열 (word3.length <= 10)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.

function findShortestOfThreeWords(word1, word2, word3) {
    if(word1.length <= word2.length && word1.length <= word3.length){
      return word1;
    }
    else if(word2.length<=word1.length && word2.length <= word3.length){
      return word2;
    }
    else if(word3.length<=word1.length && word3.length <= word2.length){
      return word3;
    }
  }
  
function findShortestOfThreeWords(word1, word2, word3){
    let a = word1.length;
    let b = word2.length;
    let c = word3.length;
    if(a <=b && a<=c){
      return word1;
    }
    else if(b<=a && b<=c){
      return word2;
    }
    return word3;
}