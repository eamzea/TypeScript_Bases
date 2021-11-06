(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Hyper velocity', 'Travel time'],
  };

  let batman: Hero = {
    name: 'Bruce Wayne',
    age: 40,
    powers: ['Millionaire', 'Intelligence'],
  };
})();
