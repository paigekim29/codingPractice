// flattenArr
// 문제
// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// 양의 정수 또는 배열을 요소로 갖는 다차원 배열 (입출력 예시 참고)
// 출력
// 배열을 리턴해야 합니다.
//     주의 사항
// 함수 flattenArr는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용이 가능합니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
//     빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
//     입출력 예시
// let output = flattenArr([[1], 2, [3, 4], 5]);
// console.log(output); // --> [1, 2, 3, 4, 5]
//
// output = flattenArr([[2, [[3]]], 4, [[[5]]]);
// console.log(output); // --> [2, 3, 4, 5]

function flattenArr(arr) {
  //탈출 조건부터 생각 보통 적혀있음 빈배열을 입력받은 경우 빈배열 리턴
  //
  if(arr.length ===0){
    return []
  }
  let result =[]
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      // 어떻게 구현할지는 모르겠지만, 배열을 까주는 기능을 하는 함수를 넣자
      result.push(...flattenArr(arr[i]))
    }
    else{
      result.push(arr[i])
    }
  }
  return result
}

// [[1], 2, [3, 4], 5]
// [] result
// [1]
//flattenArr을 만났을 때, 새로운 배열이 만들어지고 리턴
//최종 배열 Result에 넣을때는 배열로 있으니깐, 배열을 풀어서 넣기!

function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let result2 =[];
  if(arr.length === 0){
    return []
  }
  for(let i = 0; i<arr.length; i++){
    if(!Array.isArray(arr[i])){
      result.push(arr[i]);
    }else{
      result2 = flattenArr(arr[i]); //첫 FOR문으로 돌아가서 RESult2에 들어가게 됨
      for(let j =0; j < result2.length; j++){ //그리고 나서 result2를 For문을 돌게 되고
        result.push(result2[j]); //다시 result에 REsult2에 있는 값을 넣어줌
      }
    }
  }
  return result
}