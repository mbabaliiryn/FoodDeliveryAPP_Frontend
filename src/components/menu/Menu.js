import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useSelector, useDispatch } from 'react-redux';
import { showOrder } from '../../redux/actions/showOrder';
import Order from '../order/Order';
import OrderModal from '../order/OrderModal'

const dispatch = useDispatch;
const orderOpen = () => {
  dispatch(showOrder());
};

function Menu() {
  // const user = useSelector(state => state.authReducer.user);
  //   console.log(user, "test")
    return (
      <div>
          <Header/>
          <div className="home-main-order d-flex ">
        <form className="d-flex justify-content-center  p-5">
          <div className="form-group m-0">
            <input type="text" className="form-control search-from-control" placeholder="Your favourite food"/>
          </div>
          <button type="submit" className="ml-2 btn btn-danger btn-sm ">Search</button>

        </form>
        <OrderModal show={orderOpen}>
            <Order  />
          </OrderModal>
     
          <button className="btn btn-secondary btn-sm ml-0 mt-5" onClick={orderOpen}>Drop your order</button>
      

      </div>

            
<div id="demo" className="carousel slide" data-ride="carousel">


<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div className="container carousel-inner no-padding">
  <div className="carousel-item active">
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}}alt="..."/>
    </div>    
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
  </div>
  <div className="carousel-item">
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>    
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg"  style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>  
  </div>
  <div className="carousel-item">
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>    
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>   
    <div className="col-xs-3 col-sm-3 col-md-3">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg"  style={{width: '25rem', height: '25rem'}} alt="..."/>
    </div>  
  </div>
</div>


<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
          </div>
         
            <Footer/>
      </div>
    )
}

export default Menu;
