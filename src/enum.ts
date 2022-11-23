export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
};

Months.January;
console.log(Months.January);

enum CLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  BLACK = "#000000"
}

let green = CLORS.GREEN;
console.log({ green });

enum CLORS {
  YELLOW = "FFFF00"
}

CLORS.YELLOW;