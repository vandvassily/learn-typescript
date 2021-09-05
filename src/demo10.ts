// // 泛型

// function join<T>(first: T, second: T) {
//     return `${first}${second}`
// }

// join<number>(1, 3)

// function join2<T, P>(first: T, second: P) {
//     return `${first}${second}`
// }

// join2<string, number>('123', 333)

// // 泛型中数组的使用
// function myFunc<T>(params: Array<T>) {
//     return params
// }

// myFunc<string>(['123', '321'])