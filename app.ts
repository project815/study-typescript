const person
// :{
//     name: string;
//     age: number;
// }
= {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};

let favoriteActiities: any[]; //any 타입은 문자, 숫자 어느 것이든 혼용가능
favoriteActiities = ["Sports", 1]
console.log(person.name);

for(const hobby of person.hobbies)
{
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // map 속성에는 문자열이 존재하지 않는다.!!!Error!!!
}

for(const hobby of favoriteActiities)
{
    console.log(hobby.toUpperCase()); // 숫자일의 경우 런타임 오류 발생함.
}