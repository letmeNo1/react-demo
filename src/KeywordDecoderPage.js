import React from 'react';
import MainContent from './KeywordDecoderPage/MainContent.js';
import NoKeywordPage from './KeywordDecoderPage/NoKeywordPage.js';
import { getDecodeKeywordInfo } from "./axios/api";
import {loginUserId} from "./cookie"

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
        console.log(res.data)
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
    const state = this.props.location.pathname.split('\/')[3];
    let pageInfoJson = JSON.parse(JSON.stringify(pageInfo))
    let alreadyAnswer = false;
    if(pageInfoJson.id!=undefined) {
      pageInfoJson.answers.forEach(element => {
        if(loginUserId()==element.creatorId){
          console.log("已有回答")
          alreadyAnswer=true
        }
      });
    }
    
    return (
        <div className="main-content">
          {
            pageInfoJson==null?<NoKeywordPage />:<MainContent alreadyAnswer = {alreadyAnswer} isAddNewPage = {state} pageInfo = {pageInfoJson}/>
          }
        </div>
  
    );
  }
}

export default KeywordPage