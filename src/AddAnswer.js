import React from 'react';
import { getDecodeKeywordInfo } from "./axios/api";
import AnswerEditorWithoutContent from './KeywordDecoderPage/AnswerCard/AnswerEditorWithoutContent'
import './css/questionCard.css';


class QuestionCard extends React.Component {
  render() {
    const keyword = this.props.pageInfo.keyword
    const modifyComment = this.props.pageInfo.modifyComment

    return (
      <div className ="full-question-card-single-add" >
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

class KeywordPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pageInfo: []
    }
  }
  
  componentDidMount(){
    const keyword = this.props.match.params.keyword;
    if(keyword!=="undefined"){
      getDecodeKeywordInfo(keyword).then(res => {
        this.setState({
          isLoaded: true,
          pageInfo: res.data
        })
      },(error) =>{
        this.setState({
          isLoaded: true,
          pageInfo: null
        });
      })
    }
  }

  render() {
    const { pageInfo } = this.state;
    return (
      <div className = "definition">
            <div className="main-top">
            </div >
              <QuestionCard pageInfo = {pageInfo}  />
            <div>
            <div className="answer-card">
                <AnswerEditorWithoutContent keywordId ={pageInfo.id}/>
            </div>
        </div>
    </div>
  
    );
  }
}

export default KeywordPage