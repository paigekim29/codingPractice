// 문제
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 객체
// 인자 2 : key
// string 타입의 키
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 마지막 요소가 제거된 배열을 리턴해야 합니다.
// 그 외의 경우, 빈 배열을 리턴해야 합니다.
// 입력받은 객체를 수정하지 않아야 합니다.

function getAllButLastElementOfProperty(obj, key) {
    let result =[];
    if(Array.isArray(obj[key]) && obj[key].length !==0){
      result = obj[key].slice(0, obj[key].length-1);
    }
    return result;
}
  