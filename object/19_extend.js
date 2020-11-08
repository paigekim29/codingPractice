// 문제
// 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.

// 입력
// 인자 1 : obj1
// 임의의 속성을 갖는 객체
// 인자 2 : obj2
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 주의 사항
// 추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.
// 두번째 객체는 수정하지 않아야 합니다.

function extend(obj1, obj2) {
    for(i of Object.keys(obj2)) {
      if(Object.keys(obj1).includes(i)){
        continue;
      }
      else {
        obj1[i] = obj2[i];
      }
    }
    return obj1;
  }

  
function extend(obj1, obj2){
    for(let prop in obj2){
      if(!(prop in obj1)){
        obj1[prop] = obj2[prop];
      }
    }
}
  