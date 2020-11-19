import React, { Component } from 'react';

class GifList extends Component {
  constructor(){
    super()
  }



  render() {
    return (
      <div>
        <ul>
          <li>
            <img src={ this.props.gifs[0] }/>
          </li>
          <li>
            <img src={ this.props.gifs[1] }/>
          </li>
          <li>
            <img src={ this.props.gifs[2] }/>
          </li>
        </ul>
      </div>
    );
  }
}

export default GifList;
