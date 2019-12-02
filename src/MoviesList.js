import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";

class MoviesList extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=3fd7e8eaad02da945713b598cfa29cba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await response.json();
      this.setState({
        movies: movies.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1 rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1 rem;
`;
