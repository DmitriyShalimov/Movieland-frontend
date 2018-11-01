import React, {PureComponent} from "react";
import './style.css'

export default class Movie extends PureComponent {

    render() {
        const {movie} = this.props;
        return (
            <div>
                <div className="poster">
                    <img width="140" height="209" src={movie.picturePath} alt="poster"/>
                    <div className="descr">
                        <p>Название: {movie.nameRussian} / {movie.nameNative} </p>
                        <p>Год выпуска: {movie.yearOfRelease} </p>
                        <p>Рейтинг: {movie.rating} </p>
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
