import React, { Component } from 'react';
import {connect} from 'react-redux';
class ContentNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src={this.props.Infortion_New.Image} alt="" className="img-fluid mb-5 image" />
                    <p className="lead">{this.props.Infortion_New.Title}</p>
                    <hr className="my-2" />
                    <p>{this.props.Infortion_New.Content}</p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       Infortion_New : state.Detail_New 
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentNew)