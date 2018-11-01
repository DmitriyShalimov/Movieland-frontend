import React, {PureComponent} from "react";
import './style.css'
import logo from "./logo.png";

export default class Header extends PureComponent {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="navbar-header">
                        <a href="/" className="float-left  d-none d-md-block">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    </div>
                </nav>
            </header>
        )
    }
}

