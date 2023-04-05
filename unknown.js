"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
//Known타입은 다른 타입에 할당하기 위해서는 타입체킹이 필요하다.
//any를 사용하면 타입체킹 없이 어디든 할당된다.
function generateError(message, code) {
    //에러객체를 생성하여 넘기는 유틸리티 함수.
    //자바스크립트와 마찬가지로 객체를 throw로 넘길 수 잇음.
    throw { message: message, errorCode: code };
}
const result = generateError("An Error occurred!", 500);
console.log(result);
//해당 함수는 리턴이 없고 넘어간(throw)에러가 스크립트와 충돌함으로 스크립트가 멈춤.
console.log("Test");
