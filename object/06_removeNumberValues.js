// 문제
// 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.


function removeNumberValues(obj) {
    for (var property in obj){
      if(typeof obj[property] === 'number'){
        delete obj[property];
      }
    }
}
