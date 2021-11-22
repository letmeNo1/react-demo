import React from 'react';
import '../../css/answerComment.css';
import Author from './Author.js'
import CommentEditor from './CommentEditor.js';
import { loginUserId } from '../../cookie.js' // 引入
import MoreIcon from '../AnswerCard/MoreIcon'



class CommentCardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
      <div className="card-body-text">
        <div className="brax-render render">
          <span className="brax-node pre">
            <span className="text">{this.props.content}</span>
            </span>
            </div>
        </div> 
       </div>
    )
  }
}

class CommentCardHeader extends React.Component {
  
  render() {
    console.log(this.props.commentId)
    return (
      <div className="card-header" >
          <Author creatorName = {this.props.creatorName} avatarUrl = {this.props.avatarUrl}
              title = {this.props.createInfo}
          />
          {
          loginUserId()==this.props.creatorId?<MoreIcon type = {"Comment"} id= {this.props.commentId}  creatorId= {this.props.creatorId} changeParentEditState = {""} />:""
           }
      </div>
    )
  }
}
class AnswerComment extends React.Component {
  render() {
    const commentsInfo = this.props.commentsInfo
    return (
      <div className="comment-list curvy comment-list">
        <div className ="list-header container">
          <div className="basic-info title">
            <span>
              <strong>
                {
                  "Comments(" + commentsInfo.length +")"
                }</strong>
              </span>
            </div> 
          </div> 
          <div>
            {
              commentsInfo.map((comment) =>
                <div className="content container">
                  <CommentCardHeader creatorId = {comment.creatorId} commentId = {comment.id} creatorName = {comment.creatorName} createInfo = {comment.comment} avatarUrl = {comment.avatarUrl}/>
                  <CommentCardBody  content = {comment.content}/>
               </div>)
            }

          </div>
         
          <div className="editor">
           <CommentEditor answerId={this.props.answerId}/>
          </div>
      </div>
    );
  }
}

export default AnswerComment