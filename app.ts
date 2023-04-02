function conbine(input1:number | string, input2:number | string) 
{
    //실제론 숫자, 문자 타입을 + 연산이 가능하지만 
    //타입스크립트에서 여러 타입을 사용한다는 것은 유니온 타입으로 묶어 여러 타입 중 +연산이 안될 가능서을 염두한다.
    //따라서 런타임 검사가 필요하다.
    let result;
    if(typeof input1 === "number" && typeof input2 === "number")
    {
        result = input1 + input2; 
    }else{
        result = input1.toString() + input2.toString(); //
    }

    if(typeof input1 === "string") // 조건문에서 타입 조건에 따라 result의 값이 달라진다.
    {
        result = input1;
    }
    return result;
}

const conbinedAges = conbine(30, 20);

const conbinedNames = conbine("Max", "Anna");
console.log(conbinedAges);
console.log(conbinedNames);