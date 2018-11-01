import React, {PureComponent} from "react";

import genres from '../genres'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header/index";
import GenreList from "./GenreList";
import 'jquery/dist/jquery.js'

class App extends PureComponent {
    render() {
        return (
            <div className="container">
                <Header/>
                <GenreList genres={genres}/>
            </div>
        )
    }
}

export default App