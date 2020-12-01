// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입을 요소로 갖는 문자열
// 문자열의 길이는 최대 20
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.
// 입출력 예시
// let output = removeExtremes(['a', 'b', 'c', 'def']);
// console.log(output); // --> ['a', 'b']

// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]

// [1,2,3,4]
// [1,2,3]
// 4랑 undefined도 잡아줘야하잖아요 근데 그냥 다른 length로받으면 4까지못가고 끝나버리겠죠
// 그럼 항상 제일긴애까지 진행을해야 다른짧은애들의 undefined를 받아와서 검사를하겠죠
// 안그러면 undefined.length
// 위와 같이 단어의 길이가 다르더라도 for문이 작동할 수 있게 arr.length 와 str 중 가장 긴 for문의 길이를 찾아서 변수에 저장합니다.


function removeExtremes(arr) { //index & filter
    let shortest =20;
    let longest =0;
    let shortestNum = 0;
    let longestNum =0;
    for(let i = 0; i<arr.length; i++){
      if(arr[i].length >= longest) {
        longest = arr[i].length; // 빼고 해보기~
        longestNum = i;
      }
      if(arr[i].length <= shortest){
        shortest = arr[i].length;// 빼고 해보기~
        shortestNum = i; 
      }
    }
    let result = [];
    for(let i = 0; i< arr.length; i++){
      if(i !== shortestNum && i !== longestNum){
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  return result.filter((e, i)) => i!==maxIndex && i !==minIndex

function removeExtremes(arr) {
  let shortestLen = 20;
  let longestLen = 0;
  let shortestIdx = 0;
  let longestIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]);
    }
  }

  return result;
}
  function removeExtremes(arr) {
    let shortest = 0;
    let shortestLen = 20;
    let longest = 0;
    let longestLen =0;
    for(let el of arr){
      if(el.length <= shortestLen){
        shortest = arr.indexOf(el);
        shortestLen = el.length;
      }
      if(el.length >= longestLen){
        longest = arr.indexOf(el);
        longestLen =el.length;
      }
    }
    let result = [];
    for(let i = 0; i < arr.length; i++){
      if(i !== shortest && i !== longest){
        result.push(arr[i]);
      }
    }
    return result;
  }
  // 상단의 코드는 가장 짧은 요소의 인덱스와 가장 긴 요소의 인덱스를 변수에 담아 뒀다가 해당 인덱스의 요소만 제외하고 result 배열에 push 하고 있는데 하단의 코드는 가장 짧은 요소, 그리고 가장 긴 요소와 같은 요소는 전부 제외하고 result 배열에 push하고 있네요
  
  // 파라미터에 전달된 배열을 ['', '', '', '', 'a', 'a', 'a', 'a'] 라고 가정하면
  
  // 스크린샷 2020-11-11 오후 12 23 47
  
  // * 요소를 제외하고 push 되고 있습니다.
  // 네 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없지만
  
  // 가장 짧은 문자끼리 같은 문자가 있을 수 있고 ex) [ 'a' ,'a' ,'a' ] [ '', '', '' ]
  // 가장 긴 문자끼리도 같은 문자가 있을 수 있습니다 ex) ['abcd','abcd','abcd']
  
  // 하단의 코드는 for문에서 설정한 shortest, longest와 같은 문자를 제외하고 result 배열에 넣고 있습니다.
  
  // 파라미터로 들어온 값이 [ '', '', '', '', 'a', 'b', 'c', 'd' ] 라면 shortest의 값은 '' longest의 값은 'd'
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== shortest && arr[i] !== longest) { // ''와 같지 않고 'd'와 같지 않은 요소만 통과
  //     result.push(arr[i]);
  //   }
  // }
  // 그래서 결과는 [ 'a', 'b, 'c' ] 가 나옵니다
  // for of 문은 상관없습니다
  
  // 상단의 코드는 가장 짧은/긴 요소의 '인덱스'만 저장해서
  
  // 가장 짧은/긴 요소의 '인덱스'(위치)와 같은 '인덱스'(위치)의 요소를 제외하고 있고 ( i !== shortestNum && i !== longestNum )
  
  // 하단의 코드는 가장 짧은/긴 요소의 '값'을 저장해서
  
  // 가장 짧은/긴 요소의 '값'과 같은 요소를 제외하고 있습니다. arr[i] !== shortest && arr[i] !== longest
  
  // 인덱스는 요소마다 고유한 인덱스를 가집니다 그렇기에 정확히 해당 인덱스(위치)에 있는 요소만 제외합니다
  
  // 하지만 값은 요소마다 같을 수 있습니다 그렇기에 가장 짧은/긴 값을 할당해둔 변수와 일치하는 모든 요소를 제외합니다