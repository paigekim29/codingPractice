// 문제
// 배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 인자 2 : index
// number 타입의 index (0 이상의 정수)
// 출력
// 배열의 요소를 리턴해야 합니다.
// 주의 사항
// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.
// 배열의 길이를 벗어나는 수를 입력받은 경우, 'out of index range'를 리턴해야 합니다.


function getNthElement(arr, index) {
    if(arr[0] === undefined){
      return undefined;
    }
    else if(arr.length -1 < index) {
      return 'out of index range';
    }
    else{
      return arr[index]
    }
}
  
function getNthElement(arr, index) {
    if(arr.length ===0){
      return undefined;
    }
    else if (index>arr.length-1){
      return 'out of index range'
    }
    else{
      return arr[index]
    }
}
  