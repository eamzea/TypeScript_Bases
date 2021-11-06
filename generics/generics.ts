interface User {
  name: string;
  id: number;
}

function genericF<T>(argument: T): T {
  return argument;
}

const genericArrowF = <T>(argument: T): T => {
  return argument;
};

console.log(genericF(10).toExponential(10));
console.log(genericF('Hello').toUpperCase());
console.log(genericF(true).valueOf);
console.log(genericF({ name: 'Edgar' }).name);

const edgar = {
  id: 1,
  age: 27,
};

console.log(genericArrowF<User>(edgar));
console.log(genericArrowF<User>(edgar));
