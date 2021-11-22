
import React ,{ useState }from 'react';
import '../../css/author.css';
import i18next from 'i18next';
import { extend } from 'wangeditor-for-react';
import { loginUserId } from '../../cookie.js' // 引入
import { addDecodeKeywordAnswer } from "../../axios/api";
const ReactWEditorOfLang = extend({ i18next });

function SendButton(props) {
    const htmlContent = props.htmlContent;
    const keywordId = props.keywordId;
    const id = loginUserId();
    function handleClick(e) {
        if(htmlContent ===null){
            alert("Please enter content...")
        }else if(id ===undefined){
            alert("Not logged in, please log in first")
            window.location.href= "/login/Keyword/5/AddAnswer"
        }
        else{
            alert("Confirm submission??")
            addDecodeKeywordAnswer(keywordId,id,htmlContent)
              .then(res => {
                console.log(res)
                alert("add success!")
                window.location.href= "/KeywordDecode/"+keywordId
              },(error) =>{
                console.log(error)
                alert("add failed!")
              })
        }
      }
      return (
        <div className="send-answer-button answer-button" onClick={handleClick}>
          <div className="send-answer answer">
            Send
          </div>
        </div>
      )
    }

    

function AnswerEditorWithoutContent(props) {
  const [html, setHtml] = useState(null);
  return (
    <div>
      
        <div className = "answer-editor-update">
          <ReactWEditorOfLang
              linkImgCallback={(src,alt,href) => {
            
              }}
              onlineVideoCallback={(video) => {
            
              }}
              onChange={(html) => {
                setHtml(html)
              // console.log('onChange html:', html)
              }}
              onBlur={(html) => {
              // console.log('onBlur html:', html)
              }}
              onFocus={(html) => {
                // editorRef.current.editor.txt.html("zxxx")
              }}

              placeholder="Please enter..."
              config={{
                  lang: 'en',
                  fontSizes: {
                      'x-small': { name: '10px', value: '1' },
                      small: { name: '12px', value: '2' },
                      normal: { name: '16px', value: '3' },
                      large: { name: '18px', value: '4' },
                      'x-large': { name: '24px', value: '5' },
                      'xx-large': { name: '32px', value: '6' },
                      'xxx-large': { name: '48px', value: '7' },
              },
              }}
              
          />
          <div className = "answer-edit-tool">
              <SendButton keywordId = {props.keywordId} htmlContent = {html}/>
          </div>
      </div>

    </div>
      
    )
}

export default AnswerEditorWithoutContent