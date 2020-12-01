// 문제
// 두 개의 배열을 입력받아 순서대로 합쳐진 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr1
// 임의의 요소를 갖는 배열
// 인자 2 : arr2
// 임의의 요소를 갖는 배열
// 출력
// 두 배열이 합쳐진 새로운 배열을 리턴해야 합니다.
// [arr1[0], ..., arr1[n], arr2[0], ..., arr2[m]] (n === arr1.length - 1, m === arr2.length - 1)
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.


function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
  