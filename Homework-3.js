//task1
//1)
let array = [2, 3, 4, 5];
let sum = 1;

for (let i = 0; i < array.length; i ++) {
    sum = sum * array[i];
}
console.log(sum);

//2)
let i = 0;
while (i < array.length) {
    sum = sum * array[i];
    i++;
};
console.log(sum);
//task2
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
};
//task3
let newArray = [];

function randArray(k) {
    for (let k = 0; k < 5; k++) {
        let rand = Math.floor(Math.random() * 501) + 1;
        newArray.push(rand);
    };
    return newArray;
};

console.log( randArray(5) );
//task4
let a = +prompt('Ведіть число');
let b = +prompt('Введіть степінь');

//1) 
function raiseToDegree(a, b) {
    let result = Math.pow(Math.round(a), Math.round(b));
    return result;
};

//2)
function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        let result = Math.pow(a, b);;
        return result;
    } else {
        alert('Обидва значення мають бути ЦІЛИМИ числами');
        a = +prompt('Ведіть будь-ласка число');
        b = +prompt('Ведіть будь-ласка степінь');
        let result = Math.pow(a, b);
        return result;
    }
};

console.log(raiseToDegree(a, b));
//task5
//1)
function findMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(findMin(12, 14, 4, -4, 0.2));

//2)
function findMin(){
    return Math.min(...arguments);
}

console.log(findMin(12, 14, 4, -4, 0.2));
//task6
//1)
function findUnique(arr) {
    let newArr = arr.sort();
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i-1] === newArr[i])
        return false;
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 11]));

//2)
function findUnique(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j])
            return false;
        };
    };
    return true;
};
console.log(findUnique([1, 2, 3, 5, 3]));
//task7
function lastElem(arr, num) {
    let newArr = arr[arr.length-1];
    if (num > 0){
        newArr = arr.slice(-num);
    }
    return newArr;
}
console.log(lastElem([3, 4, -5, 10], 2))
//task8
function capitalizeWords(str) {
    let newStr = "";
    let result = str.split(" ");

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        newStr += result[i] + ' ';
    }
    return newStr;
}

console.log(capitalizeWords('i love java script'));
