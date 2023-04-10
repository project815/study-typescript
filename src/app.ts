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

printOutput(add(5, 2));

const button = document.querySelector('button');

if(button)
{
    button.addEventListener('click', event =>console.log(event));

    // button.addEventListener('click', () => console.log('asdf'));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(hobbies); //에러

activeHobbies.push(hobbies[0], hobbies[1]);

activeHobbies.push(...hobbies);//전개연산자 스프레드, hobbies에 있는 배열 목록 배열 요소 추출

const person = {
    name : 'max',
    age:30
};

// const copiedPerson = person; // 메모리에 있는 person 객체에 해당하는 포인터를 copiedPerson상수로 복사하는 것.

const copiedPerson = {...person}; // 모든 요소 추출, 키-값추출 포인터뿐만 아니라 원본 객체의 완벽한 복사본도 만들 수 있다.

