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




// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=e7vfgRJSxIrGpELviH1fviMsCxwZlUd3&rating=g

// https://api.giphy.com/v1/gifs/search?q=dog&api_key=e7vfgRJSxIrGpELviH1fviMsCxwZlUd3&rating=g

// e7vfgRJSxIrGpELviH1fviMsCxwZlUd3

// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g