import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      this.setState({
        shelves: [...new Set(books.map((book) => (book.shelf)))]
      });
    })
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(this.setState((state) => ({
      books: this.state.books.filter((b) => b.id !== book.id).concat([book])
    })));
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf
            books={this.state.books}
            shelves={this.state.shelves}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
        <Route path='/search' render={() => (
          <Search
            onUpdateShelf={this.updateShelf}
            selectedBooks={this.state.books}
          />
        )}/>
      </div>
      )
  }
}

export default BooksApp
