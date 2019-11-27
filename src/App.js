import React, {Component} from 'react';
import './App.css';

import Movie from "./Movie"

const movies = [
  {
    id:1,
    title:"Tommy Boy",
    desc: "Comedy"
  },
  {
    id:2,
    title: "Star Wars",
    desc: "Space movie"
  },
  {
    id:3,
    title: "Forrest Gump"
  },
  {
    id:4,
    title: "Pineapple Express"
  }
]


class App extends Component {


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Movie App</h1>
          </header>
        {movies.map(film => <Movie key={film.id} movie={film} desc={film.desc}/>)}
      </div>
    );
  }
}



export default App;
