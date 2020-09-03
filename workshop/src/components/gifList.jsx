import React, { Component } from 'react';
import Gif from "./gif";

// eslint-disable-next-line import/prefer-default-export, react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    const { ids, changeSelectedGif } = this.props;
    return (
      <div className="gif-list">
        { ids.map(id => <Gif id={id} key={id} changeSelectedGif={changeSelectedGif} />) }
      </div>
    );
  }
}
