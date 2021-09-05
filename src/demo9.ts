// // public 类的内部和外部使用
// // private 类的内部使用
// // protected 类以及子类的内部使用
// class Person {
//   name: string | undefined;
//   public age: number | undefined;
//   sayHello() {
//     console.log(this.age);
//     console.log(this.name);
//   }

//   protected study() {
//     console.log('学习中');
//   }
// }

// class Student extends Person {
//   age: number;
//   public readonly _age: number;
//   constructor(age: number) {
//     super();
//     this.age = age;
//     this._age = age;
//   }
//   sayHello() {
//     console.log(this.age);
//     this.study();
//   }
// }

// interface BoxType {
//   width: number;
//   height: number;
// }

// class Box {
//   constructor(public width: number, public height: number) {}

//   square() {
//       return this.width * this.height
//   }
// }

// const box = new Box(10, 15)
// console.log(box.square())


// const person = new Person();
// const std = new Student(12);
// std.sayHello();
// person.name = 'xiaohong';
// person.sayHello();
