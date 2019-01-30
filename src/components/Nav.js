import React, { Component } from 'react';
import { Route, Link} from "react-router-dom";
import menus from '../Menus/menus';



const MenuLink = ({label,to,activeOnlyWhenExact}) =>{
    return (
        <Route
            path={to}     
            exact={activeOnlyWhenExact}
            children ={({ match })=>{

               return (
                <li className={match ?"Active nav-item":"nav-item"}>
                    <Link to={to}>{label}</Link>
                </li>
               )
            } 
        
        }
        
        />


    )
}



class Nav extends Component {

    showMenus =(menus) => {
     var result = null;   
        if(menus.length > 0){

         result= menus.map((value,index)=>{

                  return (

                   <MenuLink key={index}  label={value.name} to={value.to} activeOnlyWhenExact={value.exact}/> 

                  )
             });
        }
        console.log(result);
        return result;
    }

    render() {
        console.log(menus.length);
        return (
            <div>
                {/* begin menu */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                            {/* <NavLink to="/">React Router</NavLink> */}
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                           <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {
                                    this.showMenus(menus)
                                    
                                    
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end Menu */}

            </div>
        );
    }
}

export default Nav;