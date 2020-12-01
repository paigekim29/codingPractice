CLOSURE = 외부 함수의 변수에 접근할 수 있는 내부 함수!!!!!!!
// closure has to access variable outside its scope.
// cannot access variable inside closure from outside
// will not disappear

1. 
let x = 30;
function get () {
  return x; // no parameter
}

let result = get(20);
answer: 30

2. 
let x = 30;
function get (x) {
    // let x=x; //x =20;
    return x; 
}

let result = get(20);
answer: 20

3.
let x =30;
function get () { // no parameter, look for global variable. check scope one by one outside
    return x;
}
function set(value){
    let x= value;
}

set(10);
let result = get(20);
answer: 30;


4.
let x = 30; // change to 10 when set(10)
function get () { 
    return x; // no parameter, return global variable 10
}
function set (value) { 
    x = value; 
}

set(10);
let result = get(20);
answer:10; 

5.
let x =30;  // change to 10 when set(10)
function get (x) { // x =20
    //let x= x (if there is a parameter)
    return x;   // return 20
}
function set(value){
    x= value;
}

set(10); // x=10
let result = get(20);
answer: 20;

6. 
let x =10;
function add(y){
    //let y=5;
    return x+y; // x=10 from global varialbe 10 +5 =15
}
function strangeAdd(x){
    //let x=5 since parameter exists
    return add(x) + add(x);  //add(5) +add(5) => 15 +15=30
}

let result = strangeAdd(5)
answer: 30;

7. 
let x=10;
function outer(){
    // x=10 from global variable
    let x=20;
    // x=20; reference from inner scope
    function inner(){
        return x;   // reference from outer scope x=20. 
        //if you put let x and outer() will be undefined
        //since inner does not have parameter
    }
    return inner(); // return x=20
}

let result = outer();
answer: 20


8. 
let x=10;

function outer() {
    // current reference is global variable x=10
    let x=20; 
    //  x=20;
    // change to 30
    function inner(){
        // have to get from outside scope since no x inside
        x= x+10; // 20+10=30;
        return x;
    }
    inner(); // no return so function outer() will not affect the result
}

outer();
let result = x;
answer :10;

9. 
let x=10; // change into 20
function outer() {
    x=20;
    function inner(){
        let x; // undefined but assigned
        x=x+20; // undefined + 20 =NaN; undefined+'123' 해보기!!
        return x; // return NaN;
    }
    inner(); // no return, ignore
}

outer();
let result=x;
answer: 20;

10. 
let x=10; // change to 20
function outer() {
    x=20;
    function inner(){
        x = x+20; // 20+20 =40
    }
    inner();
}

outer();
let result =x;//그냥 선언이 없이 계속 전역변수를 바꾸기 때문에 40이 됨
answer: 40;

11. 
// Which function counts as closure?
let seenYet = function(){
    let archive = {};
    return function(val){ // function(val) is returning archive variable
        if (archive[val]){
            return true;
        }
        archive[val] = true;
        return false;
    }
}
answer: function(val){};

12. 
let add=  function(x) {
    // let x=1;
    let sum = function(y) {
        return x+y; // 1+y
    }
    return sum;
}

let foo = add(1);
foo(3); // foo is function(y){} 1+3=4
let total = foo(6) // 1+6=7;


13.
A.
let multiplyByX = function(x) {
    return function(y) {
      return x * y;  // x is coming from outer function argument
    } 
  } 
  let multiplyBy5;
  multiplyBy5 = multiplyByX(5);
  multiplyBy5(4);

OR

B.
let multiplyByFive = function() { //no variable and no parameter
return function(y) {  // nothing else to reach out except its own parameter
    return 5 * y;  
}  
}   
let multiplyBy5  
multiplyBy5 = multiplyByFive(); 
multiplyBy5(4);

answer: A