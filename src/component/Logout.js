import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  {Redirect} from 'react-router-dom'
import RestaurantNavbar from "./RestaurantNavbar";
const Logout =()=>{
    localStorage.clear();
    return <Redirect to="/login"/>
};

export default Logout;