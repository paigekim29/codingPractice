// 문제
// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 문장
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 띄어쓰기는 제외합니다.
// 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.


function mostFrequentCharacter(str){
    let countObj = {};
    let mostFrequentChar = "";
    let mostFrequentCharCount = 0;
  
    for(let i=0; i<str.length; i++){
      if(str[i] === ' '){
        continue; // 빈 칸 처리
      }
      if(countObj[str[i]]=== undefined){
        countObj[str[i]] = 0;
      }
      countObj[str[i]] += 1; // 알파벳 등장하는 횟수 기록하고 => obj
      if(countObj[str[i]] > mostFrequentCharCount){ 
        //알파벳이 등장하는 횟수 기록과 가장 많이 등장한 알파벳 기록 비교
        mostFrequentChar =str[i];
        mostFrequentCharCount = countObj[str[i]];
      }// 가장 많이 등장한 알파벳 따로 저장 => mostFrequentChar
    }
    return mostFrequentChar;
}
