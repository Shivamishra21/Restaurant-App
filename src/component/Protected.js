import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
const Protected = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) => 
      localStorage.getItem("login") ? (
        <Cmp {...props} />)
       : 
        <Redirect to="/login" />
      
    }
  ></Route>
)

export default Protected;
