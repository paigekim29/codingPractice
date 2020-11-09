// 문제
// 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.

// 입력
// 인자 1 : func1
// number 타입을 입력받아 number 타입을 리턴하는 함수
// 인자 2 : func2
// number 타입을 입력받아 number 타입을 리턴하는 함수
// 인자 N : funcN
// number 타입을 입력받아 임의의 타입을 리턴하는 함수
// 출력
// 함수를 리턴해야 합니다.
// 리턴되는 함수는 정수를 입력받아 func1, func2, ..., funcN의 순으로 적용합니다.
// 주의 사항
// 입력되는 함수들의 수는 1개 이상이라고 가정합니다.
// 함수가 아닌 입력은 존재하지 않는다고 가정합니다.
// 입력받은 함수들이 어떤 일을 하는지는 중요하지 않습니다.


function pipe(...funcs){
    return function(num){
        let result = num;
        for(let i = 0 ; i<funcs.length; i++){
            result = funcs[i](result); // result becomes parameter when funcs[i] happens
        }
        return result;
    }
}

  
  //add5(4) => square(add(4))=>(그것의 결과를 리턴해라) 라고 할 수 있는 함수를 리턴해라
  
function pipe(...funcs) { //n개 이기에 rest parameter를 써야함
    return function(num){
      let result =num;
      for(const func of funcs){
        result = func(result);
      }
      return result;
    }
}