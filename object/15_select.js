// 문제
// 배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 인자 2 : obj
// 임의의 속성을 갖는 객체
// 출력
// 객체를 리턴해야 합니다.
// 주의 사항
// 입력받은 객체에 존재하지 않는 키는 무시합니다.
// 입력받은 객체를 수정하지 않아야 합니다.

function select(arr, obj) {
    let arr2={}
    for(i of arr){
      if(obj[i] !== undefined){
        arr2[i] =obj[i];
      }
    }
    return arr2;
  }
  
function select(arr, obj) {
    let newObj = {};
    for (let prop in obj) {
      for (let i = 0; i < arr.length; i++) {
        if (prop === arr[i]) {
          newObj[prop] = obj[prop];
        }
      }
    }
    return newObj;
}