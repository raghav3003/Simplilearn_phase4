export const PI = 3.14;

export function showBook({ name: bookName, author }) {
  console.log(`The book ${bookName} is authored by ${author}.`);
}
export default class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}