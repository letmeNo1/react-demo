import React from 'react';
import './css/createKeyword.css';
import './css/mainContent.css';
import { KeywordCreate } from "./axios/api";
import { loginUserId } from './cookie.js' // 引入


class CreateButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const id = loginUserId();
    if(this.props.inputValue.length>32){
      alert("You have reached the maximum length limit")
    }else{
      KeywordCreate(this.props.inputValue,id).then(res => {
        if(res.message === "Keyword already exists!"){
          alert("Keyword already exists!")
        }else if(res.message === null){
          alert("Create successful")
          // window.location.href="/KeywordDecode"
        }
     },(error) =>{
       
     })
    console.log(this.props.inputValue)
  }
 }

  render() {
    return (
      <div className="buttons" onClick={this.handleClick}>
        <div className="confirm button curvy  background">
          <span className="button-text text">create</span>
        </div>
      </div>
    )
  }
}



class KeywordCreatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }

  change(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
        <div className="main-content">
          <div className = "definition">
          <div className="section-title ">Create Keyword </div>
          <div className="section-container container curvy">
            <div  className="title-container divider">
              <input value={this.state.inputValue} onChange={this.change.bind(this)} placeholder="Input keyword" maxlength="128" className="title-input curvy" />
              <div className="title-count" style={{color:this.state.inputValue.length>=32?"#FF0000":"black"}}>
                {this.state.inputValue.length} / 32
              </div>
              </div>
              <CreateButton inputValue ={this.state.inputValue}/>
          </div>
        </div>
      </div>
    );
  }
}

export default KeywordCreatePage