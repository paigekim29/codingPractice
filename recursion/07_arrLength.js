// arrLength
// 문제
// 배열을 입력받아 그 길이를 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// 임의의 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.
//     arr.length
// 주의 사항
// 함수 arrLength는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     arr.length 사용은 금지됩니다.
//     arr.isEmpty()를 통해 배열이 비어있는지 확인할 수 있습니다.
//     해당 메소드는 표준 자바스크립트 내장 메소드가 아니며, 문제를 위해 새롭게 정의된 커스텀 메소드입니다. 이 문제에서만 사용하시길 바랍니다.
//     [ ].isEmpty() === true
//     [1, 2].isEmpty() === false
// 빈 배열의 길이는 0입니다.
//     입출력 예시
// let output = arrLength([1, -2, 1, 3]);
// console.log(output); // --> 4

[1,2,3,4,5]
    [1]->1
    [1,2]->2
    [1,2,3]->3
    [1,2,3,4]->4
내 앞 갯수 +1

function arrLength(arr) {
  if(arr.isEmpty()){
    return 0
  }
  return arrLength(arr.slice(0,-1)) +1
}

function arrLength(arr) {
  //배열의 요소를 확인해서 있으면 1씩 증가
  const head = 1;
  const tail = arr.slice(1);
  if (arr.isEmpty()) {
    return 0;
  }
  return head + arrLength(tail);
}

function arrLength(arr) {
  if (arr.isEmpty()) {
    return 0;
  }
  // const [head, ...tail] = arr;
  const tail = arr.slice(1);
  return 1 + arrLength(tail);
}

// 1. arr.length: el=> num(길이)
// 2. "배열의 길이를 리턴"
// 문제를 쪼갤 수 없는 경우 => 빈 배열인 경우 => 0
// 길이가 1인 경우 =>우 [el1] => 1 + 빈 배열인 경우(num이 0인 경우)
// 길이가 2인 경우 => [el1, el2] => 1+ 일단 길이가 1인 경우
//
// 3. base case
// 문제를 쪼갤 수 없는 경우 => 빈 배열인 경우
//
// 5. 코드 구현