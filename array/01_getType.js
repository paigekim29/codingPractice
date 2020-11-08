// 문제
// 임의의 값을 입력받아 타입을 리턴해야 합니다.

// 입력
// 인자 1 : anything
// 임의의 값
// 출력
// string 타입을 리턴해야 합니다.
// ex) 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'
// 주의 사항
// 자바스크립트에서 array, null 타입은 존재하지 않지만, 이 둘을 구분하여 출력합니다.


function getType(anything) {
    if (Array.isArray(anything)){
      return 'array';
    }
    if(anything ===null){
      return 'null';
    }
    return typeof(anything);
}
