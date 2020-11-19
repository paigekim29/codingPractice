// findMatryoshka
// 문제
// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.
//
//     입력
// 인자 1 : matryoshka
// 'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
// matryoshka.matryoshka는 null 또는 matryoshka 객체
// matryoshka.size는 중첩될수록 작아집니다.
//     인자 2 : size
// number 타입의 수
// 출력
// boolean 타입을 리턴해야 합니다.
//     주의 사항
// 함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
//     반복문(for, while) 사용은 금지됩니다.
//     입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     빈 객체를 입력받은 경우, false를 리턴해야 합니다.
//     입출력 예시
// const matryoshka = {
//   size: 10,
//   matryoshka: {
//     size: 9,
//     matryoshka: null,
//   },
// };
//
// let output = findMatryoshka(matryoshka, 10);
// console.log(output); // --> true
//
// output = findMatryoshka(matryoshka, 8);
// console.log(output); // --> false

// 1. 재귀 함수의 입력값과 출렵값 정의하기
// findMatryoshka: {}, size => boolean
//
// 2. 문제를 쪼개고 경우의 수 나누기
// "Matryoshka, size ? true : false"
// 문제를 쪼갤 수 없는 경우 => Matryoshka.Matryoshka === num
// Matryoshka.size === size
//
// 3. base case
// 문제를 쪼갤 수 없는 경우 => 빈 배열인 경우 Matryoshka.Matryoshka === num
//Matryoshka.size === size

// 4. 복잡한 문제 해결하기
// num이 n인 경우 = num이 n-1 인 경우
//
// 5. 코드 구현하기
// base case
//없는경우


function findMatryoshka(matryoshka, size) {
 if(matryoshka=== undefined || matryoshka=== null)
 //(!matryoshka)로 줄일 수 있음 둘다 falsy이기에
 {return false
 }
 if(matryoshka.size=== size){
   return true
 }
 return findMatryoshka(matryoshka.matryoshka, size)
}


//있는 경우
function findMatryoshka(matryoshka, size) {
  // matryoshka.size === size true
  // matryoshka.matryoshka안으로 계속 들어가서 null이 나올 때까지 size가 같은 지 확인
  // recursive case
  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }

  // base case
  return false;
}

function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  if (!matryoshka) return false;
  for (const key of Object.keys(matryoshka)) {
    if (typeof matryoshka[key] === 'object') {
      findMatryoshka(matryoshka[key], size);
    }
    else {
      console.log(`${key} is ${matryoshka[key]}`);
    }
  }
}
const matryoshka = {
  size: 10,
  matryoshka1: {
    size: 9,
    matryoshka2: null,
  },
  matryoshka2: {
    size: 8,
    matryoshka3: {
      size: 7,
      matryoshka4: null,
    },
    matryoshka4: {
      size: 7,
      matryoshka5: null,
    },
  },
};
findMatryoshka(matryoshka, 99);






