import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Check_Login } from '../Actions/Action';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name_Account: '',
            Password: ''

        }

    }


    isChange = (event) => {
        const Name = event.target.name;
        const Value = event.target.value;
        this.setState({

            [Name]: Value

        });

    }
    ClearUp = () => {

        this.setState({

            Name_Account: '',
            Password: ''
        });


    }

    isSubmit = (event) => {
        event.preventDefault();

        if (this.state.Name_Account === 'Admin' && this.state.Password === 'Admin') {

            localStorage.setItem('User', JSON.stringify({

                Username: this.state.Name_Account,
                Password: this.state.Password

            }));

        }
        this.ClearUp();
        this.props.onChangeLogin(this.props.isCheckLogin);
    }
    HandleCheck = () => {

        console.log(this.refs.Progress1);

    }

    render() {
        var LoginUp = localStorage.getItem('User');
        if (LoginUp) {

            return <Redirect to={
                {
                    pathname: "/News",
                    state: {
                        from: this.props.location
                    }

                }
            } />


        }

        return (
            <div>
                <header className="masthead News" >
                    <div className="container h-100">
                        <div className="row h-100">
                            <h1 className="content-header"  >LOGIN</h1>
                        </div>
                    </div>
                </header>
                <div className="Login">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="card ">
                                <article className="card-body">
                                    <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                                    <hr />
                                    <p className="text-success text-center">Some message goes here</p>
                                    <form>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                                </div>
                                                <input value={this.state.Name_Account} onChange={(event) => this.isChange(event)} name="Name_Account" className="form-control" placeholder="Email or login" type="email" />
                                            </div> {/* input-group.// */}
                                        </div> {/* form-group// */}
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fas fa-key" /> </span>
                                                </div>
                                                <input value={this.state.Password} onChange={(event) => this.isChange(event)} name="Password" className="form-control" placeholder="******" type="password" />
                                            </div> {/* input-group.// */}
                                        </div> {/* form-group// */}
                                        <div className="form-group">
                                            <button onClick={(event) => this.isSubmit(event)} type="submit" className="btn btn-primary btn-block"> Login</button>
                                        </div> {/* form-group// */}
                                        <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)





