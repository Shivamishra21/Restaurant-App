import React, { Component } from "react";
import RestaurantNavbar from "./RestaurantNavbar";
import { Form, Container, Button } from "react-bootstrap";
// login with mock API
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: null,
    };
  }
  login() {
    fetch("http://localhost:3000/login?q=" + this.state.name, {
      method: "Get",
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        if (result.length > 0) {
          localStorage.setItem("login", JSON.stringify(result));
          console.warn(this.props.history.push("list"));
        } else {
          alert("Please fill all the fields correctly");
        }
      });
    });
  }
  render() {
    return (
      <div>
        <RestaurantNavbar />
        <Container>
          <h1>Login</h1>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <br />
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <br />
          <div className="mb-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                this.login();
              }}
            >
              Login
            </Button>{" "}
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
