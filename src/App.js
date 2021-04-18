import "./App.css";
import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantUpdate from "./component/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList";
import RestaurantSearch from "./component/RestaurantSearch";
import Login from "./component/Login";
import Home from "./component/Home";
import Logout from "./component/Logout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Protected from "./component/Protected";
function App() {
  return (
    <div className="App">
      <Router>
        <Protected path="/list" component={RestaurantList} />
        <Protected path="/create" component={RestaurantCreate} />
        {/* We are passing all the props we got by ...props */}
        {/* We will get id under in match->params->id */}
        <Protected path="/update/:id" component={RestaurantUpdate} />
        <Protected path="/search" component={RestaurantSearch} />
        <Route path="/login" render={(props) => <Login {...props} />}></Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Protected exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
