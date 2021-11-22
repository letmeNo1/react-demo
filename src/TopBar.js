import React from 'react';
import './css/topBar.css';
import {withRouter} from "react-router-dom";
import Login from "./TopBar/Login.js"
import Logged from "./TopBar/Logged.js"

import  {loginUser} from './cookie.js' // 引入


class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName:"null"
    }
  }

  componentDidMount(){
    this.setState({userName:loginUser()})
  }

  render() {
    return (
      <div className = "top-bar">
        <h2 style = {{display: "inline-block",color:"#135b9e"}}>R</h2>
        <h2 style = {{display: "inline-block",color:"#f87100"}}>C</h2>
        <h2 style = {{display: "inline-block",marginLeft:"5px"}}>Decoder</h2>
        {/* <h2 style = {{display: "inline-block",marginLeft:"1200px"}}>       </h2> */}
        <div className = "login" style = {{display: "inline-block",float: "right",maxWidth:"100px",wordWrap:"break-word"}}>
        {
           this.state.userName===undefined?<Login />:<Logged loginUser = {this.state.userName} />
        }
       </div>
       {/* <span>1</span>
    <span>5</span> */}

  
      </div>
    );
  }
}

export default withRouter(TopBar);
