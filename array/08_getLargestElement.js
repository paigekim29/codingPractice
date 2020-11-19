// 문제
// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입의 정수로 구성된 배열
// 출력
// number 타입을 리턴해야 합니다.

function getLargestElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let maxNum;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        maxNum = arr[j];
      } else {
        maxNum = arr[i];
      }
    }
  }
  return maxNum;
}

function getLargestElement(arr) {
  let maxNum = arr[0];
  for (let el of arr) {
    if (el > maxNum) {
      maxNum = el;
    }
  }
  return maxNum;
}

function getLargestElement(arr) {
  return Math.max(...arr);
}