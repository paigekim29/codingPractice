// 문제
// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
// 입출력 예시
// let output1 = powerOfTwo(16);
// console.log(output1); // true
// let output2 = powerOfTwo(22);
// console.log(output2); // false


function powerOfTwo(num) {
    if(num === 1){ //2의 0승은 1이므로, true이다
      return true;
    }
    let powered =2;
    while(powered < num){
      powered = powered *2;//2부터 계속 2를 곱해서 그 값이 매개변수와 같은지 확인
    }
    return powered === num //같으면 true, 다르면 false
}
  
function powerOfTwo(num) {
    let two =1;
    while(two <num){
      two *=2;
    }
    return two === num;
}
  
function powerOfTwo(num) {
    let result =1;
    while(result < num){
      result = result *2;
    }
    return result === num;
}