// 문제
// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// 'hello'를 secret 3으로 암호화한 경우: 'khoor'
// 'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'
// 입력
// 인자 1 : str
// string 타입의 알파벳 소문자 문자열
// 인자 2 : secret
// number 타입의 암호화 키
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 공백은 그대로 두어야 합니다.
// 입출력 예시
// let output = decryptCaesarCipher('khoor', 3);
// console.log(output); // --> hello

// output = decryptCaesarCipher('zruog', 3);
// console.log(output); // --> world

function decryptCaesarCipher(str, secret){
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let result = ''
    for(let i=0; i<str.length; i++){
      if(str[i]===' '){
        result += ' ';
        continue; //indexOf가 if문 안에 있기 때문에 만약에 빈문자열을 만나면 -1이 되고, 공백 뒤에 어떤 문자가 붙게 됨
      }
      if(alphabet.indexOf(str[i]) !== -1){ //str[i]=0일 때 a이면 falsy이기에 스킵됨
        if(alphabet.indexOf(str[i])-secret >= 0){
            result += alphabet[alphabet.indexOf(str[i])-secret];
            }
            else{
              result += alphabet[26+(alphabet.indexOf(str[i])-secret)];
            }
      }
    }
    return result;
  }

  //아스키코드로!!!!!!
