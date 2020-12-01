// 문제
// 배열과 임의의 값(discarder)을 입력받아 기존 배열에서 discarder와 일치하는 요소가 제거된 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 인자 2 : discarder
// 원시 자료형(primitive data types)
// 출력
// discarder와 일치하는 요소가 제거된 새로운 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
// 반드시 arr.filter를 이용해서 풀어야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function removeElement(arr, discarder) {
    return arr.filter(function(el){
        if (el !== discarder){
            return true; // true이면 배열에 생성
        }
        return false;   // false이면 배열 생성 안됨
    });
}
function removeElement(arr, discarder) {
    return arr.filter(v=>v!==discarder)
}

// function removeElement(arr, discarder) {
//     // TODO: 여기에 코드를 작성합니다.
//     return arr.reduce(function(acc, cur, index){
//         if(cur !== discarder){
//             return acc.concat([index])
//         } else {
//             return acc;
//         }
//     },[])
// }

//index를 뽑고 싶을 때