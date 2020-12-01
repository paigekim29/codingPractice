// 문제
// 삼각형의 세 변을 입력받아 직각삼각형(pythagorean)인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : side1
// number 타입의 삼각형 한 변 (1 이상의 정수)
// 인자 1 : side2
// number 타입의 삼각형 한 변 (1 이상의 정수)
// 인자 1 : side3
// number 타입의 삼각형 한 변 (1 이상의 정수)
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 삼각형의 각 세 변은 무작위로 입력됩니다.
// 자바스크립트에서 x의 제곱(x squared)을 구하는 방법은 3가지 입니다. 세 가지 방법을 모두 사용해야 합니다.
// arr.sort 사용은 금지됩니다.
// 제곱을 구할 때는 입력으로 주어지는 변수를 그대로 사용해야 합니다.

function isPythagorean(side1, side2, side3) {
    side1 = Number(side1);
    side2 = Number(side2);
    side3 = Number(side3);
    if (side1 > side2 && side1 > side3 ){
      if (Math.pow(side1, 2) === Math.pow(side2, 2) + Math.pow(side3, 2)) {
        return true;
      }
      return false;
    }
    else if (side2> side1 && side2 > side3) {
      if (side2*side2 === side1*side1 + side3*side3) {
        return true;
      }
      return false;
    }
    else if (side3 > side1 && side3 > side2){
      if (side3**2 === side1**2 + side2**2){
        return true;
      }
      return false;
    }
}
  
function isPythagorean(side1, side2, side3){
    const pow1= side1 ** 2;
    const pow2 = side2 * side2;
    const pow3=Math.pow(side3, 2);
    if(pow1===pow2+pow3 || pow2=== pow1+pow3|| pow3 ===pow1+pow2){
      return true;
    }
    return false;
}