function add(num1, num2) {
    if(typeof num1 !=== "number" || typeof num2!== "number")
    {
        throw new Error("Incrrect input!");
    }
    return num1 + num2;
}
var number1 = '5';
var number2 = 3.4;
var result = add(number1, number2);
console.log(result);
