function add(n1: number, n2: number) {
    return n1 + n2;
}
  
  function PrintResult(num: number): void {
    //void 와 undefined 차이점.
    //자바스크립트에서는 반환타입이 없어서 이런 상황에 대한 명칭은 없지만
    //타입스크립트는 void타입을 가지고 있다.
    //:undefined를 쓰면 에러가 난다 이것은 함수가 undefined를 반환하는 것을 허용하지 않기 때문!
    //:void 반환하는 것이 없다는 것을 의미
  
    console.log(num);
    // return;
  }

  function addAndHandle(n1:number, n2:number, cb: (num: number)=>void)
  {
      const result = n1+ n2;
      const n23 = cb(result);
    console.log(n23);
  }
  PrintResult(add(10, 20));
  
  console.log(add(20, 30));
  
  console.log(PrintResult(add(20, 30)));  // return 값이 없는 void 형을 반환하는 함수는 consolo.log -> undefined
  
  let someValue: undefined; //undefined타입 유효한 타입으로 존재


  ///---
  let combineValues: (a:number, b:number)=> number;
  let isdd :boolean = true;
  combineValues = add;
  //combineValues = 4; 
  //함수 타입이라는 것을 명시하지 않으면 런타임 에러 발생.
  //combineValues = PrintResult;
  //함수 타입으로 정의 되어있어서 컴파일 상 오류가 발생하지 않는다.
  //그러나 매개변수에 차이가 있어 제대로 작동하지 않음.

  //(a:number, b:number)=> number 함수타입을 정확히 명시하는 것이 좋다.

console.log(combineValues(3, 3));
const n21:number = 23;
addAndHandle(10, 20, (result) => {
    console.log(23);
return "sdaf";});
//콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있음.

let testFunction:(num:number) => void;
let n1 = 23;



// 콜백 함수를 사용하는 것은 비동기적인 작업에서 유용합니다. 
// 예를 들어, 서버에서 데이터를 가져오는 작업은 시간이 오래 걸리므로,
//  해당 작업이 완료될 때까지 기다리는 대신 콜백 함수를 사용하여 데이터가
//   도착했을 때 처리를 할 수 있습니다.
function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });