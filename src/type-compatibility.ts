export {};

let fooCompatible: any;
let barCompatible: string = "Typescript";

console.log(typeof fooCompatible);

fooCompatible = barCompatible

console.log(fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

let fooString: string;
let barString: string = "string";
fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(43, "ham");
