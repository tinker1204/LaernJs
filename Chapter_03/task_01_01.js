let randomWords = ["клавиатура", "мозоль", "тушь"];
let randomAnimals = ["лев", "слон", "обезъяна"];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let result = ["Твоя", randomWord, "выглядит как", randomAnimal + ")))"].join(" ");
console.log(result)