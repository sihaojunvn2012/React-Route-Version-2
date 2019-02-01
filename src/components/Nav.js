import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import menus from '../Menus/menus';
import { Check_Login } from '../Actions/Action';
import { PropTypes } from 'prop-types';

const propTyes = {

    isCheckLogin: PropTypes.bool.isRequired,
    onChangeLogin: PropTypes.func.isRequired
}

const defaultProps = {

    onChangeLogin: () => { }

}

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {

                return (
                    <li className={match ? "Active nav-item" : "nav-item"}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }

            }

        />


    )
}



class Nav extends Component {

    Handle_Event_LogOut = (e) =>{
        e.preventDefault();
        if(localStorage.getItem('User')){

            localStorage.removeItem('User');
        } 
        this.props.onChangeLogin(this.props.isCheckLogin);

    }

    Handle_Login_Logout = () => {

        if (this.props.isCheckLogin === false) {

            return (

                <li className="nav-item">
                    <Link to={`${'/Login'}`}>LOGIN</Link>
                </li>

            )

        }
        return (

            <li className="nav-item">
                   <a href=""  onClick={(event) =>this.Handle_Event_LogOut(event)}>LOGOUT</a>
            </li>

        )
    }


    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {

            result = menus.map((value, index) => {

                return (

                    <MenuLink key={index} label={value.name} to={value.to} activeOnlyWhenExact={value.exact} />

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
                                {
                                     this.Handle_Login_Logout()
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

Nav.propTyes = propTyes;
Nav.defaultProps = defaultProps;
const mapStateToProps = (state, ownProps) => {
    return {
        isCheckLogin: state.isCheckLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeLogin: (CheckLogin) => {
            dispatch(Check_Login(CheckLogin))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
