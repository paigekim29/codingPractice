// 문제
// 문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// 빈 문자열을 입력받은 경우에는 false을 리턴해야 합니다.

function hasRepeatedCharacter(str){   
    for (let i=0; i<str.length-1; i++){   //i는 0부터 마지막 전까지 비교
      for(let k=1+i; k<str.length; k++){    //k는 마지막까지 비교하는데 i+1을 해야지만 반복비교를 안함. 예를 들어 i가 2가 됐을 경우 k=1이라면 다시 첫번째꺼랑 비교함으로.
        if(str[i] === str[k]){    // 둘이 같을 경우 
          return true;
        }
      }
    }
    return false;
}
  