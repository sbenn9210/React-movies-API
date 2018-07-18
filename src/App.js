import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieList } from './components/MovieList'
import { Search } from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)


  }


  render() {
    return (
      <div className="App">
        <Search  />
        <MovieList  />
      </div>
    );
  }
}

export default App;
