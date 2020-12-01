// 문제
// 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

// 입력
// 인자 1 : interestRate
// number 타입의 연이율 (%)
// 출력
// number 타입을 리턴해야 합니다.
// 입출력 예시
// let output = computeWhenDouble(7);
// console.log(output); // --> 11

// output = computeWhenDouble(10);
// console.log(output); // --> 8


function computeWhenDouble(interestRate) {
    let rate = interestRate/100 +1;
    let result =1;
    let year =0;
    while(result<2){
      result = result * rate;
      year ++;
    }
    return year;
}
  
  
  
function computeWhenDouble(interestRate){
  // rule of 72
    return Math.ceil(Math.log(2)/Math.log(1+interestRate /100))
}
  
  
function computeWhenDouble(interestRate) {
    let rate = interestRate /100 +1;
    let result =1;
    let year =0;
    while(result <2){
      result = result *rate;
      year ++;
    }
    return year;
}