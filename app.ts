let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if(typeof userInput === "string")
{
    userName = userInput;
}
//Known타입은 다른 타입에 할당하기 위해서는 타입체킹이 필요하다.
//any를 사용하면 타입체킹 없이 어디든 할당된다.