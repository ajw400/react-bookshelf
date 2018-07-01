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
    this.setState({books: []})
    if (query) {
      BooksAPI.search(query.trim()).then((books) => {
        books.map((book) => {
          this.props.selectedBooks.map((sb) => {
            if (sb.id === book.id){
              book.shelf = sb.shelf
            }
          })
        })
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
