// 문제
// 객체를 입력받아 객체가 가진 age 속성값이 합법적으로 투표할 수 있는 나이(18세 이상)인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : person
// age 속성을 갖는 객체
// 출력
// boolean 타입을 리턴해야 합니다.


function isPersonOldEnoughToVote(person) {
    if (person['age'] >= 18){
      return true;
    }
    return false;
}
