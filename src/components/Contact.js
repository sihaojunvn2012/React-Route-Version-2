import React, { Component } from 'react';
import { Redirect } from "react-router-dom";



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            Name: "",
            Email: "",
            Phone: "",
            Text: ""


        }
    }
    isChange = (event) => {
        const Name = event.target.name;
        const Value = event.target.value;
        this.setState({
            [Name]: Value
        });
    }
    SubmitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true,

        });
    }
    Getvalue = () => {
        let Content = "";
        Content += " Name: " + this.state.Name;
        Content += "\ Email: " + this.state.Email;
        Content += "\ Phone Number: " + this.state.Phone;
        Content += "\ Message: " + this.state.Text;
        return Content;
    }
    render() {
        if (this.state.isRedirect === true) {
            console.log(this.Getvalue());
            return <Redirect to="/" />
        }

        return (
            <div>
                {/* Header */}
                <header className="masthead News">
                    <div className="container h-100">
                        <div className="row h-100">
                            <h1 className="content-header">CONTACT</h1>
                        </div>
                    </div>
                </header>
                {/* Contact */}
                <section id="contact">
                    <div className="container">
                        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input name="Name" onChange={(event) => this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input name="Email" onChange={(event) => this.isChange(event)}  className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input name="Phone" onChange={(event) => this.isChange(event)}  className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea name="Text" onChange={(event) => this.isChange(event)}  className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" />
                                    <div className="form-group">
                                        <button type="submit" onClick={(event) => this.SubmitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Contact  */}
            </div>
        );
    }
}

export default Contact;