

import React from 'react';
import '../../css/answerCard.css';
import ReactDOM from 'react-dom';


class ShowMore extends React.Component {
  render() {
    return (
      <div className="show-more">
      {this.props.text}
      </div>
    )
  }
}

class ConvertStringToHtml extends React.Component {
  render() {
    let content = this.props.content
    if(content.match("p")){
      content = "<p>" +content+"</p>"
    }
      return(
        <div dangerouslySetInnerHTML={{__html:content}} />
      )
  }
}

class AnswerContentText extends React.Component {
  render() {
    return (
      <div className ="answer-content-text" style={{overflow: this.props.isHide?"":"hidden",maxHeight:this.props.isHide?"":"110px" }}>
       <ConvertStringToHtml content = {this.props.content}/>
    </div>
    )}
}

class AnswerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: false,
      overflow: false,
      text: '...show more',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isHide: !prevState.isHide,
      text: prevState.isHide ? '...show more': 'show less'
    }));
  }

  componentDidMount () { 
    const dom = ReactDOM.findDOMNode(this);
    if (dom.children[1].scrollHeight> dom.children[1].clientHeight) {
      this.setState({
        overflow: true   
      })
    }
  }  

  render() {
    const {overflow,text,isHide} = this.state
    return (
      <div>
         <div className ="created-time">{this.props.answerInfo.modifyComment}</div>
         <AnswerContentText isHide = {isHide} content = {this.props.answerInfo.content}/>
         <div style={{display: overflow?"":"none"}} onClick={this.handleClick}>
           <ShowMore text = {text}  />
         </div>
      </div>
     
    );
  }
}

export default AnswerContent