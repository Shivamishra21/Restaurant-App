import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom"

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: Array(),
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/user",{method:"Get"})
      .then((response) => {
        response.json().then((result) => {
       //   console.log(result);
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
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.name} </td>
                    <td>{item.address}</td>
                    <td> {item.rating}</td>
                    <td>{item.email}</td>
                    <td><Link to ={"/update/"+item.id}>Edit</Link></td>
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
