/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  } else {
    return 'Массив пустой'
  }
}

function isArrayEmpty1(inputArray) {  // no else
  if(inputArray.length > 0){
    return 'Массив не пустой'
  }
  return 'Массив пустой'
}

function isArrayEmpty2(inputArray){  // tern. op
  return inputArray.length > 0 ? 'Массив не пустой2' : 'Массив пустой2'
}

const isArrayEmpty3 = (inputArray) => {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  } else {
    return 'Массив пустой'
  }
}


console.log(isArrayEmpty3([1, 3]))
console.log(isArrayEmpty3([]))
