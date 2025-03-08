let randomBodies = ["рука", "нога", "кисть"];
let randomAdjectives = ["чешуйчатая", "волосатая", "грязная"];
let randomBodiesAnymals = ["лапа", "нос", "уши"];
let randomAnymals = ["льва", "свиньи", "ящерицы"];
let randomBody = randomBodies[Math.floor(Math.random() * randomBodies.length)];
let randomAdjectiv = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomBodiesAnymal = randomBodiesAnymals[Math.floor(Math.random() * randomBodiesAnymals.length)]; 
let randomAnymal = randomAnymals[Math.floor(Math.random() * randomAnymals.length)];

let result = ["У тебя", randomBody, "еще более", randomAdjectiv, "чем", randomBodiesAnymal, "у", randomAnymal + ")))"].join(" ");
console.log(result)