// 문제
// 시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다.

// 입력
// 인자 1 : hour
// number 타입의 정수 (0 <= hour && hour < 24)
// 인자 2 : minute
// number 타입의 정수 (0 <= minute && minute < 60)
// 인자 3 : second
// number 타입의 정수 (0 <= second && second < 60)
// 출력
// string 타입을 리턴해야 합니다.
// 1초 뒤에 {hour}시 {minute}분 {second}초 입니다 형식으로 리턴해야 합니다.

function addOneSecond(hour, minute, second) {
    hour = Number(hour);
    minute = Number(minute);
    second = Number(second);
    if(second === 59){
      second = 0;
      if (hour ===23 && minute === 59 && second === 59){
        hour =0;
        minute =0;
        second=0;
      }
      else if (minute ===59 && hour ===23){
        minute = 0;
        hour = 0;
      }
      else if(minute === 59){
        minute = 0;
        hour = hour +1;
      }
      else if (0 <= minute && minute < 60) {
        minute = minute +1;
      }
    }
    else if(0 <= second && second < 60) {
      second = second + 1;
    }
    return '1초 뒤에 ' + hour + '시 ' + minute + '분 ' + second + '초 ' + '입니다'
}
  
function addOneSecond(hour, minute, second) {
    if (second === 59) {
      minute ++;
      second = 0;
    } else {
      second ++;
    }
  
    if (minute === 60) {
      hour ++;
      minute = 0;
    }
  
    if (hour === 24) {
      hour = 0;
    }
  
    return '1초 뒤에 ' + hour + '시 ' + minute + '분 ' + second + '초 입니다';
}
  