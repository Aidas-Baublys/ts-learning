enum Role {
  ADMIN = 1,
  READ_ONLY,
  DUCHAS,
}

const person = {
  name: "Duchas",
  age: 13,
  hobbies: ["Kurwos", "Narkata"],
  role: Role.ADMIN,
};

console.log(Role.READ_ONLY);
