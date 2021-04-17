import React, { Component } from "react";

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      id:null
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
            id:result.id
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  update(){
    fetch("http://localhost:3000/user/"+this.state.id, {
        method: "Put",
        headers:{
          'content-Type':'application/json'
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
      <div>
        <h1>Restaurant Update</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
            placeholder="Restaurant name"
            value={this.state.name}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({
                email: event.target.value,
              });
            }}
            placeholder="Restaurant Email"
            value={this.state.email}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({
                address: event.target.value,
              });
            }}
            placeholder="Restaurant Location"
            value={this.state.address}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({
                rating: event.target.value,
              });
            }}
            placeholder="Restaurant rating"
            value={this.state.rating}
          />{" "}
          <br />
          <br />
          <button
            onClick={() => {
              this.update();
            }}
          >
            Update Restaurant
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantUpdate;
