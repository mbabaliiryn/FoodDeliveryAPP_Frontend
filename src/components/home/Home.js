import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useSelector } from 'react-redux'


function Home() {
  // const user = useSelector(state => state.authReducer.user);
  //   console.log(user, "test")
    return (
        <div>
         <Header></Header>
      <div className="home-main">
        <form className="d-flex justify-content-center  p-5">
          <div className="form-group m-0">
            <input type="text" className="form-control search-from-control" placeholder="Enter delivery address"/>
          </div>
          <button type="submit" className="ml-2 btn btn-danger btn-sm ">Search</button>
        </form>
      </div>
      <Footer></Footer>
        </div>
    )
}

export default Home
