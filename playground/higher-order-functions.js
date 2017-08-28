function one (name, location) {
  console.log(name, location)
}

function two () {
  // arguments is not availble in arrow function
  console.log('Args', arguments)
  one.apply(undefined, arguments);
}

two('Arm', 'BKK')
// Args { '0': 'Arm', '1': 'BKK' }
// Arm BKK

two.apply(undefined, [])
// Args {}
// undefined undefined


let add = (a, b) => a + b;
let square = (a) => a * a;

// Higher order function
// create a function that extend another function without changing the existing function
let callAndLog = (func) => {
  return function () {
    let res = func.apply(undefined, arguments);
    console.log('Result is ' + res);
    return res;
  }
}

let addAndLog = callAndLog(add);
addAndLog(2, 3)

let squareAndLog = callAndLog(square);
squareAndLog(3)
