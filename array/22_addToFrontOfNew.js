// 문제
// 배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 인자 2 : el
// 임의의 값인 요소
// 출력
// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 주의 사항
// 입력받은 배열을 수정하지 않아야 합니다(immutability).


function addToFrontOfNew(arr, el) {
    const result = arr.slice();
    result.unshift(el);
    return result;
}