// 문제
// 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 0 이상 9 이하의 정수
// 배열의 길이는 8 또는 11
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
// 배열의 길이가 8인 경우, 앞에 [0, 1, 0]이 있다고 가정합니다.

function createPhoneNumber(arr) {
    let result;
    if(arr.length === 8){
      let firstNum = arr.slice(0,4).join("");
      let lastNum = arr.slice(4).join("");
      result =`(010)${firstNum}-${lastNum}`;
    }else{
      let firstNum = arr.slice(0,3).join("");
      let secondNum = arr.slice(3,7).join("");
      let lastNum = arr.slice(7).join("");
      result =`(${firstNum})${secondNum}-${lastNum}`
    }
    return result;
}

function createPhoneNumber(arr) {
    let head = '(010)';
    const len = arr.length;
    const body = arr.slice(len - 8, len - 4).join('');
    const tail = arr.slice(len - 4, len).join('');
  
    if (len === 11) {
      head = `(${arr.slice(0, 3).join('')})`;
    }
  
    return `${head}${body}-${tail}`;
}