// 문제
// 배열을 입력받아 마지막 요소를 제외한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 출력
// 마지막 요소를 제외한 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


function getAllElementsButLast(arr) {
    return arr.slice(0, arr.length - 1);
}

function getAllElementsButLast(arr){
    arr.pop();
    return arr;
}