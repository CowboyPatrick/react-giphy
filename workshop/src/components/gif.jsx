import React, { Component } from 'react';

// eslint-disable-next-line import/prefer-default-export, react/prefer-stateless-function
export default class Gif extends Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
  }

  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={url} alt="sweet gifs" className="gif" onClick={this.handleClick} />
    );
  }
}
