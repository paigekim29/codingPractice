// 문제
// 두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당해야 합니다.

// 입력
// 인자 1 : obj1
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 인자 3 : obj2
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.


function addObjectProperty(obj1, property, obj2) {
    obj1[property] =obj2
}