function conbine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    //+유니온 타입
    //실제론 숫자, 문자 타입을 + 연산이 가능하지만 
    //타입스크립트에서 여러 타입을 사용한다는 것은 유니온 타입으로 묶어 여러 타입 중 +연산이 안될 가능서을 염두한다.
    //따라서 런타임 검사가 필요하다.

    //+리터릴 타입
    //resultConversion: 'as-number' | 'as-text')
    //enum을 고려할 만큼 많은 양이 아니라면 리터럴 타입을 사용하는 것도 좋다.
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion == "as-number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString(); //
    }

    return result;
    // if (typeof input1 === "string") // 조건문에서 타입 조건에 따라 result의 값이 달라진다.
    // {
    //     result = input1;
    // }
    // return result;
}

const conbinedAges = conbine(30, 20, 'as-number');
const conbinedNames = conbine("Max", "Anna", 'as-text');
console.log(conbinedAges);
console.log(conbinedNames);

const conbinedStringAges = conbine("30", "26", 'as-number');
console.log(conbinedStringAges);


//------------------------
//TypeAlias
type Combiable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function typeAlias(input1: Combiable, input2: Combiable, type: ConversionDescriptor) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }

    if (type === 'as-number') {
        return "asnumber";
    }
    return result;
}

console.log(typeAlias(1, 3, 'as-text'));

type User = { name: string, age: number, height: number }
type Maker = { name: string } | { age: number } | { height: number }

const user: User = { name: 'song', age: 14, height: 145 };
const maker: Maker = { name: 'akakak', age: 19, height: 190 };

// const user2: User = {name: 'sdfas', age:123, height:12312, isListed:true};

type Test = { name: string, age: number, height: number } | string | number; //유니온 타입

let user4: Test = { name: 'song', age: 123, height: 123 };
console.log(user4);
user4 = '"Maiesr';
console.log(user4);
user4 = 4;
console.log(user4);
user4 = { name: 'Max', age: 123, height: 12 };
console.log(user4);

console.log(user.name);
console.log(user);
console.log(maker);
// function conbine2(input1: string | number, input2: string | number, type: 'number') {
//     let result;
//     if (type === 'number') {
//         return 'nnierw';
//     }

//     if (typeof input1 === "number" && typeof input2 === "number") {
//         result = input1 + input2
//     }
//     else;
//     {
//         result = input1.toString() + input2;
//     }
//     return result;
// }
// const result = conbine2("sadf", "asdf", 'number');
// console.log(result);