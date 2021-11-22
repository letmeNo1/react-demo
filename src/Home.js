import React from 'react';
import TopBar from './TopBar.js';
// import { Link } from 'react-router-dom'
// import tt from './tt.js';
// import 'antd/dist/antd.css';
// import xx from '../public/Home.html'
import './css/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      text:"TBD",
      element:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    document.getElementById("myFrame").contentWindow.document.querySelectorAll('[data-test-automation-id="' + this.state.element +'"]')[0].innerText=this.state.value
    // event.preventDefault();
  }

  componentDidMount(){
        let index =0;
        let cssPath = function getCssPath(el){
            if (!(el instanceof Element)) 
                return;
            let path = [];
            while (el.nodeType === Node.ELEMENT_NODE) {
                let selector = el.nodeName.toLowerCase();
                if (el.id) {
                    selector += '#' + el.id;
                    path.unshift(selector);
                    break;
                } else {
                    let sib = el, nth = 1;
                    while (sib = sib.previousElementSibling) {
                        if (sib.nodeName.toLowerCase() == selector)
                           nth++;
                    }
                    if (nth != 1)
                        selector += ":nth-of-type("+nth+")";
                }
                path.unshift(selector);
                el = el.parentNode;
            }
            return path.join(" > ");
         }
        
       
        function path(e) {
          let p = [];
          let automationId = getAutomationId(e);
          let ignoreIds = ["panel", "popup", "popupContent", "accordion"];
          var reg = new RegExp("^row[0-9]{3,20}$");//row400130977128 含3-20位数字
          let row = 0;
          if (automationId) {
            p.push(automationId);
          }
          while (e && e.parentNode) {
            let parent = e.parentNode;
            e = parent;
            if (parent) {
              automationId = getAutomationId(parent);
              if (!automationId || ignoreIds.includes(automationId) && !slibilingHasId(parent) || reg.test(automationId)) {
                if (reg.test(automationId)) { index = parent.sectionRowIndex + 1; }
                continue;
              }
        
              if (automationId == 'row') { row = parent.sectionRowIndex + 1 }
        
              if (automationId == 'root' && row != 0) { index = row; }
        
              if (automationId) {
                p.push(automationId.replace(':pending', ''));
              }
            }
            //判断目前的路径是否唯一，唯一则跳出循环
            let els = document.querySelectorAll(getSelectorOfPath(p).reverse().join(" "));
            if (els.length == 1) break;
          }
          return p;
        
          function getAutomationId(e) {
            return e.getAttribute ? e.getAttribute("data-test-automation-id") : "";
          }
        
          function slibilingHasId(e) {
            let slibiling = e.nextSibling;
            while (slibiling) {
              if (getAutomationId(slibiling)) {
                return true;
              }
              slibiling = slibiling.nextSibling
            }
            return false;
          }
        
          function getSelectorOfPath(p) {
            return p.map(obj => "[data-test-automation-id='" + obj + "']");
          }
        }
        //监听窗口大小改变
        document.getElementById("myFrame").contentWindow.window.addEventListener('click', (e)=> {
          let text = e.target.innerText
          let ss= (path(e.target).reverse().join('.')).split(".")
          ss.forEach(e => console.log('[data-test-automation-id="' + e +'"]')
          )
          let zz = cssPath(e)
          let length = ss.length-1
          console.log(zz)
          this.setState({
            text:text,
            element:ss[length]
          })
        });
  }

  render() {
    return (
          <div>
            <TopBar />
            <div className="mainContent">
              <div className="leftContent" >
                <iframe className="iframe" id="myFrame" title="myiframe" src= "http://cad0-202-163-1-218.ngrok.io/Home.html"
                width="1100px" height="800px"></iframe>
              </div >
              <div className="rightContent">
                  <label>
                    {this.state.text}:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <button type="submit" value="提交" onClick ={this.handleSubmit}>
                  提交
                  </button>
              </div>
            </div>
          </div>
    
    );
  }
}

export default Home