import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { LogOutAuthAction } from '../../redux/actions/AuthAction';

function Header(props) {
    const user = localStorage.user;
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    console.log(auth);

    const logout = history => {
        dispatch(LogOutAuthAction(history));
    }
    console.log(user,"user")
        return (
            <div className="header d-flex justify-content-center py-2 shadow-sm">
                <Link to="/">
                    <h5 className="font-weight-bold text-danger mx-3"> FoodDeliveryApp</h5>
                </Link>
                <div className="ml-auto d-flex">
                    {!auth.isLoggedIn ? (
                    <React.Fragment>
                        <Link to="./login">
                        <button className="btn btn-danger btn-sm mx-2">Login</button>
                    </Link>
                    <Link to="./register">
                        <button className="btn btn-danger btn-sm mr-5">Register</button>
                    </Link>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        <h5>{user.email}</h5>
                        <button className="btn btn-danger btn-sm mx-2" onClick={() => logout(history)}>Log out</button>

                    </React.Fragment>
                    )}

                </div>
            </div>
    )
}


export default Header;

