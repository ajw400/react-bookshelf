import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookshelfChanger from './BookshelfChanger'
// import serializeForm from 'form-serialize'

class Collection extends Component {
  render () {
    const { onUpdateShelf } = this.props
    const { books } = this.props
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                    style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                  </div>
                  <BookshelfChanger
                    book={book}
                    onUpdateShelf={onUpdateShelf}
                  />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(", ")}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Collection
