import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function Register() {
    return (
        <div>
            <Header/>
            <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register to get started</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="FirstName">First Name</label>
                                <input type="text" className="form-control" placeholder="First Name *" value=""/>
                            </div>
                            <div className="form-group">
                            <label for="LastName">Last Name</label>

                                <input type="text" className="form-control" placeholder="Last Name*" value=""/>
                            </div>
                            <div className="form-group">
                            <label for="ConfirmPassword">Confirm Password</label>

                                <input type="text" className="form-control" placeholder=" Password *" value=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label for="Email">Email</label>

                                <input type="text" className="form-control" placeholder="Your Email*" value=""/>
                            </div>
                            <div className="form-group">
                            <label for="Password">Password</label>

                                <input type="text" className="form-control" placeholder="Password *" value=""/>
                            </div>
                           
                        </div>
                    </div>
                    <button type="button" className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
            <Footer/>
            
        </div>
    )
}

export default Register
