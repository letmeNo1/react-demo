

import React from 'react';
import '../../css/index.css';
import '../../css/answerCard.css';
import more_icon from '../../img/comment.png'
import like_icon from '../../img/like.png'
import liked_icon from '../../img/liked.png'

const likeInfo = {
  likeCount:0,
  isLiked:true
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: likeInfo.isLiked,
      likeCount: this.props.likeCount>0?this.props.likeCount:"",
      likeIcon: like_icon
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      likeCount: prevState.isLike? this.props.likeCount:this.props.likeCount +1,
      likeIcon: prevState.isLike ? like_icon: liked_icon
    }
    ));
    
  }

  render(){
    const {likeCount} = this.state
    return (
      <div className ="like-button action-button button" onClick={this.handleClick}>
      <img
          className="like-button-icon icon"
          src={this.state.likeIcon}
          alt="like-icon"/>
      <span className="like-count">{likeCount>0?likeCount:""}</span>
      <div className = "label">
        <span>like</span>
      </div>
    </div>
    )
  }
}

class CommentButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentCount: this.props.commentCount,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   
}

  render(){
    return (
      <div className ="comment-button action-button button">
      <img
          className="comment-button-icon icon"
          src={more_icon}
          alt="comment-icon"/>
        <span className="comment-count">{this.props.commentCount}</span>
        <div className = "label">
        <span>comment</span>
      </div>
    </div>
    )
  }
}

class AnswerTools extends React.Component {
  render() {
    return (
      <div className = "answer-tools">
        <CommentButton commentCount = {this.props.commentCount}/>
        <LikeButton likeCount = {this.props.likeCount}/>
    </div>
    );
  }
}

export default AnswerTools