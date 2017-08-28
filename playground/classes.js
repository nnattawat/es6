class Person {
  constructor({name="Anonymous", age=0}) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello ${this.name}!`;
  }

  getDescription() {
    return `I'm ${this.name} and I'm ${this.age}!`;
  }
}

let person1 = new Person({age: 25});

console.log(person1);
console.log(person1.getDescription());
// Person { name: 'Anonymous', age: 25 }
// I'm Anonymous and I'm 25!

let person2 = new Person({name: 'Nattawat', age: 20});

console.log(person2);
console.log(person2.getDescription());
// Person { name: 'Nattawat', age: 20 }
// I'm Nattawat and I'm 20!
