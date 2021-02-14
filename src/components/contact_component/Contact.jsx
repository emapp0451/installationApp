import React, { Component } from 'react'

export default class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "a",
            firstName: "a",
            lastName: "a",
            email: "a",
            phone: "a",
            message: "a",
            contactName: "a",
        };
    }
    handleFirstName = (event) => {
        this.setState ( { firstName: event.target.value })
     }
     handleLastName = (event) => {
        this.setState ( { lastName: event.target.value })
     }
     handleEmail = (event) => {
        this.setState ( { email: event.target.value })
     }
     handlePhone = (event) => {
        this.setState ( { phone: event.target.value })
     }
     handleMessage = (event) => {
        this.setState ( { message: event.target.value })
     }
     handleSubmit = (event) => {
        alert("Thank you for the Feedback !")
        fetch('/test/persistContact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contactName: this.state.firstName + this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message
            })
})
        
    }
    render(){
        return(
            <div>
                <div className="pb-sm-5">
                <section className="bg-light">
                 <div className="container">
                         <form id="contact-form" method="post">
                            <div class="messages"></div>
                            <div class="controls">
                            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions or any thing to say? Please do not hesitate to contact us or post.</p>


                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_name">Firstname *</label>
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." onChange={this.handleFirstName} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_lastname">Lastname *</label>
                                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." onChange={this.handleLastName} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_email">Email *</label>
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." onChange={this.handleEmail} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_phone">Phone</label>
                                            <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone" onChange={this.handlePhone} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_message">Message *</label>
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message." onChange={this.handleMessage} ></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <a className="btn btn-success btn-send" href="/home" onClick={this.handleSubmit} role="button" >Submit</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </section>
                    </div>
                    <footer className="footer fixed-bottom font-small bg-light">
                        <div className="panel panel-primary">
                        <div class="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                        Happy Install
                        </div>
                        </div>
                    </footer>
                 </div>
        )
    }
}