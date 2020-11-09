// 문제
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 대소 비교는 number 타입에만 적용합니다.
// 주어진 키에 해당하는 값이 배열이고, 100 미만인 요소가 있는 경우에만 해당 요소를 갖는 배열을 리턴해야 합니다.
// 그 외의 경우, 빈 배열을 리턴해야 합니다.
// 주어진 보조 함수(lessThan100)를 사용해야 합니다.

function lessThan100(number) {
    // solution 1
    return number < 100;
  
    // solution 2
    // return typeof number === 'number' && number < 100;
  }
  
function getElementsLessThan100AtProperty(obj, property) {
    const maybeArr = obj[property];
    if (Array.isArray(maybeArr)) {
      // solution 1
      return maybeArr.filter(function (el) {
        return typeof el === 'number' && lessThan100(el);
      });
  
      // solution 2
      // return maybeArr.filter(lessThan100);
    }
  
    return [];
}

//

function lessThan100(number) {
  return number < 100 && typeof number === 'number';
}

function getElementsLessThan100AtProperty(obj, property) {
  const arr = obj[property];
  if(Array.isArray(arr)){
    return arr.filter(lessThan100);
  }
  else{
    return [];
  }
}
