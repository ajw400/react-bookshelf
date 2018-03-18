import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Collection from './Collection';
import Header from './Header';

class Shelf extends Component {
  render() {
    const { title, books, onUpdateShelf } = this.props
    return (
      <div className="bookshelf" key={title}>
        <Header title={title}/>
        <Collection
          books={books}
          onUpdateShelf={onUpdateShelf}
       />
      </div>
      )
  }
}

export default Shelf
