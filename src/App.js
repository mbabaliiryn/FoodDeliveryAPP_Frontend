import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import Menu from './components/menu/Menu';
import Order from './components/order/Order';
import CategoryList from './containers/categoryList';
import MealList from './containers/mealList';
import SingleDish from './containers/singleDish';
// import NotFound from './components/errors/notFound'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>

          </Route>
          <Route exact path="/login">
          <Login></Login>

          </Route>

          <Route exact path="/register">
          <Register></Register>

          </Route>
          <Route exact path="/menu">
          <Menu></Menu>
          </Route>
          <Route exact path="/" component={CategoryList} />
      <Route exact path="/search/:ingredient" component={MealList} />
      <Route exact path="/:categoryType" component={MealList} />
      <Route exact path="/search/:ingredient/:mealID" component={SingleDish} />
      <Route exact path="/:categoryTpe/:mealID" component={SingleDish} />
      {/* <Route component={NotFound} /> */}

          
        </Switch>
      </Router>
    
     
    </div>
  );
}

export default App;
