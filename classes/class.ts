(() => {
  class Avenger {
    constructor(
      private name: string,
      public team: string,
      public realName: string,
    ) {}
  }

  const ironMan = new Avenger('Iron Man', 'Iron Man', 'Tony Stark');
})();
