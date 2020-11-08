// 문제
// 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.


function computeSumOfAllElements(arr) {
    let result = 0;
    for(let i=0; i < arr.length; i++){
      result +=arr[i];
    }
    return result;
}


function computeSumOfAllElements(arr){
    result =0
    if(arr.length ===0){
      return 0;
    }
    else{
      for(let i=0; i<arr.length; i++){
        result += arr[i];
      }
    }
    return result;
}