type Girl = {
  name: string,
  age?: number
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}

  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirls = new SelectGirl<Girl>([
  {
    name: 'xiaohong',
    age: 14
  },
  {
    name: 'xiaoming',
  },
  {
    name: 'xjj'
  },
]);

console.log(selectGirls);
console.log(selectGirls.getGirl(2));
