import React, { Component } from 'react';

class GifList extends Component {
  constructor(){
    super()
  }



  render() {
    return (
      <div>
        <ul>
          {/* <li>
            <img src={ this.props.gifs[0] }/>
          </li>
          <li>
            <img src={ this.props.gifs[1] }/>
          </li>
          <li>
            <img src={ this.props.gifs[2] }/>
          </li> */}

          { this.props.gifs.map(gif => <li><img src={ gif } /></li>) }

        </ul>
      </div>
    );
  }
}

export default GifList;
