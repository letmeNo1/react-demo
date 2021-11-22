import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import KeywordDecoderPage from './KeywordDecoderPage';
import KeywordCreatePage from './KeywordCreatePage';
import AddAnswer from './AddAnswer';

import LoginPage from './LoginPage';
 
class App extends React.Component {
render(){
return(
  <Router >
      <div>
        <Route path="/" component={Home} />
        <Route path="/KeywordDecode/:keyword" component={KeywordDecoderPage} />
        <Route path="/KeywordCreate" component={KeywordCreatePage} />
        <Route path="/Keyword/:keyword/AddAnswer" component={AddAnswer} />
        <Route path="/Login/*" component={LoginPage}/>
        {/* <Route path="/Login" component={LoginPage} /> */}

        {/* <Route path="/AnswerCreatePage" component={AnswerCreatePage} /> */}
      </div>
  </Router>
  )
 }
}
export default App;