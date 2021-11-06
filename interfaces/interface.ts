(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  interface User {
    name: string;
    age: number;
    address?: Address;
    getInfo: () => string;
  }

  interface Address {
    zipCode: string;
    street: string;
    city: string;
  }

  const person: User = {
    name: 'Edgar',
    age: 27,
    getInfo() {
      return `${this.name}`;
    },
  };

  class Person implements User {
    constructor(
      public name: string,
      public age: number,
      public address?: Address,
    ) {}

    getInfo() {
      return `${this.name}`;
    }
  }
})();
