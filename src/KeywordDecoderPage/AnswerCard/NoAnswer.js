

import React from 'react';
import '../../css/answerCard.css';
import edit_document_icon from '../../img/editdocument.png';
import AnswerEditorWithoutContent from './AnswerEditorWithoutContent'


class NoAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnswerEditorShow: false,
      isNoAnswerYetShow: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    this.setState(prevState => ({
      isAnswerEditorShow: !prevState.isAnswerEditorShow,
      isNoAnswerYetShow: prevState.isAnswerEditorShow
    }))
  }

  handleClick(){
    this.setState(prevState => ({
      isAnswerEditorShow: !prevState.isAnswerEditorShow,
      isNoAnswerYetShow: prevState.isAnswerEditorShow
    }))
  }

  render() {
    console.log(document.getElementsByClassName("answer-editor").length)
    return (
      <div className ="answer-card">
        <div>
          {
            this.state.isAnswerEditorShow?  
            <div className="answer-editor" onBlur={this.onChange}>
              <AnswerEditorWithoutContent />
          </div>
          :
          ""
          }
          {
            this.state.isNoAnswerYetShow?
            <div className ="answer-card">
              <div>
                <div className="no-answer-yet-card" >
                  <img 
                    className="edit-document-icon"
                    src={edit_document_icon}
                    alt = "edit-document"/>
                  <div className="no-answer-yet"> No answer yet, start <div className="writing-answer" onClick={this.handleClick}>
                    writing the first answer
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            :
            ""
          }
        </div>
    </div>
    );
  }
}

export default NoAnswer