import React, { Component } from 'react';
import '../css/BookDisplay.css';
import _ from 'lodash';

class BookDisplay extends Component {

  /**
   * 
   * @param {Array} books 
   * @param {String} filterTarget 
   * @param {String} filterValue 
   */
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

  /**
   * 
   * @param {Array} books 
   * @param {String} sortTarget 
   */
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

    /**
     * Apply filters, THEN sort (if applicable). Apply a limit AFTER filtering/sorting
     * in order to prevent removing desired results.
     */
    const filteredBooks = this.handleFilter(books, filterBy, filterValue);
    const adjustedBooks = this.handleSort(filteredBooks, sortBy);
    const finalBooks = (limit !== 0)
      ? adjustedBooks.splice(0, limit) : adjustedBooks;
    const bookList = finalBooks.map(book => {
      return (
        <div>
          <br />
          <div className="BookBlock" key={book.isbn || 0}>
            <h4>{book.title}</h4>
            <p>By {book.author}</p>
            <p>Year {book.year}</p>
          </div>
        </div>
      );
    });

    return bookList;
  }
}

export default BookDisplay;