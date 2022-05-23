//task 2

alert('Illia');

//task 3

let a = 'Andrew';
let x = 46;
alert(a);
alert(x);
x = a;
alert(x);

//task 4

let user = {
    Name: 'Andrew',
    Age: 26,
    Human: true,
    Phone: undefined,
    Job: null
    };
    console.log(user);

//task 5

let isAdult = confirm('Ви досягли повноліття?');
alert (isAdult);

//task 6

let Name = 'Illia';
let Surname = 'Ursaki';
let StudyGroup = 'Lv-678.JS-Core';
let BirthYear = 2003;
let isEnabled = true;

console.log(typeof Name);
console.log(typeof Surname);
console.log(typeof StudyGroup);
console.log(typeof BirthYear);
console.log(typeof isEnabled);

let salary = null;
let job;

console.log(typeof salary);
console.log(typeof job);


//task 7

let login = prompt('Ваш login?');
let email = prompt('Ваш email?');
let password = prompt('Ваш пароль?');
alert (`Dear ${login}, your email is ${email}, your password is ${password}`);

//task 8 

let Sec = 60;
let SecInHour = Sec * 60;
let SecInDay = SecInHour * 24;
let SecInYear = SecInDay * 365;

console.log(SecInHour);
console.log(SecInDay);
console.log(SecInYear);
