//5.7
//Задание 8

let myMap = new Map();
myMap.set('name', 'Robert');
myMap.set('age', '29');
myMap.set('city', 'Paris');

for (let name of myMap.keys()){
  console.log("Ключ - " + name + ", значение - " + myMap.get(name))
}