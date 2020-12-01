// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
// 입출력 예시
// let input = [
//   //
//   'hello',
//   'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'

// input = [
//   //
//   'hi',
//   'wolrd',
// ];
// 고정되는 것은 바깥쪽 스코프
// 움직이는 것 은 안쪽 스코프 어차피 undefined여도 계속 배열을 돌아야되는 것이기 때문
output = readVertically(input);
console.log(output); // --> 'hwiolrd'


function readVertically(arr) {
  let maxLength = Math.max(...arr.map(function(v){
    return v.length
  }))

  let result = '';
  for(let i = 0; i < maxLength; i++){
    for(let j = 0; j < arr.length; j++ ){
      if(arr[j][i]){
        result  += arr[j][i]
      }
    }
  }
  return result;
}

function readVertically(arr) {
  //목표: 세로로 읽는다
  //arr = ['hello', 'world, 'mari']
  // str= 'hwm...'
  //'h' -< arr[0][0]
  //'w' <- arr[1][0];
  //'m'<- arr[2][0]
  // 'e' <- arr[0][1];
  // 'o' <- arr[1][1];
  // 'a' <-arr[2][1];
  // ... 'd' <-arr[1][4];
  //4(가장 튼 문자열의 length -1) => 배열 안에 있는 가장 큰 length 구하고
  //변수에 담고
  // u=i의 조건식을  i < 가장 큰 length;
  let longest = 0; //map으로 해서
  for (let el of arr) {
    if (el.length >= longest) {
      longest = el.length;
    }
  }

  let result = '';
  for (let i = 0; i < longest; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        result += arr[j][i];
      }
    }
  }
  return result;
}

function readVertically(arr) {
  let result = '';
  let i = 0;


  while (true) { //무한루프 길이가 다르니깐 넣어줘야 됨
    let isEmpty = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === undefined) {
        continue;
      }
      result += arr[i][j];
      isEmpty = false; //값을 리절트에 더한것은 순회하다가 값을 찾았다 비어있지 않다
    }
    if (isEmpty) {
      break; //세로를 다읽으면 넘겨줘서
    }
    i++;
  }
  return result;
}
