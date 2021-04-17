import React from "react";
import { Table,Container,Form,Button } from "react-bootstrap";
class RestaurantCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      email: null,
      rating: null,
    };
  }
  create() {
    fetch("http://localhost:3000/user", {
      method: "Post",
      headers:{
        'content-Type':'application/json'
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }
  render() {
    return (
      <Container>
        <h1>Restaurant Create</h1>
        <div>
          <Form.Control
            type="text"
            placeholder="Restaurant name"
        
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
          
            onChange={(event) => {
              this.setState({
                rating: event.target.value,
              });
            }}
          />
          <br />
         
          <div className="mb-2">
            <Button variant="primary" size="lg" onClick={()=>this.create()}>
              Add Restaurant
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
export default RestaurantCreate;
