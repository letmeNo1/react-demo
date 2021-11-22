

import React from 'react';
import MoreIcon from './AnswerCard/MoreIcon'
import Author from './AnswerCard/Author.js'
import AnswerContent from './AnswerCard/AnswerContent.js'
import AnswerTools from './AnswerCard/AnswerTools.js'
import '../css/answerCard.css';
import { showComments} from "../axios/api";
import AnswerEditor from './AnswerCard/AnswerEditor'
import {loginUserId} from '../cookie'
import AnswerComment from './AnswerCard/AnswerComment'

class AnswerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditState: false,
      commentsInfo: [],
    };
    this.changeEditState = this.changeEditState.bind(this);
  }

  // box-shadow: 0 2px 4px #e5e5e5

  componentDidMount () {
    showComments(this.props.answer.id)
      .then(res => {
        this.setState({
            isLoaded: true,
            commentsInfo: res
        })
      },(error) =>{
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  changeEditState() {
    this.setState(prevState => ({
      isEditState: !prevState.isEditState
    }));
  }


  render() {
    let answersEffect = "0 4px 9px #e5e5e5"
    
    let kudos = this.props.answer.kudos
    if(kudos>50){
      answersEffect = "0px 4px 3px #4e4de7"
    }
    if(kudos>100){
      answersEffect = "0px 4px 5px #ee62ff"
    }
    if(kudos>300){
      answersEffect = "0px 4px 9px #fff100"
    }
    
    let content = this.props.answer.content
    let id = this.props.answer.id
    let creatorId = this.props.answer.creatorId
    let userId =  loginUserId()
    let commentsInfo = this.state.commentsInfo
    const type ="Answer"
    if(content.match("p")){
      content = "<p>" +content+"</p>"
    }
    return (
      <div className ="answer-card" id={"answer" + id} style = {{boxShadow: answersEffect}}>
      <div className="card-header" style = {{paddingLeft: userId==creatorId?"26px":"0px"}}>
        <Author creatorId = {creatorId} creatorName = {this.props.answer.creatorName} avatarUrl = {this.props.answer.avatarUrl}
        title = {this.props.answer.title}
         />
        {
          userId==creatorId?<MoreIcon type = {type} id= {id}  creatorId= {creatorId} changeParentEditState = {this.changeEditState}/>:""
        }
      </div>
      <div className="card-middle">{
        this.state.isEditState?<AnswerEditor id = {id} content = {content}/>:<AnswerContent answerInfo = {this.props.answer} />
      }
      </div>

      <div className="card-bottom">
        <AnswerTools commentCount = {commentsInfo.length} likeCount = {this.props.answer.kudos}/>
      </div>
      <div>
        <AnswerComment  answerId = {id} commentsInfo = {commentsInfo} onClick = {this.showComments}/>
      </div>
    </div>
    );
  }
}

export default AnswerCard