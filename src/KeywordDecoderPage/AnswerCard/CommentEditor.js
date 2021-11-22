
import React ,{ useState,useRef }from 'react';
import '../../css/author.css';
import i18next from 'i18next';
import { extend } from 'wangeditor-for-react';
import { loginUserId,avatarUrl } from '../../cookie.js' // 引入
import { addComment } from "../../axios/api";
import send_icon from '../../img/send.png'
import no_Avatar from '../../img/noAvatar.png'

const ReactWEditorOfLang = extend({ i18next });


function SendButton(props) {
    const htmlContent = props.htmlContent;
    const answerId = props.answerId
    const id = loginUserId();

    function handleClick(e) {
        if(htmlContent ===null){
            alert("Please enter content...")
        }else{
          console.log(id)
          if(loginUserId()==undefined){
            alert("You are still logged in, please log in first")
            const keyword = props.location;
            console.log(keyword)
            // window.location.href='/login/'+keyword;
          }
          else{
            alert("Confirm submission?")
            addComment(answerId,id,htmlContent.replace(/<\s*\/?\s*[a-zA-z_]([^>]*?["][^"]*["])*[^>"]*>/g,""))
              .then(res => {
                alert("add success!")
                window.location.reload()
              },(error) =>{
                alert("add failed!")
              })
          }
           
        }
      }
      return (
        <div className="send-button" style={{display:"inline-block"}} onClick={handleClick}>
          <img 
            className="send-comment-button-icon"
            src={send_icon}
            alt="send-icon"/>
        </div>
      )
    }

  class Avatar extends React.Component {
    render(){
      return(
        <img 
        className="avatar"
        src={loginUserId()==undefined?no_Avatar:"https://0ad9-183-253-23-30.ngrok.io/"+avatarUrl()}
        alt={this.props.avatarUrl}/>
      )
    }
  }
  

function CommentEditor(props) {
  const [html, setHtml] = useState(null);
  let editorRef = useRef(null)

  React.useEffect(()=>{
    if(props.content){
      editorRef.current.editor.txt.html(props.content)
    }
  }, []);

  return (
    <div>
          <div className = "comment-editor" style={{display:"inline-block"}}>
            <Avatar />
            <div style={{display:"inline-block",width:"85%"}}>
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
                menus:[
                  ],
                height:40,
                showFullScreen:false

                }}   
            />
            </div >
            <SendButton answerId = {props.answerId} htmlContent = {html}/>
        </div>
    </div>
    )
}

export default CommentEditor


