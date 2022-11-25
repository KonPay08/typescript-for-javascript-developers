export {};

class Person {
  public name: string;
  public age: number;
  protected natinality: string;
  constructor(name: string, age: number, natinality: string) {
    this.name = name;
    this.age = age;
    this.natinality = natinality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, natinality: string) {
    super(name, age, natinality)
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, natinality: ${this.natinality}`;
  }
}

let taro = new Person("Taro", 30, "Japan");
console.log(taro.name);
console.log(taro.profile());
// let hanako = new Person();
