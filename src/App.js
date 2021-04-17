import "./App.css";

import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantUpdate from "./component/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList";
import RestaurantSearch from "./component/RestaurantSearch";
import Home from "./component/Home";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">Create</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">List</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">Search</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/update">Update</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/update">
          <RestaurantUpdate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/detail">
          <RestaurantDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
