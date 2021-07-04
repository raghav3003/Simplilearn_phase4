import { PI, showBook } from './module';
console.log('PI =', PI);
const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
showBook(book);

import { showBook as displayBook } from './my-module';
const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
displayBook(book);

import * as myModule from './module';

console.log('PI =', myModule.PI);

const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
myModule.showBook(book);

import Book, { showBook } from './module';

const book = new Book(
  'JavaScript: The Good Parts',
  'Douglas Crockford'
);

showBook(book);