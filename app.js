var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
//열거형 : 숫자 혹은 문자 할당 가능 
//사용자가 보기 표현식으로 보여주기 위함.
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author'],
    auth: Role.ADMIN
};
person.role.push('admin'); //튜플에서 예외적으로 가능
person.role.push(1);
person.role.push(2);
console.log(person.role);
person.role.pop();
person.role.pop();
person.role.pop();
// person.role[1] = 10; //string타입으로 명시되었음 컴파일 과정에서 에러
console.log(person.role);
//
var favoriteActiities; //any 타입은 문자, 숫자 어느 것이든 혼용가능
favoriteActiities = ["Sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // map 속성에는 문자열이 존재하지 않는다.!!!Error!!!
}
if (person.auth === Role.ADMIN) {
    console.log("person ADMIN");
}
// for(const hobby of favoriteActiities)
// {
//     console.log(hobby.toUpperCase()); // 숫자일의 경우 런타임 오류 발생함.
// }
