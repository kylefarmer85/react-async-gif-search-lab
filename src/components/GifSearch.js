import React, { Component } from 'react';


class GifSearch extends Component {
  constructor(){
    super()
      this.state = {
        search: ''
      }
    }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.search)
    this.setState({
      search: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>

      </div>
    );
  }
}

export default GifSearch;
