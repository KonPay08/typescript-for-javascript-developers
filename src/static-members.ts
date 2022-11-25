export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = "Atsushi";
  static lastName: string = "Ishida";

  static work() {
    return `Hey, guys! ${this.firstName}`;
  }
}
// let me = new Me();
// console.log(me.isProgramer);
console.log(Me.work());