import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import ItemsList from './components/ItemsList';
import Login from './components/Login';
import {Product}  from './components/EditProduct';
import {Registration} from './components/Registration';


function App() {
  return (
    <div className="App">
      
        <header className="App-header"> 
          {/* <ItemsList/> */}
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/protected/itemsList'>Products</Link>
            <Link to='/register'>Register</Link>
            <Switch>
              <PrivateRoute exact path='/protected/itemsList' component={ItemsList}/>
              <PrivateRoute exact path='/protected/itemsList/:id' component={Product}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Registration}/>
            </Switch>
          </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header> 
    </div>
  );
}

export default App;
