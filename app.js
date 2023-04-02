var person 
// :{
//     name: string;
//     age: number;
// }
= {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActiities; //any 타입은 문자, 숫자 어느 것이든 혼용가능
favoriteActiities = ["Sports", 1];
console.log(person.name);
for (var _i = 0, favoriteActiities_1 = favoriteActiities; _i < favoriteActiities_1.length; _i++) {
    var hobby = favoriteActiities_1[_i];
    console.log(hobby.toUpperCase());
}
