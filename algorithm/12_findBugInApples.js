// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 배열을 요소로 갖는 배열
// arr[i]는 'A' 또는 'B'만을 요소로 갖는 배열
// 출력
// 'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 차례대로 행, 열입니다. ([행, 열])
// 행: 'B'를 요소로 갖는 배열 arr[i]의 인덱스 i
// 열: arr[i]에서 'B'(arr[i][j])의 인덱스 j
// 주의 사항
// arr, arr[i]의 길이는 다양하게 주어집니다.
// 항상 한 개의 문자열 'B'가 존재합니다.
// 입출력 예시
// let output = findBugInApples([['A'], ['B']]);
// console.log(output); //[1, 0]

// output = findBugInApples([
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'B', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
// ]);

console.log(output); //[1, 1]
function findBugInApples(arr) {
    let yPosition = 0;
    let xPosition = 0;
    let result =[];
    for(let el of arr){
      for(let i = 0; i < el.length; i++){
        if(el[i] === 'B'){
          yPosition = i;
          xPosition = arr.indexOf(el);
          result.push(xPosition, yPosition);
        }
      }
    }
    return result;
  }
  
  
  function findBugInApples(arr){
    //['A', 'A', 'A']
    //
    //A=> 0 0 //i 가 안바뀌고 바깥 for 문; 뒤에 있는 값이 바뀌니깐 두번째 라인을 j로
    //A => 0 1
    //A => 0 2
    for(let i = 0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
        if(arr[i][j] === 'B'){
          return [i, j];
        }
      }
    }
  }