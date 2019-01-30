import React, { Component } from 'react';

class ContentNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src={this.props.image} alt="" className="img-fluid mb-5 image" />
                    <p className="lead">{this.props.title}</p>
                    <hr className="my-2" />
                    <p>{this.props.Content}</p>
                </div>
            </div>
        );
    }
}

export default ContentNew;