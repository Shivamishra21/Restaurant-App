import React from "react";
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
      <div>
        <h1>Restaurant Create</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
            placeholder="Restaurant name"
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
          />{" "}
          <br />
          <br />
          <button
            onClick={() => {
              this.create();
            }}
          >
            Add Restaurant
          </button>
        </div>
      </div>
    );
  }
}
export default RestaurantCreate;
