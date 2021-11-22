import React from 'react';
import '../css/topBar.css';
import { logout } from '../cookie.js' //

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      display: 'none'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    logout()
    window.location.reload()
  }

  render() {
    return (
      <div className="logout-text" onClick={this.handleClick}>
      logout
      </div>
    )
  }
}

export default Logout;
