import React, { Component } from 'react';

import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gifList";


// eslint-disable-next-line import/prefer-default-export, react/prefer-stateless-function
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "EI5Iaaj0dz0Dm",
      gifList: ["B1CrvUCoMxhy8", "RJ2V1d17Eqvcc"]
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedGif: newId
    });
  }


  render() {
    const { selectedGif, gifList } = this.state
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={gifList}
            changeSelectedGif={this.changeSelectedGif}
          />
        </div>
      </div>
    );
  }
}
