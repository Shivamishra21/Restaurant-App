import React, { Component } from "react";
import { Table,Form,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch: "",
    };
  }
  search(item) {
    this.setState({ lastSearch: item });
    fetch("http://localhost:3000/user?q=" + item, { method: "Get" }).then(
      (response) => {
        response.json().then((result) => {
          //manipulating the value of state variable
          console.log("Length = ", result.length);
          if (result.length > 0) {
            this.setState({
              searchData: result,
              noData: false,
            });
          } else {
            this.setState({
              noData: true,
              searchData: null,
            });
          }
        });
      }
    );
  }
  delete(id) {
    fetch("http://localhost:3000/user/" + id, { method: "Delete" }).then(
      (response) => {
        response.json().then((result) => {
          // console.log(" ")
          this.search(this.state.lastSearch);
        });
      }
    );
    
  }
  render() {
    return (
   <Container>
        <h1>Restaurant Search</h1>
        <div>
          {" "}
          {/* <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              this.search(event.target.value);
            }}
          ></input> */}
          <Form.Control type="text" placeholder="Search" onChange={(event) => {
              this.search(event.target.value);
            }} />
        </div>
        <br />
        <br />

        <div>
          {this.state.searchData ? (
            <div>
              {
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
                    {this.state.searchData.map((item) => (
                      <tr>
                        <td>{item.name} </td>
                        <td>{item.address}</td>
                        <td> {item.rating}</td>
                        <td>{item.email}</td>
                        <td>
                          <Link to={"/update/" + item.id}>
                            {"    "}
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>
                          <span
                            onClick={() => {
                              this.delete(item.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} color="red" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              }
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h4>No item found</h4> : ""}
          {/* showing "no item found" when it does not matches and nothing when nothing is types in search box */}
        </div>
        </Container>
    );
  }
}

export default RestaurantSearch;

// {
//     this.state.searchData?<div>{
//         this.state.searchData.map((item)=><div>{item.name}</div>)
//     }
//     </div>:""
// }{

//     this.state.noData?<h4>No item found</h4>:""
// // }
