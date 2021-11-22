import React from 'react';
// import { Link } from 'react-router-dom'
import './css/login.css';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Container, Row, Col } from 'reactstrap';
import { onLogin } from './cookie.js' // 引入
import { Login } from "./axios/api";

class LoginPage extends React.Component {
  constructor(props) {
      super(props);
      const eventsArr = [
        //按钮点击事件
        "onSignIn",
        //user name输入改变
        "onChangeName",
        //password输入改变
        "onChangePwd"
      ];
      //一次性绑定所有事件，这样以后添加的事件只要添加到eventArr数组里面就好了
      eventsArr.map((ev) => {
          this[ev] = this[ev].bind(this);
          return "";
      });

      this.state = {
          name: '',
          pwd: '',
          errorMsg:'',
          id:"",
          avatarUrl:""
      };
    }

    onSignIn() {
      const keyword = this.props.match.params[0];      
      Login(this.state.name,this.state.pwd).then(res => {
        console.log(res.success)
        if(res.success === true) {
          this.setState({
            id: res.data.id,
            avatarUrl: res.data.avatarUrl
          })
          onLogin(this.state.name,this.state.pwd,this.state.id,this.state.avatarUrl)
          if(keyword!=""){
            window.location.href='/'+keyword;
          }else{
            window.location.href='/home';
          }
        }else{
          this.setState({
            errorMsg: "Incorrect username or password."
        });
        }
      },(error) =>{
      })      
    }
    onChangeName(event, value) {
      this.setState({ name: value });
      this.setState({ errorMsg: '' });
  }

  onChangePwd(event, value) {
      this.setState({ pwd: value });
  }

  
  render() {
    return (
      <div>{

            <Container className="signin-body">
                  <Row>
                      <Col md={{ size: 4, offset: 4 }}>
                          <div className="signin-content">
                              <TextField label="User Name" Value={this.state.name} errorMessage={this.state.errorMsg} onChange={this.onChangeName} />
                              <TextField label="Password" value={this.state.pwd} type="Password" onChange={this.onChangePwd} />
                              <DefaultButton className="signin-button" text="Sign In" onClick={this.onSignIn} />
                          </div>
                      </Col>
                  </Row>
            </Container>
            }
      </div>
      
      
      
    );
  }
}

export default LoginPage