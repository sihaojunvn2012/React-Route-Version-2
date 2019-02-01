import React, { Component } from 'react';
import Data from './Data.json';
import ContentNew from './ContentNew';
import RelatedNew from './RelatedNew';
import {PropTypes} from 'prop-types';
import {Get_Data_New_To_Store} from '../Actions/Action';
import {connect } from 'react-redux';





const propTypes = {

    Get_Data_New : PropTypes.func.isRequired    


} 
const defaultProps = {

    Get_Data_New : () =>{}

}
class DetailNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Check: false
        }
    }
    render() {
        let count = 0;
        return (
            <div>
                {/* Header */}
                <header className="masthead News">
                    <div className="container h-100">
                        <div className="row h-100">
                            <h1 className="content-header">DETAIL NEW</h1>
                        </div>
                    </div>
                </header>
                {/* Content News */}
                {
                    Data.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {

                            var result = value ? value : '';    
                                this.props.Get_Data_New(result);
                            return (
                                <ContentNew key={key}/>
                                );
                        }

                    })
                }

                {/* End Conent News */}
                {/* Related News */}
                <div className="container">
                    <div className="text-center">
                        <div className="card-body">
                            <h4 className="card-title">Related News</h4>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                                {
                                    Data.map((value, key) => {

                                        if (value.id !== parseInt(this.props.match.params.id)) {
                                            if (count <= 3) {
                                                count++;
                                                console.log(count);
                                                return (
                                                    <RelatedNew key={key} ID={value.id} ImageNew={value.Image} TitleNew={value.Title} SummaryNew={value.Summary} ></RelatedNew>)

                                            }
                                        }

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
DetailNew.propTypes = propTypes;
DetailNew.defaultProps = defaultProps; 




const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Get_Data_New: (Data_New) => {
            dispatch(Get_Data_New_To_Store(Data_New))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailNew)

