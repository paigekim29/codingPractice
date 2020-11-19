// drop
// 문제
// 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.
//
//     입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 인자 2 : arr
// 임의의 요소를 갖는 배열
// 출력
// 순차적으로 num 개의 요소가 제거된 배열을 리턴해야 합니다.
//     주의 사항
// 함수 drop은 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     num과 arr.length 중 최대값만큼 제거합니다.
//     입출력 예시
// let output = drop(2, [1, -2, 1, 3]);
// console.log(output); // --> [1, 3]
//
// output = drop(5, [1, -2, 1, 3]);
// console.log(output); // --> [ ]

// fail *
// function drop(num, arr) {
//   //num 이 나온만큼 배열에서 앞의 index만큼을 삭제
//   //슬라이스를 쓰려고 num이 arr.slice(num)
//   //num > arr.length 빈배열 slice 속성
//   //head arr의 인댁스가 num이 될 경우 보류 head 불필요할듯?
//   //[1,2,3,4] (1, [1,2,3,4]) => [2,3,4]
//   // (2, [1,2,3,4]) => [3,4]
//   //return arr.slice(num) 하면 답은 나오지만 재귀가 아님
//   let result =[]
//   let count = 0
//   const tail = arr.slice(count)
//   //num의 크기 만큼 꼬리를 슬라이스해서 반환해야 됨
//   if(num === count){
//     //count가 증감했다는 것은 함수가 재실행되었다는 뜻이므로 같을 때 빠져나오는 탈출문
//     return result
//   }
//   count -=1
//   return result.push(drop(count, arr))
// }

[1,2,3,4]
drop(0)=[1,2,3,4]
drop(1)=[2,3,4] // drop(0).slice(1)
drop(2)=[3,4] //drop(1).slice(1)
drop(3)=[4] //drop(1).slice(2)
drop(4)=[]

function drop(num, arr) {
  if(num===0){
    return arr;
  }
  if(arr.length===0){
    return []
  }
  if(num >arr.length){
    num = arr.length
  }
  return drop(num-1, arr).slice(1)
}

function drop(num, arr) {
  // arr = [1,2,3,4,5]
  // num = 2
  // 1번쨰 -> [2,3,4,5]
  // 2번쨰 -> [3,4,5]
  // result = [3,4,5]
  if(num === 0 || arr.length === 0){
    return arr
  }
  const tail = arr.slice(1)
  return drop(num-1, tail)
}
function drop(num, arr) {
  if(num === 0 || arr.length === 0){
    return arr;
  }
  return drop(num -1, arr.slice(1))
}

function drop(num, arr) {
// 1. arrProduct : num, arr => arr
// 2. num개의 요소가 제거된 새로운 배열
// 문제를 쪼갤 수 없는 경우: 빈 배열일 때? =1
  tail = arr.slice(1)
  if(arr.length === 0){
    return []
  }
  if(num ===1){
    return tail
  }
  return drop(num-1, tail)
}

//Tail은 배열에서 첫 값을 뺀 배열이고 drop을 돌면서 하나씩 빠지게 됨. 그리고 결국 num이 1일 될때
// Tail을 리턴하면 가능