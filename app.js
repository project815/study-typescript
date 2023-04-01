function add(num1, num2, isShow, pharse) {
    // if(typeof num1 !== "number" || typeof num2!== "number")
    // {
    //     throw new Error("Incrrect input!");
    // }
    var result = num1 + num2;
    if (isShow) {
        console.log(pharse + num1 + num2);
        console.log(pharse + result);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 3;
var number2 = 3.4;
var printResult = true;
var resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);
