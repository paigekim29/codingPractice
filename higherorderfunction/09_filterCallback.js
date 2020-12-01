// 문제
// 함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 그 결과가 참인 요소만을 갖는 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : func
// number 타입을 입력받아 boolean 타입을 리턴하는 함수
// 인자 2 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 0 이상의 정수
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// arr.filter 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


function filterCallback(func, arr){
    let result = [];
    for(let el of arr){
        if(func(el)){
            result.push(el);
        }
    }
    return result;
}