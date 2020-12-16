import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../layout/Header';
import Footer from '../layout/Footer'
import { RegisterAuthAction, AuthActionType } from '../../redux/actions/AuthAction';

function Register(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userState, setUserstate] = useState({});
    const [first_name, setFirstName] =useState("");
    const [last_name, setLastName] =useState("");
    const [email, setEmail] =useState("");
    const [password_digest, setPassword] =useState("");
  

    const dataSubmit = (event) => {
        event.preventDefault();
        const data = {
            first_name, last_name, email, password_digest
        }
        console.log(data, "data")
        dispatch(RegisterAuthAction(data, history))
        // dispatch(RegisterAuthAction(data, history))
        // console.log(first_name, last_name,email,password, confirm_password);
        
      

    }

    return (
        <div>
            <Header/>
            <form 
            onSubmit={
                dataSubmit
            }
            >
            <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register to get started</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="FirstName">First Name</label>
                                <input type="text" className="form-control" placeholder="First Name *" 
                                value= {first_name}
                                onChange= {
                                (e) => setFirstName(e.target.value)
                                }
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="LastName">Last Name</label>

                                <input type="text" className="form-control" placeholder="Last Name*"
                                value={last_name}
                                onChange= {
                                    (e) => setLastName(e.target.value)
                                }
                                />

                            </div>
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
                                value={password_digest}
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
        register: (userState, history) => {
            dispatch(RegisterAuthAction(userState, history))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
