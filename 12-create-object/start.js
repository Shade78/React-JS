/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObj = {
    name: 'Alex',
    surname: 'Beck',
    favoriteNumber: 5,
    aboutObj: function(){
        console.log(`My name is ${this.name} ${this.surname} and my favorite number is ${this.favoriteNumber}`)
    }
}

myObj.aboutObj();
