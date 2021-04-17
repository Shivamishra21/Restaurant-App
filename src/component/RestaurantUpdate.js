import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      id: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/user/" + this.props.match.params.id)
      .then((response) => {
        response.json().then((result) => {
          // console.log("RESPONSE=> ", result);
          this.setState({
            name: result.name,
            email: result.email,
            rating: result.rating,
            address: result.address,
            id: result.id,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  update() {
    fetch("http://localhost:3000/user/" + this.state.id, {
      method: "Put",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        //   console.log("Restaurant has been updated");
      });
    });
  }
  render() {
    // We are logging all the props we got from app.js
    // console.log(this.state);
    return (
      <Container>
        <h1>Restaurant Update</h1>
        <div>
          <Form.Control
            type="text"
            placeholder="Restaurant name"
            value={this.state.name}
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
          />
          <br />
       
          <Form.Control
            type="text"
            placeholder="Restaurant email"
            value={this.state.email}
            onChange={(event) => {
              this.setState({
                email: event.target.value,
              });
            }}
          />
          <br />
        
          <Form.Control
            type="text"
            placeholder="Restaurant address"
            value={this.state.name}
            onChange={(event) => {
              this.setState({
                address: event.target.value,
              });
            }}
          />
          <br />
         
          <Form.Control
            type="text"
            placeholder="Restaurant rating"
            value={this.state.rating}
            onChange={(event) => {
              this.setState({
                rating: event.target.value,
              });
            }}
          />
          <br />
         
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Submit
            </Button>{" "}
          </div>

          {/* 
          <button
            onClick={() => {
              this.update();
            }}
          >
            Update Restaurant
          </button> */}
        </div>
      </Container>
    );
  }
}

export default RestaurantUpdate;
