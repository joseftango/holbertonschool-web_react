import './App.css';
import {getFullYear, getFooterCopy} from './utils'

function focusInput(inputId) {
  document.getElementById(inputId).focus();
}


function App() {
  return (
    <div className="App">
      <div className="App-header">
			<img src='https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240114%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240114T200931Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f53eea9bd3e2e99959cf32a42eaf0d00c6cc2e055cd261724a70f8d8d4111317' alt="Holberton Logo" />
			<h1>School dashboard</h1>
		  </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='inputContainer'>
          <label onClick={() => focusInput('email')}>Email:</label>
          <input id='email' type="email" />
          <label onClick={() => focusInput('password')}>Password:</label>
          <input id='password' type="password" />
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
