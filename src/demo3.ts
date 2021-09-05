// // 函数参数和返回类型的注解
// function getTotal(one: number, two: number): number {
//     return one + two
// }

// // 自动推断出total的类型
// const total = getTotal(1, 2)

// function sayHello(): void {
//     console.log('hello world');
// }

// function errorFunction(): never {
//   throw new Error();
//   console.log(123123);
// }

function add({ one, two }: { one: number; two: number }) {
  return one + two;
}

const sum = add({ one: 1, two: 2 });
console.log(sum)