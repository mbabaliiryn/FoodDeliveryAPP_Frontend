import React from 'react';
import { useSelector } from 'react-redux'


function Order() {
    // const { handleClose } = this.props;
  // const user = useSelector(state => state.authReducer.user);
  //   console.log(user, "test")
    return (
        <form className="modal-content animate" >
        <div className="imgcontainer">
          {/* <span className="close" title="Close Modal" onClick={handleClose}>&times;</span> */}
        </div>

        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
            <input type="email" placeholder="Enter Email" name="email"  required />
          </label>
          <label htmlFor="password">
            <b>Password</b>
            <input type="password" placeholder="Enter Password" name="password"  required />
          </label>
          <br />

          <button type="submit">Login</button>

        </div>
        <div className="container" style={{ background: '#f1f1f1' }} />
      </form>
    )
}

export default Order;
