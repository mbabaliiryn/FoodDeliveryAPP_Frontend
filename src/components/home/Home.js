import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useSelector } from 'react-redux';



function Home() {
  // const user = useSelector(state => state.authReducer.user);
  //   console.log(user, "test")
    return (
        <div>
         <Header></Header>
      <div className="home-main">
        <div className="d-flex justify-content-center  p-5">
          <p>Register to order your favorate dish</p>
          {/* <div className="div-group m-0">
            <input type="text" className="div-control search-from-control" placeholder="Enter delivery address"/>
          </div>
          <button type="submit" className="ml-2 btn btn-danger btn-sm ">Search</button> */}
        </div>
      </div>
            
<div id="demo" class="carousel slide" data-ride="carousel">


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div class="container carousel-inner no-padding">
  <div class="carousel-item active">
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}}alt="..."/>
    </div>    
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
  </div>
  <div class="carousel-item">
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>    
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg"  style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>  
  </div>
  <div class="carousel-item">
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>    
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div class="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg"  style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>  
  </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
          </div>
      <Footer></Footer>
        </div>
    )
}

export default Home
