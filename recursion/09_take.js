// take
// 문제
// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
//
//     입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 인자 2 : arr
// 임의의 요소를 갖는 배열
// 출력
// 순차적으로 num 개의 요소로 구성된 배열을 리턴해야 합니다.
//     주의 사항
// 함수 take는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     num과 arr.length 중 최대값만큼 저장합니다.
//     입출력 예시
// let output = take(2, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2]
//
// output = take(5, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2, 1, 3]


function take(num, arr) {
  if(num ===0 || arr.length ===0){
    return []
  }
  const head= arr[0]
  const tail=arr.slice(1)
  return[head, ...take(num-1, tail)]
}

// [1,2,3,4,5]
// take(4)=[1,2,3,4] //[...take(3),arr[num-1]]
// take(3)=[1,2,3] //[...take(2),arr[num-1]]
// take(2)=[1,2] ////[...take(1),arr[num-1]]
// take(1)=[1]
// take(0)=[]
function take(num, arr) {
  if(num===0 ||arr.length===0){
    return []
  }
  if(num>arr.length){
    num = arr.length
  }
  return[...take(num-1,arr),arr[num-1]]
}

// 1. 재귀 함수의 입력값과 출렵값 정의하기
// take: num, [el] => 새로운 배열 [el] (num개의 요소)
//
// 2. 문제를 쪼개고 경우의 수 나누기
// "num개의 요소만 포함 된 새로운 배열"
// 문제를 쪼갤 수 없는 경우 => arr.length === num
//
// 3. base case
// 문제를 쪼갤 수 없는 경우 => 빈 배열인 경우
//
// 4. 복잡한 문제 해결하기
// num이 n인 경우 = num이 n-1 인 경우
//
// 5. 코드 구현하기
function take(num, arr) {
  if (num >= arr.length) {
    return arr;
  }
  return take(num, arr.slice(0, arr.length - 1));
}


function take(num, arr) {
  if (num === 0 || arr.length === 0) {
    return [];
  }// Num을 1씩 감소시켜서
  const head = arr[0]; //head로 배열의 제일 첫번째로 설정
  const tail = arr.slice(1);
  //tail은 헤드를 제외하고 남은 배열 -> 그리고 num에서 1을 감소시키면
  // head는 남은 배열을 첫번째 요소 즉 배열의 두번째 요소까지 헤드가 됨
  // 그리고 다시 함수 실행하는데 num이 0이면 빈 배열이 반환되고 그 빈 배열을 헤드와 더해서
  // 리턴시킴
  return [head].concat(take(num - 1, tail));
}

// take (2,[1,2,3,4])
// head [1]
// tail [2,3,4]
// [1] + [2,3,4]
// num-1 -> num =1
// head [2]
// tail [3,4]
// [1,2] + [3,4]
// num-1 -> num =0
// return []
// [1,2] +[] => [1,2]

