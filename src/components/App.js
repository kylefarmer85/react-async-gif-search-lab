import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App

// My Giphy API key:
// e7vfgRJSxIrGpELviH1fviMsCxwZlUd3

// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=e7vfgRJSxIrGpELviH1fviMsCxwZlUd3