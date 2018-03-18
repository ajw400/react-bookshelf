import React, { Component } from 'react';

class Header extends Component {
  render () {
    const { title } = this.props
    return (
      <h2 className="bookshelf-title">
        {title}
      </h2>
    )
  }
}

export default Header
