import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import SignUp from './components/forms/SignUp';
import LogIn from './components/forms/LogIn';
import './App.css';
import { ItemsList } from './components/ItemsList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ItemsList/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
