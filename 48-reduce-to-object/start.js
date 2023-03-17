/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

function quantitiesByCategories(products) {
  return products.reduce((qtysByCategories, product) => {
    const {category, quantity} = product // создаем 2 переменные и присваиваем им значения из объекта product
    
    qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity  // если выражение undefined || 0 вернет 0
    // синтаксис квадратных скобок позволяет добавить новое свойство к объекту
    return qtysByCategories // возвращаем объект
  }, {}) // {} - начальное значение первого аргумента reduce
}

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
