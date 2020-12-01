var firstNum, operator, previousKey, previousNum;
// 위의 전역변수를 잘 활용하여, 계산기를 구현합니다.

const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const display = document.querySelector('.calculator__display'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// ! 위 코드(Line 1 - 6)는 수정하지 마세요.

function calculate(n1, operator, n2) {
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  n1= parseFloat(n1); // 소수점까지 다 보여주기위해서 parseFloat 사용
  n2= parseFloat(n2);
  let result = 0;
  if(operator ==='+'){
    result = n1 +n2;
  }
  else if(operator ==='-'){
    result = n1 - n2;
  }
  else if(operator ==='*'){
    result = n1 *n2;
  }
  else if(operator ==='/'){
    result = n1 / n2;
  }
  return result;
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  console.log(target);
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  console.log(target.classList);
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  const buttonContainerArray = buttons.children; // 버튼 안에 애들을 이용해야 할 때를 위해 선언
                                                //.clear__and__clear와 .button__row를 가르킴
  
  if (target.matches('button')) {
    for(let i=0; i<buttonContainerArray.length; i++){
      const childrenArray = buttonContainerArray[i].children //밑에 있는 숫자들과 오퍼레이터들을 가르킴
      for(let j=0; j<childrenArray.length; j++){
        childrenArray[j].classList.remove('isPressed');
      }
    }
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      if(display.textContent === '0' || previousKey === 'operator' || previousKey ==='calculate'){
        display.textContent = buttonContent;
      }
      else{
        display.textContent += buttonContent;
      }
      previousKey = 'number';
      console.log('숫자 ' + buttonContent + ' 버튼');

    }

    if (action === 'operator') {
      target.classList.add("isPressed") //클래스 리스트 추가
      if(firstNum && operator && previousKey !== 'operator' && previousKey !=='calculate') {
        display.textContent = calculate(firstNum, operator, display.textContent);
      } // 1+2+3+4+5 같은 계산 진행할 때 중간 중간 오퍼레어터를 누르면 계산된 값이 화면에 출력하는 기능!!!
      firstNum= display.textContent;
      operator = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
      previousKey = 'operator';
    }

    if (action === 'decimal') {
      if(!display.textContent.includes('.') && previousKey !== 'operator') {
        display.textContent += '.'; //만약에 소수점이 없고 operator을 누른 상태가 아니면 소수점 추가
      }else if(previousKey ==='operator'){ //operator을 누리고 난 직후에 숫자를 누르기 전에
                                          //소수점을 누르는 경우도 있으니, 0.을 보이게 하는 역할
        display.textContent = '0.'
      }
      console.log('소수점 버튼');
      previousKey = 'decimal';
    }

    if (action === 'clear') {
      firstNum = undefined;
      operator = undefined;
      display.textContent = '0';
      previousKey = 'clear';
    }
    
    if (action === 'calculate') {
      if(firstNum){
        if(previousKey ==='calculate'){
          display.textContent = calculate(display.textContent, operator, previousNum);
        } // 엔터 버튼을 계속 눌러도 계산 될 수 있게 하는 것
        else{ //일반적으로 계산할 때는 여기로 넘어오게 되어서 firstNum은 operator에서 지정해주고
              //여기서는 화면에 있는 값을 previousNum에 넣어줌
              //그리고 엔터를 또 눌렀을 때, if문으로 돌아가서 화면에 있는 값과 기존에 있던 operator을
              //사용하여, previousNum과 함께 계산을 완료 시킴
          previousNum = display.textContent;
          display.textContent = calculate(firstNum, operator, display.textContent);
        }
      }
      previousKey = 'calculate';
    }
  }
});