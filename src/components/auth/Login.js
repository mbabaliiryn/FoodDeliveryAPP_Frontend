import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer'


function Login() {
    return (
        <div>
            <Header/>
            <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>This is a simpleRegister Form made using Boostrap.</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label for="Email">Email</label>

                                <input type="text" className="form-control" placeholder="Your Email *" value=""/>
                            </div>
                            <div className="form-group">
                            <label for="Password">Password</label>

                                <input type="text" className="form-control" placeholder="Your Password*" value=""/>
                            </div>
                        </div>
                        
                    </div>
                    <button type="button" className="btnSubmit bg-danger">Submit</button>
                </div>
            </div>
        </div>
            
            <Footer/>
            
        </div>
    );
}

export default Login
