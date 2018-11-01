import React, {PureComponent} from "react";
import Movie from '../Movie/index'
import './style.css'

export default class MovieList extends PureComponent {

    render() {
        const {genreId} = this.props;
        const matchingMovies = this.props.movies.filter(movie => movie.genres.filter(genre => genre.id === genreId).length);

        const movieElements = matchingMovies.map((movie) =>
            <div key={movie.id} className="col-md-2">
                <Movie movie={movie}/>
            </div>);
        return (
            <div className="container">
                <div className="row">
                    {movieElements}
                </div>
            </div>
        )
    }
}