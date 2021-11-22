import more_icon from '../../img/more.png';
import edit_icon from '../../img/edit.png';
import trash_icon from '../../img/trash.png';
import React from 'react';
import '../../css/mainContent.css';
import { deleteKeywordAnswer,deleteComment } from "../../axios/api";

import axios from "axios";

class EditIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick() {
    this.props.changeParentEditState()
    this.props.changeParentMoreDropdownShow()
  }

  render (){
    return(
      <div className ="edit more-option" onClick={this.handleClick}> 
      <div className = "edit more-icon">
      <img 
        className="edit-icon icon"
        src={edit_icon}
        alt="edit-icon"/>
         </div>
      <div className = "edit more-text ">
          <span>edit</span>
      </div>
    </div>
    )
  }
}

class DeleteIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick() {
    alert("确认删除?")
    if(this.props.deleteType ==="Answer"){
      deleteKeywordAnswer(this.props.id,this.props.creatorId
      )
      .then(res => {
        alert("delete success!")
        window.location.reload()
      },(error) =>{
        alert("delete failed!")
      })
    }else if(this.props.deleteType ==="Comment"){
      deleteComment(this.props.id,this.props.creatorId
        )
        .then(res => {
          alert("delete success!")
          window.location.reload()
        },(error) =>{
          alert("delete failed!")
        })
    }else {
      console.log("没有传参")
    }
  }

  render (){
    return(
      <div className ="delete more-option" onClick={this.handleClick} >   
        <div className = "delete more-icon"> 
          <img 
              className="trash-icon icon"
              src={trash_icon}
              alt="trash-icon"/>
          </div>
          <div className = "delete more-text">
            <span>delete</span>
            </div>
      </div>  
    )
  }
}

class MoreIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreDropdownShow: false,
    };

    this.changeMoreDropdownShow = this.changeMoreDropdownShow.bind(this);
  }

  changeMoreDropdownShow() {
    this.setState(prevState => ({
      moreDropdownShow: !prevState.moreDropdownShow,
    }));
  }
  
  render (){
    return(
      <div className ="more-container">
      <div className="more-button" onClick={this.changeMoreDropdownShow}>
        <img 
            className="more-icon"
            src={more_icon}
            alt="more-icon"/>
      </div>
      {
        this.state.moreDropdownShow?
            <div className = "more-dropdown">
              {this.props.changeParentEditState!==""?<EditIcon changeParentMoreDropdownShow = {this.changeMoreDropdownShow} changeParentEditState = {this.props.changeParentEditState}/>:
              ""
              }
            <DeleteIcon deleteType = {this.props.type} id = {this.props.id} creatorId = {this.props.creatorId} />
          </div>
        :""
      }
    </div>
    )
  }
}

export default MoreIcon