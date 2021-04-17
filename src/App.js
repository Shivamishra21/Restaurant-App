import "./App.css";
import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantUpdate from "./component/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList";
import RestaurantSearch from "./component/RestaurantSearch";
import Home from "./component/Home";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusSquare,
  faListAlt,
  faSearch,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

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
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">
                  <FontAwesomeIcon icon={faPlusSquare} /> Create{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  <FontAwesomeIcon icon={faListAlt} /> List{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  <FontAwesomeIcon icon={faSearch} /> Search{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login{" "}
                </Link>
              </Nav.Link>
              
              {/* <Nav.Link href="#link">
                <Link to="/update"><FontAwesomeIcon icon={faPenSquare} color="black"/></Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        {/* We are passing all the props we got by ...props */}
        {/* We will get id under in match->params->id */}
        <Route
          path="/update/:id"
          render={(props) => <RestaurantUpdate {...props} />}
        ></Route>
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
