// // 接口2
// interface Girl {
//     name: string;
//     age: number;
//     bust: number;
//     waistline?: number;
//     [propname: string]: any,
//     say(): string;
//   }
  
//   const girl: Girl = {
//     name: '小红',
//     age: 18,
//     bust: 94,
//     waistline: 21,
//     say() {
//         return ''
//     }
//   };
  
//   const screenResume = (girl: Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name}进入面试`);
//     (girl.age >= 24 || girl.bust < 90) && console.log(`${girl.name}被淘汰`);
//   };
  
//   const getResume = (girl: Girl) => {
//     console.log(`${girl.name}年龄是${girl.age}`);
//     console.log(`${girl.name}胸围是${girl.bust}`);
//     girl.waistline && console.log(`${girl.name}的腰围是${girl.waistline}`);
//   };
  
//   screenResume(girl);
//   getResume(girl);
  