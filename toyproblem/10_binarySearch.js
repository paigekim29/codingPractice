// binarySearch
// 문제
// 오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수
// 인자 2 : target
// number 타입의 정수
// 출력
// number 타입을 리턴해야 합니다.
//     주의사항
// 이진탐색 알고리즘(O(logN))을 사용해야 합니다.
//     단순한 배열 순회(O(N))로는 통과할 수 없는 테스트 케이스가 존재합니다.
//     target이 없는 경우, -1을 리턴해야 합니다.
//     입출력 예시
// let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
// console.log(output); // --> 2
//
// output = binarySearch([4, 5, 6, 9], 100);
// console.log(output); // --> -1
//
const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  const recursion = function (arr, target, start, end) {
    if(start > end) return -1
    // Base case
    let half = Math.floor((start +end)/2)

    if (arr[half] === target) return half

    if (target > arr[half]) return recursion(arr, target, half + 1, end)
    // If element at mid is smaller than target, search in the right half of mid
    else if (target < arr[half]) return recursion(arr, target, start, half -1)
    // If element at mid is greater than target, search in the left half of mid
  }
  return recursion(arr, target, 0, arr.length -1)
};
// arr은 생략 가능
// half +1 또는 -1은 half를 체크했으니, 그거를 뛰어넘고 재귀를 타게 함

// const binarySearch = function (arr, target) {
//   let left = 0,
//       right = arr.length - 1;
//   while (left <= right) {
//     let middle = parseInt((right + left) / 2);
//     if (arr[middle] === target) {
//       return middle;
//     }
//     if (target < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }
//   return -1;
// };

console.log(binarySearch( [3, 6, 7, 8, 9, 21, 31, 32], 25))


