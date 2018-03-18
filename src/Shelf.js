import React, { Component } from 'react';
import Collection from './Collection';
import Header from './Header';

class Shelf extends Component {
  render() {
    const { title, books, onUpdateShelf } = this.props
    return (
      <div className="bookshelf" key={title}>
        <Header title={title}/>
        <div className="bookshelf-books">
          <Collection
            books={books}
            onUpdateShelf={onUpdateShelf}
         />
        </div>
      </div>
      )
  }
}

export default Shelf
