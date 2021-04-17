import React, { Component } from "react";
import { Table,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: Array(),
    };
  }
  componentDidMount() {
    this.getData()
  }
  getData(){
    fetch("http://localhost:3000/restaurant", { method: "Get" })
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
  delete(id){

    fetch("http://localhost:3000/restaurant/"+id,{method:'Delete'}).then((response)=>{
      response.json().then((result)=>{
        // console.log(" ")
      })
    })
    this.getData()
  }
  render() {
    return (
      <Container>
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
                    <td>
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} />{"       "}
                      </Link>
                      {/* <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faTrashAlt} color="red" />
                      </Link> */}
                      <span onClick={()=>{this.delete(item.id);}}><FontAwesomeIcon icon={faTrashAlt} color="red"/></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        </Container>
    );
  }
}

export default RestaurantList;
