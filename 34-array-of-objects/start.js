/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const arrayOfCars = [
    car1 = {
        carBrand: 'Mercedes',
        price: 20000,
        isAvailableForSale: true
    },
    car2 = {
        carBrand: 'Tesla',
        price: 40000,
        isAvailableForSale: true
    },
    car3 = {
        carBrand: 'Ford',
        price: 50000,
        isAvailableForSale: false
    }
]

const car4 = {
    carBrand: 'BMW',
    price: 10000,
    isAvailableForSale: false
}
arrayOfCars.push(car4)
// arrayOfCars.car4 = {
//     carBrand: 'BMW',
//     price: 10000,
//     isAvailableForSale: false
// }

console.log(arrayOfCars)