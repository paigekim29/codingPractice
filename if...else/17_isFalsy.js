// 문제
// 임의의 값을 입력받아 falsy 값인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : anything
// 임의의 값
// 출력
// boolean 타입을 리턴해야 합니다.

function isFalsy(anything){
    if (anything===0){
        return true;
    } else if (Number.isNaN(anything)){
        return true;
    } else if (anything === undefined) {
        return true;
    } else if (anything === ""){
        return true;
    }
    else {
        return false;
    }
}

function isFalsy(anything){
    if(anything===''){
        return true;
    }
    else if (anything ===0){
        return true;
    }
    else if (anything===false){
        return true;
    }
    else if(Number.isNaN(anything)){
        return true;
    }
    return false;
}