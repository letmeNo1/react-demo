
import React ,{ useState,useRef }from 'react';
import '../../css/author.css';
import i18next from 'i18next';
import { extend } from 'wangeditor-for-react';
import { loginUserId } from '../../cookie.js' // 引入
import { updateDecodeKeywordAnswer } from "../../axios/api";

const ReactWEditorOfLang = extend({ i18next });


function SendButton(props) {
    const htmlContent = props.htmlContent;
    const id = loginUserId();
    function handleClick(e) {
        if(htmlContent ===null){
            alert("Please enter content...")
        }else{
          console.log(id)
            alert("Confirm submission??")
            updateDecodeKeywordAnswer(props.id,id,htmlContent)
              .then(res => {
                alert("update success!")
              },(error) =>{
                alert("update failed!")
              })
            window.location.reload()
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

    function CancelButton(props) {
        function handleClick() {
             props.onEdit(false)
          }
          return (
            <div className="cancel-answer-button answer-button" onClick={handleClick}>
              <div className="cancel-answer answer">
                cancel
                </div>
            </div>
          )
        }
  

function AnswerEditor(props) {
  const [html, setHtml] = useState(null);
  const [edit, setEdit] = useState(true);
  let editorRef = useRef(null)

  React.useEffect(()=>{
    if(props.content){
      editorRef.current.editor.txt.html(props.content)
    }
  }, []);

  return (
    <div>
      {
        edit?
          <div className = "answer-editor-update">
            <ReactWEditorOfLang

                ref={editorRef}

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
                <SendButton id = {props.id} htmlContent = {html}/>
                <CancelButton onEdit={setEdit}/>
            </div>
      </div>:""
      }
    </div>
    )
}

export default AnswerEditor


