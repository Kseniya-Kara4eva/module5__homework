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