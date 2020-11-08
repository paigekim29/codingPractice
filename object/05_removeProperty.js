// 문제
// 객체와 키를 입력받아 키가 가르키는 속성(property)을 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.


function removeProperty(obj, property) {
    delete obj[property];
}