import React, { Component } from 'react';

class BookDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const bookDisplay = this.props.filteredBooks.map(book => {
            return (
              <div id={book.isbn}>
                <h4>{book.title}</h4>
                <p>By {book.author}</p>
                <p>Year {book.year}</p>
              </div>
            )
        });

        return bookDisplay;
    }
}

export default BookDisplay;