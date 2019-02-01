import React, { Component } from 'react';
import { Link} from "react-router-dom";
import {connect} from 'react-redux';

class NewItems extends Component {
    constructor(props) {
        super(props);
        
    }
    
    ChangeToSlug = ((str) =>{
        // Change To LowerCase
    str = str.toLowerCase();     
 
    // delete sign
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Delete Special Characters
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    //Delete Space and Charater '-'
    str = str.replace(/(\s+)/g, '-');
 
    // delete the remainder at the head
    str = str.replace(/^-+/g, '');
     // delete the remainder at the end 
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    })
    
    render() {
        return (
            
                 <div className="col-4 mt-3">
                               <div className="card-deck">
                                    <div className="card NewsItems">
                                        <Link to={"/Detail-New/"+this.ChangeToSlug(this.props.title) +"."+this.props.ID+".html"}><img className="card-img-top img-fluid" src={this.props.image} alt="" /></Link>
                                        <div className="card-body">
                                            <Link to={"/Detail-New/"+this.ChangeToSlug(this.props.title) +"."+this.props.ID+".html"}><h4 className="card-title title">{this.props.title}</h4></Link>
                                            <p className="card-text">{this.props.summary}</p>
                                        </div>
                                    </div>
                                </div>
                  </div>
           
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      dispatch1: () => {
        dispatch()
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NewItems)