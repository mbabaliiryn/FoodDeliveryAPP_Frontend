import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
            <div className="header d-flex justify-content-center py-2 shadow-sm">
                <Link to="/">
                    <h5 className="font-weight-bold text-danger mx-3">Home Cooked Food</h5>
                </Link>
                <div className="ml-auto">
                    <Link to="./login">
                        <button className="btn btn-danger btn-sm mx-2">Login</button>
                    </Link>
                    <Link to="./register">
                        <button className="btn btn-danger btn-sm mr-5">Sign up</button>
                    </Link>
                    <button className="btn btn-danger btn-sm mx-2">Log out</button>


                </div>
            </div>
    )
}

export default Header

