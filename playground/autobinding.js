let obj = {
  name: 'Nattawat',
  printName() {
    console.log(`My name is ${this.name}`)
  }
}

obj.printName();
// My name is Nattawat

setTimeout(obj.printName, 1000);
// My name is undefined

setTimeout(obj.printName.bind(obj), 1000);
// My name is Nattawat

setTimeout(obj.printName.bind({ name: 'Mike' }), 1000);
// My name is Mike
