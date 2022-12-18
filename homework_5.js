//5.3
//Задание 1

let value = prompt ('Введите значение:')
let result = + value
console.log (typeof result)

if (result % 2 == 0) {
  console.log ('четное число')
} else if (result !== result) {
  console.log ('Упс, кажется, Вы ошиблись')
}
else {
  console.log ('нечетное число')
}

//Задание 2

let x = undefined

if (typeof x === "number") {
  console.log ('x - число')
}

else if (typeof x === "string") {
  console.log ('x - строка')
}

else if (typeof x === "boolean") {
  console.log ('x - логический тип')
}

else  {
  console.log ('Тип x не определён')
}
 

//5.4
//Задание 3

let string = 'Hello';
let reverse = string.split('').reverse().join('');
console.log(reverse);


//Задание 4

let randomNumber = Math.random (0, 1)
console.log(randomNumber)


//5.5
//Задание 5

let arr = [1, 2, 3, 4, 5]
console.log(arr.length)
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}


//5.6
//Задание 6


let arr = [1, 1, 1, 1, 1]

for(let i = 0; i < arr.length; i++) {
   if(arr[i] !== arr[i+1]) {
     console.log("false");
     break
     }
   else {
     console.log("true");
     break
     }
}


//Задание 7

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25, 'string1', null, 'string2'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Even is " + countEven);
console.log("Odd is " + countOdd);
console.log("Other is " + countOther);

//5.7
//Задание 8

let myMap = new Map();
myMap.set('name', 'Robert');
myMap.set('age', '29');
myMap.set('city', 'Paris');

for (let name of myMap.keys()){
  console.log("Ключ - " + name + ", значение - " + myMap.get(name))
}




  
