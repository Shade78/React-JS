/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

function diff(var1, var2) {
    parseInt(var1)
    parseInt(var2)

    if(var1 <= var2) {
        return true
    }else{
        return false
    }
}
console.log(diff(myVariable1, myVariable2))
//console.log(parseInt(myVariable1) <= parseInt(myVariable2))


// -----------------------------

myVariable1 = '20'
myVariable2 = 100

console.log(diff(myVariable1, myVariable2))