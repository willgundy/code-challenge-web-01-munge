Imagine you have this array:

```js
[
   { title: 'war of the worlds', author: 'wells', genre: 'scifi' }, 
   { title: 'pride and prejudice', author: 'austen', genre: 'classic' }, 
   { title: 'sula', author: 'morrison', genre: 'classic' },
   { title: 'the road', author: 'mccarthy', genre: 'scifi' } 
]
```

## .map

This method is a kind of `for` loop takes a callback as an argument and returns a new array of the same length as the old array, but with a different shape.

That callback tells the method how to make a new array out of the old array.

Whatever you return from the callback will be the transformed item in a new array.

We can get an array of just the books' titles as strings like so:

```js
books.map(book => {
   return book.title
})
```

This can be abbreviated, using implicit returns, like so:
```js
books.map(book => book.title)
```

Often, `.map` is used to change the keys of a objects in an array.

We can make an array of `{ writer, work }` objects (that is, changing the names of keys), like so:

```js
books.map(book => {
     return { 
        writer: book.author,
        work: book.title
     }
})
```

This can be abbreviated, using implicit returns, like so:

```js
books.map(book => ({ 
        writer: book.author,
        work: book.title
     }))
```

## .filter

This method is a kind of `for` loop takes a callback as an argument and returns a filtered array.

In the callback, for each item, if you return true, that item will be included in the new array. If you return false, it will be excluded.

We can get an array of just classic books as objects like so:

```js
books.filter(book => {
   if (book.genre === 'classic') { 
      return true
    }
})
```

This can be abbreviated, using implicit returns, like so:

```js
books.filter(book => book.genre === 'classic')
```

## .filter then .map

Array methods can be chained together.

We can get an array of just scifi titles as strings like so:

```js
books
  .filter(book => book.genre === 'classic')
  .map(book => book.title)
```

## Bonus: .reduce

`.reduce` is a `for` loop method that lets you turn an array into anything. 

This method takes two arguments: a callback and an initial accumulator.

The callback takes two arguments: the accumulator and the current item.

Whatever you return from the callback will become the new accumulator. The accumulator grows and changes as you loop through the array.

Here are two valid ways of adding all the numbers in an array.

`const numbers = [3, 5, 6, 7, 1]`

```js
let sum = 0

for (let num of numbers) {
   sum = sum + num;
}
```

```js
const sum = numbers.reduce((acc, curr) => {
      const newAcc = acc + curr;
      
      // whatever we return becomes the new acc. Eventually, the acc is what the array is turned into.
      return newAcc;
}, 0) // the initial value of our accumulator is 0. We start at 0, and add the curr to it to make a sum over time.
```
