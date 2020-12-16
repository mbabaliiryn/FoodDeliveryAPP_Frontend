import React, { useState } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useSelector, useDispatch } from 'react-redux';
import filterByIngredients from '../../redux/actions/filterByIngredients'



function Menu() {
  const ingredient = useSelector(state => state.ingredient);
  console.log(ingredient,"ingredients")
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value)

  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filterByIngredients(input));
    
  }
  

    return (
      <div>
          <Header/>
          <div className="menu-container bg-success">
          <div className="home-main-order d-flex ">
        <form className="d-flex justify-content-center  p-5"
        onSubmit = {handleSubmit}
        >
          <div className="form-group m-0">
            <input type="text" className="form-control search-from-control" placeholder="Your favourite food"
             onChange={handleChange}
             value={ingredient}
            />
          </div>
          <button type="submit" className="ml-2 btn btn-danger btn-sm ">Search</button>

        </form> 

          <button className="btn btn-secondary btn-sm ml-0 mt-5">Drop your order</button>      

      </div>

      <div className="menu-body p-10">

<div class="row row-cols-1 row-cols-md-3 g-4">

<div class="col">
<div class="card mb-4">
  <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
</div>
</div>


</div>
  
<div className="menu-body ">

<div class="row row-cols-1 row-cols-md-3 g-4">

<div class="col">
<div class="card mb-4">
  <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
</div>
</div>


</div>
  

      <div className="menu-body">

      <div class="row row-cols-1 row-cols-md-3 g-4">
 
    <div class="col">
      <div class="card">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-413x275.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
</div>


</div>
</div>
         
            <Footer/>
      </div>
    )
}

export default Menu;
