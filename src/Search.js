import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Collection from './Collection';

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    if (query) {
      BooksAPI.search(query).then((books) => {
        this.setState({ books })
      })
    } else {
      this.setState({ books: []})
    }
  }

  render () {
    const { query, books } = this.state
    const { onUpdateShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Collection
            books={books}
            onUpdateShelf={onUpdateShelf}
          />
        </div>
      </div>
    )
  }
}

export default Search
