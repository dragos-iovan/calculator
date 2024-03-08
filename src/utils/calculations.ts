export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => a / b;
export const percent = (a: number) => a / 100;
export const factorial = (a: number) => {
  let factorial = a;
  for (let i = a - 1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};