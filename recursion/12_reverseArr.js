// reverseArr
// 문제
// 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 출력
// 순서가 뒤집힌 배열을 리턴해야 합니다.
//     [arr[n-1], arr[n-2], ... , arr[0]] (n === arr.length)
// 주의 사항
// 함수 reverseArr는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     빈 배열은 빈 배열 그대로를 리턴해야 합니다.
//     입출력 예시
// let output = reverseArr([1, 2, 3]);
// console.log(output); // --> [3, 2, 1]

// [] []
// [3] [1,2,3] arr[3]
// [3,2] [1,2,3] arr[2]
// [3,2,1] [1,2,3] arr[1]
//
// function reverseArr(arr, count=0) {
//   if(count === arr.length){
//     return []
//   }
//   return [...reverseArr(arr, count+1), arr[count]]
// }
//
// [] []
// [3] [1,2,3] arr[0]
// [3,2] [1,2,3] arr[0]
// [3,2,1] [1,2,3] arr[0]
// 앞에꺼를 하나씩 빼서 arr[0]으로 만든다
// function reverseArr(arr) {
//   if(arr.length===0){
//     return []
//   }
//   return [...reverseArr(arr.slice(1)), arr[0]]
// }


function reverseArr(arr) {
  if(arr.length === 0){
    return []
  }
  const head=  arr[0]
  const tail = arr.slice(1)


  return reverseArr(tail).concat([head])
}
//[1,2,3]일 때 3이 Head이고 제일 바닥을 칠테니깐, [3][2][1] 이 상태로 나오게 됨

let output= reverseArr([1,2,3])
console.log(output)

// function reverseArr(arr){
//   const head = arr.slice(-1)
//   const tail = arr.slice(0,-1)
//
//   if(arr.length === 0){
//     return []
//   }
//   return head.concat(reverseArr(tail))
// }
//
// function reverseArr(arr) {
//   const head=  arr.slice(-1)
//   const tail = arr.slice(0, arr.length-1)
//   if(arr.length === 0){
//     return []
//   }
//   return head.concat(reverseArr(tail))
// }