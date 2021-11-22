
import React from 'react';
import '../../css/author.css';
import '../../cookie'
import {loginUserId} from '../../cookie'


class Avatar extends React.Component {
  render(){
    return(
      <img 
      className="avatar"
      src={"https://0ad9-183-253-23-30.ngrok.io/"+ this.props.avatarUrl}
      alt={this.props.avatarUrl}/>
    )
  }
}

class AuthorName extends React.Component {
  render(){ 
    return(
        <div className ="author-name">
          {this.props.creatorName}
      </div>
      )
    
  }
}

class AuthorTitle extends React.Component {
  render(){
    return(
      <div className ="author-title">
         {this.props.title}
      </div>
    )
  }
}

class Author extends React.Component {
  render() {
    return(
      <div className="author" id ={"creator-" + this.props.creatorId} style = {
        {paddingLeft: loginUserId()==this.props.creatorId?"1px":"26px"}
      }>
      <div className="author-info">
        <Avatar avatarUrl={this.props.avatarUrl} />
        <AuthorName creatorName = {this.props.creatorName} />
        <AuthorTitle title = {this.props.title}/>
      </div>
    </div>
    )
  }
}

export default Author