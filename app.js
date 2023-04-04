function add(n1, n2) {
    return n1 + n2;
}
function PrintResult(num) {
    //void 와 undefined 차이점.
    //자바스크립트에서는 반환타입이 없어서 이런 상황에 대한 명칭은 없지만
    //타입스크립트는 void타입을 가지고 있다.
    //:undefined를 쓰면 에러가 난다 이것은 함수가 undefined를 반환하는 것을 허용하지 않기 때문!
    //:void 반환하는 것이 없다는 것을 의미
    console.log(num);
    // return;
}
PrintResult(add(10, 20));
console.log(add(20, 30));
console.log(PrintResult(add(20, 30))); // return 값이 없는 void 형을 반환하는 함수는 consolo.log -> undefined
var someValue; //undefined타입 유효한 타입으로 존재
///---
var combineValues;
var isdd = true;
combineValues = add;
combineValues = PrintResult;
//combineValues = 4; //함수 타입이라는 것을 명시하지 않으면 런타임 에러 발생.
console.log(combineValues(3, 3));
