// 문제
// 배열을 입력받아 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 가진 배열
// 출력
// 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


function getAllElementsButFirst(arr) {
    return arr.slice(1);
}

function getAllElementsButFirst(arr){
    arr.shift()
    return arr;
}