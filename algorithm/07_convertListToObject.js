// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 배열을 요소로 갖는 배열
// arr[i]는 string 타입을 요소로 갖는 배열
// arr[i]의 길이는 0 또는 2
// 출력
// arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.
// 주의 사항
// 중복되는 키의 경우, 초기의 값을 사용합니다.
// 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// arr[i]의 길이가 0인 경우, 무시합니다.
// 입출력 예시
// const arr = [
//   ['make', 'Ford'],
//   ['model', 'Mustang'],
//   ['year', '1964'],
//   ['make', 'Bill'],
// ];

// let output = convertListToObject(arr);

// console.log(output) // -->
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : '1964'
// }

function convertListToObject(arr) {
    let result = {};
  
    for(let i = 0; i< arr.length; i++){
      if((arr[i].length > 0) && result[arr[i][0]] === undefined) { // 빈배열이 아니고 한번도 안만들어졌을 때
        result[arr[i][0]] = arr[i][1]
      }
    }
    return result;
}
  
function convertListToObject(arr) {
    let result = {};
  
    for(let i = 0; i< arr.length; i++){
      if(arr[i].length === 0) {
        continue;
      }
      if(!result[arr[i][0]]) { // 빈배열이 아니고 한번도 안만들어졌을 때
        result[arr[i][0]] = arr[i][1]
      }
    }
    return result;
}
  
  
function convertListToObject(arr) {
    let result = {};
    for(let element of arr){ // 배열 안에 있는 배열 하나씩을 가져오는 것
      if(element.length === 0) {// 빈배열이면 넘기고
        continue;
      }
      if(!result[element[0]]){ // 각 배열에서의 첫번째 값이 없다면 
      //result[element]만 해주면 전체 배열을 체크하기 떄문에 index 필요
        result[element[0]] = element[1]; // 객체안에 넣어주기
      }
    }
    return result;
}
  
function convertListToObject(arr) {
    if(arr.length === 0){
        return {};
      }
    const obj = {};
  
    for(let i = 0; i< arr.length; i++){
      const key = arr[i][0];
      const value = arr[i][1];
      
      if(typeof obj[key] !== 'undefined' || arr[i].length === 0){
        continue;
      }
  
      obj[key] = value;
    }
    return obj;
}