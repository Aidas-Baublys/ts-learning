var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["DUCHAS"] = 3] = "DUCHAS";
})(Role || (Role = {}));
var person = {
    name: "Duchas",
    age: 13,
    hobbies: ["Kurwos", "Narkata"],
    role: Role.ADMIN
};
console.log(Role.READ_ONLY);
