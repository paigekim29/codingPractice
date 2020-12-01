// 문제
// 'Hello HoF!' 리턴하는 함수를 리턴해야 합니다.

// 입력
// 없음
// 출력
// 함수를 리턴해야 합니다.
// 주의 사항
// 리턴하는 함수의 입력값은 없습니다.

function returnFunction() {
    return function(){
      return 'Hello HoF!';
    };
}
function returnFunction() {
return () => 'Hello HoF!'}