import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import PropTypes from 'prop-types'

// import serializeForm from 'form-serialize'



class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  render () {
    const { shelves, books, onUpdateShelf } = this.props
    function capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <Shelf
                key={shelf}
                title={capitalizeFirstLetter(shelf).split(/(?=[A-Z])/).join(" ")}
                books={books.filter((book) => book.shelf === shelf)}
                onUpdateShelf={onUpdateShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )}
}

export default Bookshelf
