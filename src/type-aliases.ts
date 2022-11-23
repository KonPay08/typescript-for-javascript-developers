export {};

type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

console.log(fooString);
console.log(fooMojiretsu);

const example1: Profile = {
  name: "Ham",
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

console.log(example1);

type Profile2 = typeof example1;

