
import React from 'react';
import '../css/topBar.css';
import {withRouter} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href='/login/';
  }

  render() {
    return (
      <div className="login-text" style={{display: "inline-block", position: "relative"}} onClick={this.handleClick}>
        Log in
      </div>
    )
  }
}

export default withRouter(Login);
