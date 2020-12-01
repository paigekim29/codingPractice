// 문제
// 문자열과 수를 입력받아 반복된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 인자 2 : num
// number 타입의 정수 (num >= 0)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 0을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function repeatString(str, num) {
    let result = ''; //result는 빈문자열이다
    if (str === '') { //만약에 str이 빈문자열이라면
      return '';      //빈문자열을 리턴해라
    }
    for(let i=1; i<=num; i++){ //i는 num까지 계속 곱해주는 값이고
      result = result + str; //결과값은 str이 i가 늘어날때마다 하나씩 더 추가해주는 식
    }
    return result;
}