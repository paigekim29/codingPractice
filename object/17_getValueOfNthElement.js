// 문제
// 배열과 수를 입력받아 수가 가르키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 객체를 요소로 갖는 배열
// 인자 2 : num
// number 타입의 정수 (num >= 0)
// 출력
// 해당되는 객체의 'name' 속성값을 리턴해야 합니다.
// 주의 사항
// 빈 배열을 입력받은 경우, 'no name'을 리턴해야 합니다.
// 배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴해야 합니다.
  
function getValueOfNthElement(arr, num){
    if(arr.length === 0){
      return 'no name';
    }
    else if(num > arr.length-1){
      return arr[arr.length-1].name;
    }
    else{
      return arr[num].name;
    }
}
