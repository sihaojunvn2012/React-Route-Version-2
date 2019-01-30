import React, { Component } from 'react';

class Not_Found extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Oops! Nothing was found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <a href="#">Return to homepage</a></p>
                    <div className="notfound-social">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-pinterest" /></a>
                        <a href="#"><i className="fab fa-google-plus" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Not_Found;