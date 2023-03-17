/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// setTimeout(()=>{
//     console.log('Сообщение номер 1')
// }, 2000)

let count = 1

const messageEvery2sec = setInterval(()=>{
    console.log(`Сообщение номер ${count}`)
    count++
},2000)



setTimeout(() => clearInterval(messageEvery2sec), 11000)