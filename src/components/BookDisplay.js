import React, { Component } from 'react';
import _ from 'lodash';

class BookDisplay extends Component {
  constructor(props) {
    super(props);
  }

  handleFilter(books, filterTarget, filterValue) {
    switch (filterTarget) {
        case 'title':
          return _.filter(books, (book) => { return book.title.includes(filterValue) });
        case 'author':
          return _.filter(books, (book) => { return book.author.includes(filterValue) });
        case 'year':
          return _.filter(books, (book) => { return (book.year || "").includes(filterValue) });
        default:
          return books;
    }
  }

  handleSort(books, sortTarget) {
    switch (sortTarget) {
        case 'titleAsc':
          return _.sortBy(books, (book) => { return book.title});
        case 'titleDesc':
          return _.sortBy(books, (book) => { return book.title}).reverse();
        case 'authorAsc':
          return _.sortBy(books, (book) => { return book.author});
        case 'authorDesc':
          return _.sortBy(books, (book) => { return book.author}).reverse();
        case 'yearAsc':
          return _.sortBy(books, (book) => { return book.year});
        case 'yearDesc':
          return _.sortBy(books, (book) => { return book.year}).reverse();
        default:
           return books;
    }
  }

  render() {
    const books = _.get(this.props, 'books');
    const filterBy = _.get(this.props, 'filterBy');
    const filterValue = _.get(this.props, 'filterValue');
    const sortBy = _.get(this.props, 'sortBy');
    const limit = _.get(this.props, 'limit');

    const filteredBooks = this.handleFilter(books, filterBy, filterValue);
    const adjustedBooks = this.handleSort(filteredBooks, sortBy);
    const finalBooks = (limit !== 0)
        ? adjustedBooks.splice(0, limit) : adjustedBooks;
    console.log('limit', limit);
    console.log('finalBooks', finalBooks);
    const bookList = finalBooks.map(book => {
      return (
        <div id={book.isbn}>
          <h4>{book.title}</h4>
          <p>By {book.author}</p>
          <p>Year {book.year}</p>
        </div>
      );
    });

    return bookList;
  }
}

export default BookDisplay;