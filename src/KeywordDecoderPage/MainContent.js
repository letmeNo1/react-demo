
import React from 'react';
import '../css/mainContent.css';
import AnswerCard from './AnswerCard'
import NoAnswer from './AnswerCard/NoAnswer'
import '../css/mainContent.css';
import QuestionCard from './QuestionCard';
import AnswerEditorWithoutContent from './AnswerCard/AnswerEditorWithoutContent'
import {loginUserId} from '../cookie'
class AddAnswerButton extends React.Component {
  render() {
    return (
      <div className="send-answer-button answer-button">
        <div className="send-answer answer add-answer-button">
          <div className= "add-answer-text">
            {
              this.props.alreadyAnswer?"Answered, click to jump to your answer":
              this.props.isAnswerEditorShow?"Cancel add":"Add new answer"
            }
          </div>
        </div>
    </div>
    );
  }
}
class MainContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isAnswerEditorShow: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(loginUserId()==undefined){
      alert("You are still logged in, please log in first")
      console.log(window.history)
      window.location.href='/login';
    }
    else if(this.props.alreadyAnswer){
      let anchorElement = document.getElementById("creator-" + loginUserId());
      anchorElement.scrollIntoView();
    }
    else{
      this.setState(prevState => ({
        isAnswerEditorShow: !prevState.isAnswerEditorShow
      }));
    }
  }


  render (){
    const pageInfo = this.props.pageInfo
    const answers = this.props.pageInfo.answers
    const keywordId = this.props.pageInfo.id
   
    return(
      <div className = "definition">
        <div className="main-top"></div>
           <QuestionCard pageInfo = {pageInfo}/>
        <div>
        <div className="answer-card" onClick={this.handleClick}>
           <AddAnswerButton  alreadyAnswer = {this.props.alreadyAnswer} isAnswerEditorShow = {this.state.isAnswerEditorShow}/>
        </div>
          {
            this.state.isAnswerEditorShow?
            <div className="answer-card">
                <AnswerEditorWithoutContent keywordId ={keywordId}/>
            </div>
            :""
          }
          {
            typeof(answers)=="undefined"?"loading":
            answers.length===0?<NoAnswer />:
            answers.map((answer) =>
              <AnswerCard  answerId = {answer.id} answer = {answer}
            />
          )
          }
        </div>
      </div>
    )
    }
}

export default MainContent