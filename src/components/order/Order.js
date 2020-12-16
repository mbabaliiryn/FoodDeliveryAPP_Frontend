import React from 'react';
import { useSelector } from 'react-redux'


function Order() {
  // const user = useSelector(state => state.authReducer.user);
  //   console.log(user, "test")
    return (

        <div class="form-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
            <h1>Login</h1>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit" class="btn">Login</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </form>
        </div>
    )
}

export default Order;
