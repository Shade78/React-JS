/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

function popularPostsIds(posts, minimalComentsQty) {
    return posts.reduce((ArrOfPostIds, post) => {
      if(post.comments >= minimalComentsQty){
        return ArrOfPostIds.concat([post.postId]) // почему не работает push()?, также post.postId почему то можно передать не в виде массива
      }else{
        return ArrOfPostIds
      }
    }, []) // [] - начальное значение ArrOfPostIds, оно будет обновляться от 1го вызова коллбек ф-и к следующему
    
      // return posts.reduce(function(postIds, post){
      //     if((posts.comments >= minimalComentsQty)){
      //       postIds.concat([post.postId])
      //     }else{
      //       return post.postId
      //     }
      // })
}

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []
