/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

function isElementInArray(inputArray, searchElement){
    return inputArray.includes(searchElement)
}

function isElementInArray1(inputArray, searchElement){
    for( let i =0; i <= inputArray.length; i++){
        if(inputArray[i] == searchElement){
            return true
        }       
    }
    return false
}

function isElementInArray2(inputArray, searchElement){
    if(inputArray.indexOf(searchElement) != -1){
        return true
    }else{
        return false
    }
}
console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true
console.log('----------------------------')
console.log(isElementInArray1(transports, 'Bus')) // true
console.log(isElementInArray1(transports, 'Phone')) // false
console.log(isElementInArray1(transports, 'Airplane')) // true
console.log('----------------------------')
console.log(isElementInArray2(transports, 'Bus')) // true
console.log(isElementInArray2(transports, 'Phone')) // false
console.log(isElementInArray2(transports, 'Airplane')) // true