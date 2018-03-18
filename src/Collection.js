import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger'

class Collection extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render () {
    const { onUpdateShelf, books } = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"
                  style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}>
                </div>
                <BookshelfChanger
                  book={book}
                  onUpdateShelf={onUpdateShelf}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

export default Collection
