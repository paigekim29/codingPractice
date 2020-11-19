function arrSum(arr){
  let result =0;
  for(let i =0; i<arr.length; i++){
    result += arr[i]
  }
  return result;
}

arrSum([10, 3, 6, 2]) = 10 + arrSum([3, 6, 2]);
arrSum([3, 6, 2]) = 3 + arrSum([6, 2]);
arrSum([6, 2]) = 6 + arrSum([2]);
arrSum([2]) = 2 + arrSum([]);
arrSum([]) = 0;

arrSum([]) = 0; // <-- 문제가 더는 작아지지 않는 순간
// 가장 작은 경우의 해결책을 적용한다.
arrSum([2]) = 2 + arrSum([]) = 2;
arrSum([6, 2]) = 6 + arrSum([2]) = 6 + 2 = 8;
arrSum([3, 6, 2]) = 3 + arrSum([6, 2]) = 3 + 8 = 11;
arrSum([10, 3, 6, 2]) = 10 + arrSum([3, 6, 2]) = 10 + 11 = 21;

arrSum(arr)
1. arr이 빈 배열인 경우 = 0
2. 그 외의 경우 = arr[0] + arrSum(arr2)
(arr2는 arr의 첫 요소를 제외한 나머지 배열)

1. 재귀 함수의 입력값과 출력값 정의하기
arrSum: [number] => number

2. 문제를 쪼개고 경우의 수를 나누기
중요한 관점은 순서와 크기
arrSum의 경우 입력값인 배열을 크기에 따라 구분할 수 있습니다
그리고 arrSum([1, 2, 3, 4])를 구하는 방법과 arrSum([2, 3, 4])을 구하는 방법은 동일할 것이므로 이 구분은 적절하다고 판단할 수 있습니다.

arrSum: [number] => number
arrSum([ ])
arrSum([e1, e2, ... , en])


3. 단순한 문제 해결하기
문제를 여러 경우로 구분한 다음에는 쉬운 문제부터 해결합니다. 이를 재귀의 기초(base case)
나중에 재귀 함수 구현 시 재귀의 탈출 조건(재귀 호출이 멈추는 조건)을 구성

arrSum를 더 이상 쪼갤 수 없는 경우는 입력값이 빈 배열일 경우이고, 이 때 arrSum은 0입니다.
arrSum: [number] => number
arrSum([ ]) = 0
arrSum([e1, e2, ... , en])

4. 복잡한 문제 해결하기
arrSum이 길이가 1 이상인 배열을 입력으로 받을 경우, 
맨 앞의 요소를 따로 구하고(배열의 맨 앞의 요소이기 때문에 head라고 이름 붙이겠습니다.), 
나머지 요소를 새로운 입력값으로 갖는 문제를 해결하여 얻은 결과를 head에 더합니다.

arrSum: [number] => number
arrSum([ ]) = 0
arrSum([e1, e2, ... , en]) = e1 + arrSum([e2, ..., en])

배열이 있을 때 head와 나머지 부분(tail)을 구분하는 방법만 안다면, arrSum을 해결할 수 있습니다.

5. 코드 구현하기
function arrSum(arr) {
// 재귀의 기초 (base case)
// 문제를 더 이상 쪼갤 수 없을 경우
if (arr의 길이가 0인 경우) {
    return 0;
}
// recursive Case
// 그렇지 않은 경우
// head: 배열의 첫 요소
// tail: 배열의 첫 요소만 제거된 배열
return head + arrSum(tail);
}
아래는 일반적인 재귀 함수의 템플릿입니다. 재귀 함수 연습에 활용하시기 바랍니다.

function recursive(input1, input2, ...) {
  // 재귀의 기초 (base case)
  if (문제를 더 이상 쪼갤 수 없을 경우) {
    return 단순한 문제의 해답;
  }
  // recursive Case
  // 그렇지 않은 경우
  return 더 작은 문제로 새롭게 정의된 문제
  // 예1. someValue + recursive(input1Changed, input2Changed, ...)
  // 예2. someValue * recursive(input1Changed, input2Changed, ...)
}

재귀: 어떤 함수가 스스로를 호출하는 것
5! = 5*4*3*2*1
5! = 5 * (4!)
5! = 5 * 4* (3!)

function fac(n){
  if(n === 1){
    return 1;
  }
  return n * fac(n-1);  
}


