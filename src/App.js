import React, {Component} from 'react';
import './App.css';

import Movie from "./Movie"

class App extends Component {
  state = {
    movies : [],
  }

  async componentDidMount(){
    try{
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3fd7e8eaad02da945713b598cfa29cba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await response.json();
      this.setState({
        movies : movies.results,
      })
    }catch(error){
      console.log(error)
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Movie App</h1>
          </header>
        {this.state.movies.map(film => <Movie key={film.id} movie={film}/>)}
      </div>
    );
  }
}



export default App;
