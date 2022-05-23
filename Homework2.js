//Task1
let x = 1;
let y = 2;

let res1 = x + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = !!x + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (x + y) * undefined;
console.log(res4); // NaN
console.log(typeof res4); // "number"
//Task2
let num = prompt("Enter a number");
if (num % 2 === 0 && num > 0) {
  console.log("Your number is pared positive");
} else if (num % 7 === 0) {
  console.log("Your number is multiple 7");
} else {
  console.log("Its not a number");
}
//Task3
let arr = [];
arr.unshift(23);
arr.push("Jordan");
arr.push(true);
arr.push(null);
console.log(arr.length);
arr.push(prompt());
console.log(arr[4]);
arr.shift();
console.log(arr);
//Task4
let cities = ["Rome", "Lviv", "Warsaw"];
let answ = cities[0] + "*" + cities[1] + "*" + cities[2];
console.log(answ);
//Task5
let x = prompt();
let age = x >= 18 ? "Ви досягли повноліття" : "Ви неповнолітній";
console.log(age);
//Task6
let a = Number(prompt("side a"));
let b = Number(prompt("side b"));
let c = Number(prompt("side c"));
if (a > 0 && b > 0 && c > 0) {
  let p = a + b + c;
  let s = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);
  console.log("Площа = " + s.toFixed(3));
} else {
  console.log("Incorrect data");
}

if (
  a * a + b * b === c * c ||
  c * c + b * b === a * a ||
  a * a + c * c === b * b
) {
  console.log("The Triangle is right-angled");
} else {
  console.log("Incorrect data");
}
//Task7
let time = today.getHours();
if (time >= 23 || time <= 5) {
  console.log("Доброї ночі");
} else if (time > 5 && time <= 11) {
  console.log("Доброго ранку");
} else if (time > 11 && time <= 17) {
  console.log("Добрий день");
} else if (time < 17 && time < 23) {
  console.log("Добрий вечір");
}
