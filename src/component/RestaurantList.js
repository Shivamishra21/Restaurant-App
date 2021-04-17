import React, { Component } from "react";
import { Table } from "react-bootstrap";

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: Array(),
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/user")
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          this.setState({
            list: result,
          });
        });
      })
      .catch((err) => {
        console.log("There is some issue in API calling ", err);
      });
  }
  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Rating</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.name} </td>
                    <td>{item.address}</td>
                    <td> {item.rating}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
