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

class Child extends Person {
  constructor({name="Anonymous", age=0, like}) {
    super({name, age});

    this.like = like;
  }
  // overridden methods
  getGreeting() {
    return `I'm ${this.name}.... I like ${this.like}`
  }
}

let child1 = new Child({name: 'Nattawat', age: 20, like: 'football'});

console.log(child1);
console.log(child1.getGreeting());
console.log(child1.getDescription());
// Child { name: 'Nattawat', age: 20 }
// I'm Nattawat.... I like football
// I'm Nattawat and I'm 20!
