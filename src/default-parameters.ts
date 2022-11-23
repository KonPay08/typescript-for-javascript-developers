export {};

const nextYeaySalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYeaySalary(1000, 1.05));