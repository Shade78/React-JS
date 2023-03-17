/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let str = 'some string';
let num = 123;
let bool = true;
let noValue = null;
let notDefinedValue = undefined;

let obj1 = {
    fieldA: 1,
    fieldB: 'firstOne',
    fieldObj: {
        name: 'Sam',
        age: 21
    }
}

let myArr = [1, 2, 4];
let allTypes = [str, num, bool, noValue, notDefinedValue, obj1, myArr];

for(let i = 0; i < allTypes.length; i++) {
    console.log(typeof(allTypes[i]));
}

