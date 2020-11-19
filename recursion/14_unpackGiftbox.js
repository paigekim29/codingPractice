// unpackGiftbox
// 문제
// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.
//
//     입력
// 인자 1 : giftBox
// 문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열 (입출력 예시 참고)
// 문자열은 선물 상자에 들어있는 각 선물의 이름을 의미합니다.
//     배열은 더 작은 선물 상자를 의미합니다.
//     인자 2 : wish
// string 타입의 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
//     주의 사항
// 함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용이 가능합니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.
//     입출력 예시
// const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];
//
// let output = unpackGiftbox(giftBox, 'iphone');
// console.log(output); // --> false
//
// output = unpackGiftbox(giftBox, 'postcard');
// console.log(output); // --> true

// 1. 재귀 함수의 입력값과 출렵값 정의하기
// unpackGiftbox: box, wish => boolean
//
// 2. 문제를 쪼개고 경우의 수 나누기
// wish와 같은 선물을 찾는 것
// 문제를 쪼갤 수 업는 경우 => 선물을 못 찾은 경우
// 선물을 찾은 경우
// 문제를 쪼갤 수 없는 경우 => 중첩 배열이 없는 경우, 배열이 아닌 요소를 이루어져있는 경우
// 더 깔 선물 상자가 없는 경우 <<

// [...gift] => for문으로 확인
// [gift, gift, [...gift], gift]
// [gift, gift, [for문으로 확인], gift]
// [for문으로 확인]

// [[...gift], gift, [...gift], gift]
// [[for문으로 확인], gift, [for문으로 확인], gift]
// [for문으로 확인]

//
// 5. 코드 구현하기
function unpackGiftbox(giftBox, wish) {
  let isFound = false;
  for(let i=0; i< giftBox.length; i++){
    if(wish === giftBox[i]){
      return true;
    }
    if(Array.isArray(giftBox[i])){
      isFound = unpackGiftbox(giftBox[i], wish)
      }
    }
  return isFound;
}


function unpackGiftbox(giftBox, wish) {
  for(let i=0; i< giftBox.length; i++){
    if(wish === giftBox[i]){
      return true;
    }
    if(Array.isArray(giftBox[i])){
      if(unpackGiftbox(giftBox[i], wish)){
        return true
      }
    }
  }
  return false;
}

function unpackGiftbox(giftBox, wish) {
  for(let i=0; i< giftBox.length; i++){
    if(wish === giftBox[i]){
      return true;
    }
    if(Array.isArray(giftBox[i])){
      const result = unpackGiftbox(giftBox[i], wish)
      if(result === true){
        return true
      }
    }
  }
  return false;
}

// ['pen', ['chocopie', ['kimchi', [], 'airpods']]]
// ['chocopie', ['kimchi', [], 'airpods']]
// ['kimchi', [], 'airpods']
// []

// 만약에 변수 선언을 안했다면, 빈배열이 for문을 타지 않음으로 return falsefh Rmxskrp ehla
// 그렇게 되면, 배열을 다 못돌기 때문에, 변수 선언과 if문으로 도와줌
// false를 만나게 되더라도, 변수에 할당이기에, if문을 가더라도 패스함

