import React, { Component } from 'react'

 export class MovieList extends Component {
    constructor(props) {
      super(props)

      this.state = {
        movies: []
      }
    }

    populateMovies() {
      fetch("http://www.omdbapi.com/?s=batman&apikey=9c92f8bb")
      .then((response) => response.json())
      .then((json) => {

        this.setState({
          movies : json.Search
        })

      })
    }

    componentWillMount() {
      this.populateMovies()
      console.log('HI',this.state.movies)

    }

    onHandleOpenDetails = (movieID) => {
      let url = 'http://www.omdbapi.com/?i=' + movieID + '&apikey=9c92f8bb'
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          movie: json
        })
      })
    }

  render() {

    let movieItems = this.state.movies.map((movie) => {
      return (
        <li key = {movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} />
          <button onClick={()=> this.onHandleOpenDetails(movie.imdbID)}>Details</button>
        </li>
      )
    })
    console.log(movieItems)
    return (
      <div>
        <ul>
          {movieItems}
        </ul>
      </div>
    )
  }
}
