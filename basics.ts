function add(num1:number, num2:number, isShow:boolean, pharse:string)
{
    // if(typeof num1 !== "number" || typeof num2!== "number")
    // {
    //     throw new Error("Incrrect input!");
    // }
    const result:number = num1 + num2;
    if(isShow)
    {
        console.log(pharse + num1 + num2);
        console.log(pharse + result);
        //string문자형이 앞에 있을 경우 뒤에 숫자형이 문자형으로 변환 '3'+3.3'가 된다.
        //따라서 숫자형끼리 연산을 마친 뒤 문자열과 연산하도 로직을 짜야 한다.
    }
    else
    {
        return num1 + num2;
    }
}

const number1 = 3;
const number2 = 3.4;
let number3: number;
number3 = 4;
// number3 = "qe";
let number4 = "er";
// number4 = 1;
const printResult = true;
const resultPhrase = "Result is : ";

add(number1, number2, printResult, resultPhrase);
