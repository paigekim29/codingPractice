// 문제
// 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.

function removeArrayValues(obj) {
    for(let property in obj){
      if(Array.isArray(obj[property])){
        delete obj[property];
      }
    }
}