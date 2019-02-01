import React, { Component } from 'react';
import NewItems from './NewItems';
import Data from './Data.json';
import {connect} from 'react-redux';
import {Get_Data} from '../Actions/Action';
import {PropTypes} from 'prop-types';

const propTypes = {

    On_Get_Data : PropTypes.func.isRequired,



} 
const defaultProps = {

    On_Get_Data : ()=>{}

}



class News extends Component {

    componentWillMount = () => {
      

        this.props.On_Get_Data(Data);
    }
    



    render() {
        console.log(this.props.location);    
        return (
            <div>
                {/* Header */}
                <header className="masthead News">
                    <div className="container h-100">
                        <div className="row h-100">
                            <h1 className="content-header">NEWS LIST</h1>
                        </div>
                    </div>
                </header>
                {/* Content News */}
                <section>
                    <div className="container">
                        
                            <div className="row">
                                

                                {
                                   this.props.Data.map((value, key) => {
                                        return (
 
                                            <NewItems key={key} image={value.Image} title={value.Title} summary={value.Summary} ID={value.id} ></NewItems>

                                        );
                                    })
                                }
                            </div>                       
                    </div>
                </section>
                {/* End Content  */}
            </div>
        );
    }
}
News.propTypes =propTypes;
News.defaultProps =defaultProps;  

    const mapStateToProps = (state, ownProps) => {
        return {
            Data : state.Data
        }
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            On_Get_Data: (Data) => {
                dispatch(Get_Data(Data))
            }
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(News)