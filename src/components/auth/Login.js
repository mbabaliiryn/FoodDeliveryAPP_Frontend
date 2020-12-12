
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { LoginAuthAction } from '../../redux/actions/AuthAction';
import Header from '../layout/Header';
import Footer from '../layout/Footer'


function Login(props) {
    // const {login} = props;
    // const [loginState, setLoginState] = useState({});
    // const history = useHistory;
     // const { user, register } = props;
     const history = useHistory();
     const [userState, setUserstate] = useState({});
     const [email, setEmail] =useState("");
     const [password, setPassword] =useState("");
   
 
     const dataSubmit = (event) => {
         event.preventDefault();
         console.log(email,password);
         console.log("errtrtrtr");
 
     }
 

    return (
        <div>
            <Header/>
            <form 
            onSubmit={(event) => {
                dataSubmit()

            }}
           
            >
            <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register to get started</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label htmlFor="Email">Email</label>

                                <input type="text" className="form-control" placeholder="Your Email*"
                                 value={email}
                                 onChange= {
                                     (e) => setEmail(e.target.value)
                                 }
                                 />
                            </div>
                            <div className="form-group">
                            <label htmlFor="Password">Password</label>

                                <input type="text" className="form-control" placeholder="Password *"
                                value={password}
                                onChange= {
                                    (e) => setPassword(e.target.value)
                                }
                                />
                            </div>
                           
                        </div>
                      
                    </div>
                    <button type="submit" className="btnSubmit">Submit</button>
                </div>
                
            </div>
        </div>
            </form>
            <Footer/>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, history) => {
            dispatch(LoginAuthAction(loginState, history))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);