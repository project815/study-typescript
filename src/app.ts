const userName = 'Max';

console.log(userName);    
// userName = 'Maxs'; //상수는 새로운 값 할당이 불가능.

let age = 30;

age = 29;
// var result;
let result;
// var result;

// function add(a:number, b:number)
// {
//     result = a+b;
//     return result;
// }

// console.log(result);


// if(age > 20)
// {
//     var isOld = true;
// }

// console.log('isOld :' + isOld);
//var는 더이상 사용하지 않는 것이 좋다.
//const, let과 var의 가장 큰 차이점은 스코프!
//자바스크립트에서는 var는 전역유효범위와 함수유효범위가 어느 위치에 있든 유효하다.
//let은 블럭 위치에 따라 유효범위가 상이하다.

const add = (a:number, b:number) => a+b;

const printOutput: (a:number|string) =>void = output => console.log(output);

const button = document.querySelector('button');

if(button)
{
    button.addEventListener('click', event =>console.log(event));
}

printOutput(add(5, 2));