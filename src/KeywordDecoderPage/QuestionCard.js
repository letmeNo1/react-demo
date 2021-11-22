

import React from 'react';
import '../css/questionCard.css';



class QuestionCard extends React.Component {
  render() {
    const keyword = this.props.pageInfo.keyword
    const modifyComment = this.props.pageInfo.modifyComment

    return (
      <div className ="full-question-card" >
        <div className="question-card-header">
          <div className="question-card-content">
            <div className="question-info" style = {{display: "inline-block"}}>
              <div className ="question-title"> {keyword}</div>
              <div className ="question-create-info"> {modifyComment}</div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default QuestionCard