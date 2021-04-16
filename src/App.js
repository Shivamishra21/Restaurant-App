import "./App.css";

import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantUpdate from "./component/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList";
import RestaurantSearch from "./component/RestaurantSearch";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
        <Route path="/list">
          <RestaurantList/>
        </Route>
        <Route path="/create">
          <RestaurantCreate/>
        </Route>
        <Route path="/update">
          <RestaurantUpdate/>
        </Route>
        <Route path="/search">
          <RestaurantSearch/>
        </Route>
        <Route path="/detail">
          <RestaurantDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
