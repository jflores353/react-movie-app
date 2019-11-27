import React, { Component } from "react";

const POSTER_PATH = "https://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=3fd7e8eaad02da945713b598cfa29cba&language=en-US`
      );
      const movie = await response.json();
      this.setState({
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
      const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
