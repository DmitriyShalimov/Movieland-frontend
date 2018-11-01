import React, {Component} from "react";
import './style.css'
import MovieList from "../MovieList";
import movies from "../../movies";

export default class GenreList extends Component {
      render() {
        const genreElements = this.props.genres.map((genre) =>
            <div key={genre.id} className="container">
                <div className="row">
                    <h1>{genre.title}</h1>
                    <MovieList movies={movies} genreId={genre.id}/>
                </div>
            </div>
        );
        return (
            <div>
                {genreElements}
            </div>
        )
    }
}