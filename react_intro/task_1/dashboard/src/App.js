import './App.css';
import {getFullYear, getFooterCopy} from './utils'

function App() {
  return (
    <div className="App">
      <div className="App-header">
			<img src='https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240113%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240113T152642Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=eb3fbfd21de80b684b0c311fab43abfc02ddb0943f2a358cdbd59deefb4d4dea' alt="Holberton Logo" />
			<h1>School dashboard</h1>
		  </div>
      <div className="App-body"><p>Login to access the full dashboard</p></div>
      <div className="App-footer"><p>Copyright {getFullYear()} - {getFooterCopy()}</p></div>
    </div>
  );
}

export default App;
