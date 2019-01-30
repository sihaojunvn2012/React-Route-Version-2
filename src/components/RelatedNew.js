import React, { Component } from 'react';
import { Link} from "react-router-dom";

class RelatedNew extends Component {
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
            
            <div className="card">
                <Link to={"/Detail-New/"+this.ChangeToSlug(this.props.TitleNew) +"."+this.props.ID+".html"}><img className="card-img-top img-fluid" src={this.props.ImageNew} alt="" /></Link>
                <div className="card-body">
                    <h4 className="card-title">{this.props.TitleNew}</h4>
                    <p className="card-text">{this.props.SummaryNew}</p>
                </div>
            </div>
            
        );
    }
}

export default RelatedNew;