
import React from 'react';
import '../css/topBar.css';
import {withRouter} from "react-router-dom";
import Logout from './Logout.js'

class Logged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      display: 'none'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none': 'block'
    }));
  }

  render() {
    const loginUser = this.props.loginUser
    return (
      <div className="logged-text" style={{ display: "inline-block",position: "relative" }} onClick={this.handleClick} >
        {loginUser}
        <span className="caret" ></span>
        <span className="login-more-dropdown" style={{display: this.state.display}}>
          <Logout />
        </span>
      </div>
    
    )
  }
}

export default withRouter(Logged);
