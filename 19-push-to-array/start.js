/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

let myArr = [1, 8, 16]

let endArr = [32, 64]

myArr.push(endArr[0])
console.log(myArr)

myArr.push(endArr[1])
console.log(myArr)

console.log(myArr.length)