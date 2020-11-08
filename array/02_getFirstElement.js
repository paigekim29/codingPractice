// 문제
// 배열을 입력받아 배열의 첫번째 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열 (arr.length >= 0)
// 출력
// 배열의 요소를 리턴해야 합니다.
// 주의 사항
// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.



function getFirstElement(arr) {
    return arr.shift(); // arr[0]
}

function getFirstElement(arr){
    if(arr.length ===0){
      return undefined;
    }
    else {
      return arr[0];
    }
}