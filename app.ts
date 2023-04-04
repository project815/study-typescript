function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function PrintResult(num: number): void {
    //void 와 undefined 차이점.
    //자바스크립트에서는 반환타입이 없어서 이런 상황에 대한 명칭은 없지만
    //타입스크립트는 void타입을 가지고 있다.

  
    console.log(num);
  }
  PrintResult(add(10, 20));
  
  console.log(add(20, 30));
  
  console.log(PrintResult(add(20, 30)));  // return 값이 없는 void 형을 반환하는 함수는 consolo.log -> undefined
  
  let someValue: undefined; //undefined타입이 존재