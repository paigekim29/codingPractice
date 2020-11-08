// 문제
// 문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 인자 2 : from
// string 타입의 문자 (from.length === 1)
// 인자 3 : to
// string 타입의 문자 (to.length === 1)
// 출력
// string 타입을 리턴해야 합니다.

function replaceAll(str, from, to){
    let result = '';    //빈문자열로 시작
    for(let i=0; i<str.length; i++){    //i는 0부터 str만큼 돌기
      if(str[i]===from){    //str을 하나씩 돌면서, from이 있는 곳을 찾기
        result = result + to    //찾으면, 결과값에 from자리에 to를 넣기
      }
      else{   
        result = result + str[i]    //만약 못찾으면, 결과값에 원래 그값을 넣기
      }
    }
    return result;
}
