/*
insertionSort
문제
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

    입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수
arr.length는 1,000 이하
출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
    배열의 요소는 오름차순으로 정렬되어야 합니다.
    arr[i] <= arr[j] (i < j)
주의사항
삽입 정렬을 구현해야 합니다.
    arr.sort 사용은 금지됩니다.
    입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
    입출력 예시
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
Advanced
insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.*/


const insertionSort = function (arr) {
  for(let i = 1; i < arr.length; i++){
    let key = arr[i]
    let j = i - 1;
    // 1-0 =0
    // 앞의 값을 보도록 설정
    while(j >= 0 && arr[j] > key){
      // 나의 앞에 값이 현재 값보다 클 경우 while문 돌기
      arr[j + 1] = arr[j]
      //0+1=1
      // 나의 위치에 나의 앞을 넣어주고
      j = j -1;
      // 0-1=-1
      // j 값을 또 줄여나가 그 앞까지 다시 확인해주기
    }
    arr[j + 1] = key
    // 이제 나를 나의 앞자리에 두도록 그리고, 다시 while loop~
  }
  return arr
};
// with callback
const insertionSort = function (arr,transform = (item) => item) {
  for(let i = 1; i < arr.length; i++){
    let key = arr[i]
    let j = i - 1;// 1-0 =0
    // 앞의 값을 보도록 설정
    while(j >= 0 && transform(arr[j]) > transform(key)){
      // 나의 앞에 값이 현재 값보다 클 경우 while문 돌기
      arr[j + 1] = arr[j] //0+1=1
      // 나의 뒷 값 위치에 나를 넣어주고
      j = j -1; // 0-1=-1
      // j 값을 줄여줘서 앞의 값에 접근할 수 있도록 하고
    }
    arr[j + 1] = key
    // 작았던 앞의 값을 나의 앞에 넣어주도록
  }
  return arr
};

// naive solution
const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) {
      // 나의 값이 정렬된 마지막 값보 크다면 정렬이 된다는 얘기니깐
      sorted.push(arr[i]);
      // 정렬 된 배열에 넣어주기
    } else {
      for (let j = 0; j < i; j++) {
        if (arr[i] <= sorted[j]) {
          // 나와 정렬된 아이를 비교하고 왼쪽을 나보다 작은 배열 오른쪽을 나보다 큰배열로 나누고, 나의 값을
          // 넣어서 합쳐주기
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};

const insertionSort = function (arr,transform = (item) => item) {
  // 위와 동일하지만, 콜백 인자를 넣어서 나온 값으로 계
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};
console.log(insertionSort([5,3,1,4,6]))