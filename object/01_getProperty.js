// 문제
// 객체와 키를 입력받아 키에 해당하는 값을 리턴해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 출력
// 입력받은 키에 속한 값을 리턴해야 합니다.
// 주의 사항
// 키에 해당하는 값이 없을 경우, undefined를 리턴해야 합니다.

function getProperty(obj, property){
    return obj[property]
}