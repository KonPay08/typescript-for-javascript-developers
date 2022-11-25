export {};

let name = "Atsushi";

name = "Ham";

let nickname = "Ham" as const;


let profile = {
  name: "Atsushi",
  height: 178
} as const;

// profile.name = "Atsushi"


class Taro {
  name: string;
  age: number;
  signupAt: string
  userType: string
  createdAt: string

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.signupAt = "";
    this.userType = "";
    this.createdAt = "";
  }
  static setUserType(
    dto: Taro,
    userType: string
  ) {
    dto.userType = userType;
    return dto;
  }
}

class Account {
  id: number;
  createdAt: string

  constructor(createdAt: string) {
    this.id = 1
    this.createdAt = createdAt
  }
}
const account = new Account("1234");

function createTaro(name: string, age: number): Taro {
  const signupAt = "aaa"
  const dto = new Taro(name, age);
  return {
    // ...Taro.setUserType(
    //   dto, userType
    // ), signupAt, createdAt: account.createdAt
    // ...dto, createdAt: signupAt
    ...new Taro(name, age), signupAt
  }
}
console.log(createTaro("taro", 20));

