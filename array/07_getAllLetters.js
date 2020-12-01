// 문제
// 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 문자열
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// str.split 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


function getAllLetters(str) {
    let arr =[];
    for (let i =0; i<str.length; i++){
      arr.push(str[i])
    }
    return arr;
}
