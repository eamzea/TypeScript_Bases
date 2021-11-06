"use strict";
(() => {
    class Avenger {
        name;
        team;
        realName;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const ironMan = new Avenger('Iron Man', 'Iron Man', 'Tony Stark');
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Peter', 'Parker');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Peter', 'Parker');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Peter', 'Parker');
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const name = fullName('Peter', 'Parker');
})();
(() => {
    const hero = 'Batman';
    const returHero = () => {
        return hero;
    };
})();
(() => {
    const greet = (name) => `Hello ${name}`;
})();
(() => {
    const person = {
        name: 'Edgar',
        age: 27,
        getInfo() {
            return `${this.name}`;
        },
    };
    class Person {
        name;
        age;
        address;
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getInfo() {
            return `${this.name}`;
        }
    }
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Hyper velocity', 'Travel time'],
    };
    let batman = {
        name: 'Bruce Wayne',
        age: 40,
        powers: ['Millionaire', 'Intelligence'],
    };
})();
(() => {
    let avenger = 123;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 21;
    console.log(avenger.toPrecision(10));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5];
    const villains = ['Venom', 'Carnage'];
})();
(() => {
    let isBatman = true;
    let isSuperman = true;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.max;
})();
(() => {
    const showError = (message) => {
        throw new Error(message);
    };
    showError('There was an error');
})();
(() => {
    let avengers = 20;
})();
(() => {
    const batman = 'Batman';
    const greenLantern = 'Green Lantern';
})();
(() => {
    const hero = ['Ironman', 100];
})();
(() => {
    function callSuperman() {
        return;
    }
    const callBatman = () => {
        return;
    };
})();
//# sourceMappingURL=main.js.map