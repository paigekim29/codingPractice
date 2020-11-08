// 문제
// 배열과 인덱스를 입력받아 주어진 인덱스 이전의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 인자 2 : n
// number 타입의 인덱스 (0 이상의 정수)
// 출력
// n번 인덱스 이전의 새로운 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 배열의 길이를 넘는 인덱스를 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getElementsUpTo(arr, n) {
    if (n> arr.length){
      return [];
    }
    else{
    return arr.slice(0, n);
    }
}