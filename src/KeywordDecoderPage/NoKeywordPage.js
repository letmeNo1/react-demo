import React from 'react';
import '../css/answerCard.css';
import edit_document_icon from '../img/editdocument.png';

class NoKeywordPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href="/KeywordCreate"
  }

  render() {
    return (
      <div className ="answer-card">
        <div>
          <div className="no-answer-yet-card">
            <img 
              className="edit-document-icon"
              src={edit_document_icon}
              alt = "edit-document"/>
            <div className="no-answer-yet"> No keyword yet, click <div className="writing-answer" onClick={this.handleClick}>
              here
              </div> to create a new keyword
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default NoKeywordPage