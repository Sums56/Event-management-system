import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/Signup';
import Router from './config/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      
      <Router />
    </div>
  );
}

export default App;
