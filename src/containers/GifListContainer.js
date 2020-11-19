import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  onSubmit = (searchTerm) => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
  
    fetch(url)
    .then(resp => resp.json()) 
    .then(({data}) => { 
      let gifs = data.map(datum => datum.images.original.url)

      this.setState({
        gifs: gifs
      })
    })
  }


  render() {
    return (
      <div>
        <GifSearch onSubmit={this.onSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }



}



export default GifListContainer;
