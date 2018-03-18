import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookshelfChanger extends Component {
  render() {
    const { onUpdateShelf, book, shelf } = this.props

    return(
      <div className="book-shelf-changer">
        <select
            value={(book.shelf || 'none')}
            onChange={(event) => onUpdateShelf(book, event.target.value)}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
