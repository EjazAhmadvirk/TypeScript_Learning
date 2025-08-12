class Dog {
    speak(): string {
      return "Woof!";
    }
  }
  
  class Cat {
    speak(): string {
      return "Meow!";
    }
  }
  
  const animals: (Dog | Cat)[] = [new Dog(), new Cat()];
  animals.forEach(animal => {
    console.log(animal.speak());
  });
  