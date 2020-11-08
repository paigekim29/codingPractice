// 문제
// 시간, 분, 초를 입력받아 현재 시각을 나타내는 메세지를 리턴해야 합니다.

// 입력
// 인자 1 : hour
// number 타입의 시간 (1 이상 12 이하의 정수)
// 인자 2 : min
// number 타입의 분 (0 이상 59 이하의 정수)
// 인자 3 : sec
// number 타입의 초 (0 이상 59 이하의 정수)
// 출력
// string 타입을 리턴해야 합니다.

function showTime(hour, min, sec) {
    return `현재 시각은 ${hour}시 ${min}분 ${sec}초 입니다.`
}
  